import './Input.css';
import { forwardRef } from "react";

export const Input = forwardRef(({ type, value, ...props }, ref) => {
  let defaultValue = value;

  if (type === 'date' && !value) {
    const today = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato "YYYY-MM-DD"
    defaultValue = today;
  }

  return (
    <input
      {...props}
      ref={ref}
      type={type}
      value={defaultValue}
      className='input-estilo'
    />
  );
});
