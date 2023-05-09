import React from "react";
import '../style-sheets/boton.css';

function Boton(props)
{

    const esOperador = valor =>
    {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    let botonClase = '';

    if(esOperador(props.children))
    {
        botonClase = "operador";
    }

    return (
        <div
        className={`boton-contenedor ${botonClase}`}
        onClick={ ()=> props.manejarClic(props.children)}
         >
            {props.children}
        </div>
    );
}

export default Boton;