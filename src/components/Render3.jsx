import React from 'react'

function Render3({generarID, id}) {
    
    return(
        <div>
            <h2>Generador de ID</h2>
            <button onClick={generarID}>Generar ID</button>
            <p>ID--{id}</p> 
        </div>
    )
}

export default Render3