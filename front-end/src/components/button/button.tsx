import { MouseEvent } from 'react';

interface ButtonProps {
  onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ onButtonClick }: ButtonProps) {
  return (
    <button type="button" onClick={ onButtonClick }>
      Enviar
    </button>
  );
}

export default Button;
