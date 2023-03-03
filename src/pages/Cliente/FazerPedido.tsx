import { useState, useEffect, useMemo } from "react";

import ItemRoupaPedido from "../../components/ItemRoupaPedido";




function FazerPedido(){


    function calculaPrecoTotal(newArrayPreco:Array){
        let precoTotal = 0;
        newArrayPreco.forEach(element => {
            precoTotal += element.preco;
        });

        return ("R$" + precoTotal.toFixed(2));
    }

    const roupasJson = [{"idPeca":0,"nome":"Calça","tempoLimite":2, "preco":20.50}, {"idPeca":2,"nome":"Camisa","tempoLimite":2,  "preco":12.05}];


    const[countElements, setElements] = useState([]);
    const[dias, setDias] = useState(0);
    const[arrayPreco, setArrayPreco] = useState([]);
    const preco = useMemo(() => calculaPrecoTotal(arrayPreco), [arrayPreco]); //A cada atualização  de arrayPreco o método é chamado de forma assync
    
    const getInfoItens = (id:number, preco:number) =>{
        let tempArray = [...arrayPreco];
        tempArray.push({id, preco});
        setArrayPreco(tempArray);
    }


    function addRemRoupa(op: string){
        if(op === "+"){
            setElements([...countElements, 
                    <li key={countElements.length}>
                        <ItemRoupaPedido id={countElements.length} handlePreco={getInfoItens} json={roupasJson}/>
                    </li>]);  
        }else if(op === "-"){
            if(countElements.length > 1){
               const newElements = [...countElements];
               newElements.pop();
               setElements(newElements);

               const newArrayPreco = [...arrayPreco];
               newArrayPreco.pop();
               setArrayPreco(newArrayPreco);
            }
        }
    }

    useEffect(() =>{
        addRemRoupa("+");
    },[]);

    

return(
    <div className="columns">
        <div className="column">
            <div className="box">
                <h1 className="title is-5">Fazer Pedido</h1>
            </div>
            <div className="box">
                <form id="form" method="get" action="/ClienteHome">
                    <div className="field">
                        <div className="columns">
                            <div className="column is-11 is-offset-0">
                                <label className="label">Peças para Lavar</label>
                            </div>
                        </div>

                        <div className="pb-5" id="listaPeca">
                            <ul>
                                {countElements}
                            </ul>

                        </div>
                    </div>
                </form>
                <div className="is-flex mt-5 pb-3">
                    <div className="is-flex m-auto">
                        <button className="button is-danger is-inverted has-background-light pl-6 pr-6 mr-3" type="button" onClick={()=>{addRemRoupa("-")}}>-</button>
                        <button className="button is-danger is-inverted has-background-light pl-6 pr-6 ml-3" type="button" onClick={()=>{addRemRoupa("+")}}>+</button>
                    </div>
                </div>
            </div>


            <div className="is-flex mb-5">
                <div className="m-auto is-flex">

                    <div className="has-text-success mt-auto mb-auto  mr-5">Preço Total:</div>
                    <div className="mt-auto mb-auto mr-5">
                        <input className="input" type="charset" placeholder="R$XX.XX" id="precoTotal" value={preco} disabled />
                    </div>

                    <div className="mt-auto mb-auto">Prazo Estimado: <span id="prazoRoupa">{dias}</span> Dias</div>
                </div>
            </div>

            <div className="is-flex">
                <div className="m-auto is-8">
                    <a href="/ClienteHome" className="button is-danger is-rounded pl-6 pr-6 mr-6">Cancelar</a>
                    <button className="button is-success is-rounded pl-6 pr-6 ml-6" form="form">Confirmar</button>
                </div>
            </div>

        </div>

    </div>
)
}


export default FazerPedido;