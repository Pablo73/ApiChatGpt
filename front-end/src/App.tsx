import { ChangeEvent, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Input from './components/input/input';
import Button from './components/button/button';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: inputValue,
        }),
      });

      const data = await response.json();
      console.log('Response API:', data);

      setGeneratedImage(data.generated_image);
    } catch (error) {
      console.error('Error when making the request:', error);
    }
  };
  return (
    <div>
      <Header />
      <Input onInput={ handleInput } />
      <Button onButtonClick={ handleButtonClick } />
      {generatedImage && (
        <img src={ generatedImage } alt="Generated Imagem" />
      )}
    </div>
  );
}

export default App;
