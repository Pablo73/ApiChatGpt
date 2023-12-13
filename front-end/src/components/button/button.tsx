import { MouseEvent } from 'react';
import './button.css';

interface ButtonProps {
  onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ onButtonClick }: ButtonProps) {
  return (
    <button type="button" onClick={ onButtonClick } className="button">
      Enviar
    </button>
  );
}

export default Button;
