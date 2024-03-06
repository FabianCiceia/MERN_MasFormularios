import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const { agregar , eliminar , completado, tareas, checks} = List();
  const manejarCambiosInput = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () =>{
    agregar(nuevaTarea);
  }
  return (
    <>  
      <div className='input'>
        <input className='tareas-input' type="text" value={nuevaTarea} onChange={manejarCambiosInput} placeholder='Que tarea deseas agregar ? '/>
        <button className='tareas-input-button' onClick={agregarTarea}>Agregar tarea</button>
      </div>
      <div className='container-tareas'>
        {
          tareas.map((tarea, i) =>(
            <div className='tareas' key ={i}> 
              <div className='tareas-text'  style={{textDecoration: checks[i] ? 'line-through' : 'none'}}  >{tarea}</div>
              <div>
                <input className='tareas-check' type="checkbox"  onChange={() => completado(i)} checked={checks[i]} />
                <button className='tareas-button' onClick={() => eliminar(i)}>Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
