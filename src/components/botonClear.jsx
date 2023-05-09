
import React from "react";
import '../style-sheets/boton.css';

const BotonClear = (props) =>
{
    return (
        <div className="boton-clear"
        onClick={props.manejarClic}>
            {props.children}
        </div>
    );
};

export default BotonClear;