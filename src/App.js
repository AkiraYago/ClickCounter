import './App.css';
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from 'react';

function App() {
  //numClicks: Es un estado que vamos a guardar, usar y actualizar y tambien lo vamos a mandar como PROP al componente
  //setNumClicks: Es la funcion que nos permitira actualizarlo
  //useState(0): el 0 es el valor inicial que va a tener
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    console.log("Click");
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador
          numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
