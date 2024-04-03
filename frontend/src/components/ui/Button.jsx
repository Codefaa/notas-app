import './Button.css';

export function Button({ onClick, children, color }) {
    return (
      <button className='boton-estilo' onClick={onClick} style={{color: color}}>
        {children}
      </button>
    );
  }
  