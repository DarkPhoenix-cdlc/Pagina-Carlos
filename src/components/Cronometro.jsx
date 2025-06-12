import { useState, useEffect, useRef } from 'react';

function Cronometro() {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const [parado, setParado] = useState(false);
  const [marcas, setMarcas] = useState([]);

  const intervalo = useRef(null);
  const inicio = useRef(null);

  useEffect(() => {
    if (activo && !parado) {
      inicio.current = Date.now() - tiempo; 
      intervalo.current = setInterval(() => {
        setTiempo(Date.now()-inicio.current);
      },10); 
    }

    return () => clearInterval(intervalo.current);
  }, [activo, parado, tiempo]);


  const formatearTiempo = (ms) => {
    const mins = String(Math.floor(ms / 60000)).padStart(2, '0');
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const milis = String(ms % 1000).padStart(3, '0');
    return `${mins}:${secs}:${milis}`;

  };

  const iniciar = () => {
    setActivo(true);
    setParado(false);
  };

  const parar = () => {
    setParado(true);
    clearInterval(intervalo.current);
  };

  const reiniciar = () => {
    setTiempo(0);
    setMarcas([]);
    setParado(false);
    setActivo(false);
  };

  const añadirMarca = () => {
    setMarcas([...marcas, tiempo]);
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>
        {formatearTiempo(tiempo)}
      </div>

      <div>
        {!activo && (
          <button onClick={iniciar}>Iniciar</button>
        )}

        {activo && !parado && (
          <>
            <button onClick={añadirMarca}>Añadir Marca</button>
            <button onClick={parar}>Parar</button>
          </>
        )}

        {activo && parado && (
          <>
          <button onClick={reiniciar}>Reiniciar</button>
            <button onClick={iniciar}>Reanudar</button>
            
          </>
        )}
      </div>

      {marcas.length > 0 && (
        <div>
          <h3>Marcas de tiempo:</h3>
          <ol>
            {marcas.map((marca) => (
              <li>
               {formatearTiempo(marca)}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}


export default Cronometro;
