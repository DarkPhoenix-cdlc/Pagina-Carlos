import React, { useState } from 'react';

const Colorpicker = () => {
  const [color, setColor] = useState('#ff0000'); // Valor por defecto: rojo

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copiado el color: ' + text))
      .catch(() => alert('Error copiando'));
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>Color Converter</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => {
          const nuevoColor = e.target.value;
          console.log('Nuevo color:', nuevoColor); // <-- Verifica en consola
          setColor(nuevoColor);
        }}
      />

      <div>
        <label>HEX:</label>
        <input type="text" value={color} readOnly />
        <button onClick={() => handleCopy(color)}>Copiar</button>
      </div>

      <div>
        <label>RGB:</label>
        <input type="text" value={hexToRgb(color)} readOnly />
        <button onClick={() => handleCopy(hexToRgb(color))}>Copiar</button>
      </div>
    </div>
  );
};

export default Colorpicker;
