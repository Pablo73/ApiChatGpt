import { ChangeEvent } from 'react';
import './input.css';

interface InputProps {
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ onInput }: InputProps) {
  return (
    <input
      type="text"
      name="input-prompt"
      className="input"
      placeholder="Prompt"
      onChange={ onInput }
    />
  );
}

export default Input;
