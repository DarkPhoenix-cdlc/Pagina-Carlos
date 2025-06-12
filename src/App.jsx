import { useState } from 'react'
import './App.css'
import Render3 from './components/Render3'
import Crypto from 'crypto-js'
import Cronometro from './components/Cronometro'
import TodoList from './components/TodoList'
import Colorpicker from './components/Colorpicker'
import Keycode from './components/keycode'
import Randompokemon from './components/Randompokemon'

function App() {

  const [conditionalRendering, setConditionalRendering] = useState({
    render1: false,
    render2: false,
    render3: false,
    render4: false,
    render5: false,
    render6: false
  })

  const handleConditionalRendering = (changeKey) => {
 setConditionalRendering({
      render1: changeKey == "render1",
      render2: changeKey == "render2",
      render3: changeKey == "render3",
      render4: changeKey == "render4",
      render5: changeKey == "render5",
      render6: changeKey == "render6"

    });
   
  }
const [id, setId] = useState();
const generarID = () => {
  let idrandom = crypto.randomUUID();
  setId(idrandom);
}



 let render3Section = null;
  if (conditionalRendering.render3) {
    render3Section = <Render3 generarID={generarID} id={id} />;
  }

  return (
    <>
      <div>
        <h2>Renderizado condicional</h2>
      </div>
      <div>
        <button onClick={() => handleConditionalRendering("render1")}>To do List</button>
        {"  "}
        <button onClick={() => handleConditionalRendering("render2")}>Cronometro</button>
        {"  "}
        <button onClick={() => handleConditionalRendering("render3")}>Generador de Ids aleatorios</button>
        {"  "}
        <button onClick={() => handleConditionalRendering("render4")}>Color Picker</button>
        {"  "}
        <button onClick={() => handleConditionalRendering("render5")}>Keycode</button>
        {"  "}
        <button onClick={() => handleConditionalRendering("render6")}>Random Pokemon</button>
        {"  "}
      </div>
      <div>
         {conditionalRendering.render1 && <TodoList/>}
        
         {conditionalRendering.render2 ? <Cronometro/> : null}
        {render3Section}
        {conditionalRendering.render4 && <Colorpicker/>}
        {conditionalRendering.render5 && <Keycode/>}
        {conditionalRendering.render6 && <Randompokemon/>}

      </div>
    </>
  )
}

export default App
