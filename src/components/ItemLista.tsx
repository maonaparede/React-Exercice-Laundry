import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function ItemLista(props){

    const navigate = useNavigate();

    const href = props.href;
    const texto = props.texto;
    const id = props.id;

return(
    <div className="columns is-flex is-vcentered has-background-light m-2">
        <div className="column is-10">
            <p>{texto}</p>
        </div>
        <div className="column">
            <a className="button is-warning is-rounded is-centered" 
                onClick={()=>{ navigate(href, {state:{id:id}}) }} >
                Editar
            </a>
        </div>
    </div>
)
}

export default ItemLista;