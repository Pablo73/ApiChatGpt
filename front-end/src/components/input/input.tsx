import { ChangeEvent } from 'react';

interface InputProps {
  onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ onInput }: InputProps) {
  return (
    <input
      type="text"
      name="input-prompt"
      className="input"
      onChange={ onInput }
    />
  );
}

export default Input;
