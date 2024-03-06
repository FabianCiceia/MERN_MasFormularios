import React, { useState } from 'react';

function TuComponente() {
    const [bloques, setBloques] = useState([]);
    const [color, setColor] = useState('#000');
    const agregarBloque = (color) => {
        setBloques([...bloques, { color }]);
        console.log(`Bloque color ${color} Agregado`)
    };

    return {
        agregarBloque,
        bloques,
        color,
        setColor
    };
}

export default TuComponente;
