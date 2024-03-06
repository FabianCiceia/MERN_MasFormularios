import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgregarCaja from './components/AgregarCaja';

function App() {

  const { agregarBloque, bloques,color,  setColor } = AgregarCaja();


  const agregar = () => {
    agregarBloque(color);
  }
  const cambiarcolor =  (e) =>{
    setColor(e.target.value);
  }

  return (
    <div>
      <div className='options-color'>
      <input className='set-color' type="color" onChange ={cambiarcolor} />
      <button className='in-color' onClick={agregar}>Agregar Bloque Rojo</button>
      </div>
      <div className='container-block'>
        {bloques.map((bloque, index) => (
          <div key={index} className='block' style={{ backgroundColor: `${bloque.color}`}}></div>
        ))}
        
      </div>
    </div>
  );
}

export default App;