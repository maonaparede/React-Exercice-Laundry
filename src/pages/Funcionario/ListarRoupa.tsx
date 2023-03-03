import { useState } from "react";
import Navbar from "../../components/Navbar";
import ItemLista from "../../components/ItemLista";



function ListarRoupa(){

   let json2 = [{"idPeca":1,"nome":"Calça","tempoLimite":2, "preco":20.50}, {"idPeca":2,"nome":"Camisa","tempoLimite":2,  "preco":12.05}];
return(
<>
        <Navbar func="true"/>
        <div className="column">
            <div className="box">
                <p className="title is-5">Roupas</p>
            </div>

            <div className="box">
                <div className="content">
                    {json2.map((item) =>(
                        <ItemLista key={item.idPeca} id={item.idPeca} texto={`${item.nome} - R$${item.preco}`} href={'/Roupa'}/>
                    ))}
                </div>
            </div>
        </div>
</>    
)
}

export default ListarRoupa;