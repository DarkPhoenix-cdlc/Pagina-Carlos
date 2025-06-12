import React from 'react'
import { useState } from 'react';

const TodoList = () => {
    const [objetivo, setobjetivo] = useState("");
    const [listaObjetivos, setListaObjetivos] = React.useState([]);
    const handleOnChange = (e) => {
        setobjetivo(e.target.value);
    }
    const handleOnClick = () => {
            setListaObjetivos([...listaObjetivos, objetivo]);
            setobjetivo("");
    }
    const handleOnDelete = (index)=> {
        const newList = listaObjetivos.filter((item, i) => i !== index);
        setListaObjetivos(newList);

    }

    return (
        <>
        <div>
            <h2>To Do List</h2>
           < input type="text" value={objetivo} onChange={handleOnChange} />
           <button onClick={handleOnClick}>Añadir</button>
        </div>
        <ol>
            {listaObjetivos.map((item, index) => (
                <li key={index}>

                    {item} <button onClick={() => handleOnDelete(index)}>Eliminar</button>
                </li>
            ))}
        </ol>
        </>
    )
}

export default TodoList