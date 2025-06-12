import React, { useEffect, useState } from 'react';

const Keycode = () => {
  const [tecla, setTecla] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setTecla({
        key: event.key,
        code: event.code,
        keyCode: event.keyCode
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>
      <h2>Presiona una tecla</h2>
      {tecla ? (
        <div>
          <p><b>Tecla:</b> {tecla.key}</p>
          <p><b>Codigo:</b> {tecla.code}</p>
          <p><b>KeyCode:</b> {tecla.keyCode}</p>
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default Keycode;
