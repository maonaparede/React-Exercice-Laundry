import { useState, useEffect } from "react";
import { json } from "react-router-dom";



function ItemRoupaPedido(props){

    //props.roupas
    const roupasJson = props.json;
    
    const id = props.id;
    const [count, setCount] = useState(1);
    const [roupaValue, setRoupaValue] = useState(0); //Use state é uma função assyncrona

    useEffect(() => {
        atualizaPreco();
      }, [roupaValue, count]); //Pra sincronizar o processo de setar valor de RoupaValue

    function atualizaCount(op:string , callback:Function){
        if(op === "+"){
            setCount(count+1);
        }else{
            if(count > 1){
                setCount(count-1);
            }else{
                setCount(1);
            }
        }
    }

    function atualizaIdRoupa(e){
        const indexRoupa = e.target.value;
        setRoupaValue(indexRoupa);
    }
    

    function atualizaPreco(){
        const preco = roupasJson[roupaValue].preco * count;
        props.handlePreco(props.id, preco);
    }

    return(
        <div className="columns is-mobile" id="peca1">
            <div className="column is-8">
                <div>
                    <label>Peça {id+1}</label>
                </div>
                <div className="select is-fullwidth">
                    <select name="id" id="id1" onChange={atualizaIdRoupa}>
                       {roupasJson.map((item, index)=>(
                            <option key={item.idPeca} value={index}>{item.nome}</option>
                       ))}
                    </select>
                </div>
            </div>
            <div className="is-flex">
                <button className="button is-danger is-inverted mt-auto mb-3" type="button" onClick={()=>{atualizaCount("-")}}>-</button>
                <div className="m-auto">
                    <label>QTDE</label>
                    <input className="input" type="number" min="1" name="qtde" placeholder="XX" value={count} disabled={true} />
                </div>
                <button className="button is-danger is-inverted mt-auto mb-3" type="button" onClick={()=>{atualizaCount("+")}}>+</button>
            </div>
        </div>
    )
}

export default ItemRoupaPedido;