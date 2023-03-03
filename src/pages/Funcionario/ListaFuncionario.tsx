import { useState } from "react";
import Navbar from "../../components/Navbar";
import ItemLista from "../../components/ItemLista";



function ListarFuncionario(){

    let json = [{"idFuncionario":1,"nome":"João","email":"joao@gmail.com"}, {"idFuncionario":2,"nome":"Carlos","email":"carlos@gmail.com"}];

return(
<>
        <Navbar func="true"/>
        <div className="column">
            <div className="box">
                <p className="title is-5">Funcionários</p>
            </div>

            <div className="box">
                <div className="content">
                    {json.map((item) =>(
                        <ItemLista key={item.idFuncionario} texto={`${item.nome} - ${item.email}`} id={item.idFuncionario} href={'/Funcionario'}/>
                    ))}
                </div>
            </div>
        </div>
</>    
)
}

export default ListarFuncionario;