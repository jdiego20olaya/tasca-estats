import { useState } from 'react';
import './App.css'; // Asegúrate de que la extensión sea .css o la correcta

function Micontador() {
  const [count, setCount] = useState(0);

  
  function incrementar  ()  {
    setCount(count + 1);
  };

  function decrementar  ()  {
    setCount(count - 1);
  };

 
  return (
  <div className="color_de_base"> 
    <div className="caja">
      <h1 className="contenido_letra">CONTADOR INTERACTIVO</h1>
      <div className="caja_contador">
        {count}
      </div>
      <div className="botones_caja">
        <button className="boton_decrementar" onClick={decrementar}>Restar</button>
        
        <button className="boton_incrementar" onClick={incrementar}>Incrementar</button>
      </div>
    </div>
  </div>
);
  
}

export default Micontador;