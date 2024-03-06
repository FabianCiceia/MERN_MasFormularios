import React, { useState } from 'react'

function List() {

    const [tareas, setTareas] = useState([]);
    const [checks, setCheck] = useState([])
    const agregar = (tarea) =>{
        setTareas([...tareas,tarea]);
        setCheck([...checks,false]);
    };



    const eliminar = (tarea) =>{
        const nuevastareas = [...tareas];
        const nuevochecks = [...checks];
        nuevastareas.splice(tarea, 1);
        nuevochecks.splice(tarea, 1);
        setTareas(nuevastareas);
        setCheck(nuevochecks);
    }

    const completado = (tarea) => {
        const nuevochecks = [...checks];
        nuevochecks.splice(tarea, 1, !checks[tarea]);
        setCheck(nuevochecks);
    }

    return{
        agregar,
        eliminar,
        completado,
        tareas,
        checks
    };
}

export default List
