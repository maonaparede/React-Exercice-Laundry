import 'bulma/css/bulma.css'
import{FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";



function Dropdown(props){

    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState("none");

    
    const json = props.item;
    let func = true;
    
    if(props.func === "true"){
        func = true;
    }else{
        func = false;
    }
    
    function onDropdown(){
        if(dropdown === "none"){
            setDropdown("block");
        }else{
            setDropdown("none");
        }
    }

    function toDate(date:string){
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return(dia+"/"+mes+"/"+ano);
    }

return(
    <div className="has-background-light m-2 is-mobile mb-5" id="drop1" onClick={onDropdown}>
        <div className="columns is-mobile">
            <div className="column ml-4 is-narrow">
                {dropdown === "none"? <FaChevronUp /> : <FaChevronDown/>}
            </div>
            <div className="column is-4">
                <p className="has-text-weight-bold">Pedido #{json.id}</p>
            </div>
            <div className="column is-4 is-offset-3 is-flex is-mobile">
                <p className="is-Success">Status: </p>
                {(()=>{
                        switch(json.status){
                            case 'AB':
                               return(<p className=" emAberto">EM ABERTO</p>);
                            break;
                                
                            case 'CA':
                                return(<p className="cancelado">CANCELADO</p>);
                            break;
                                
                            case 'RC':
                                return(<p className="recolhido">RECOLHIDO</p>);
                            break;
                                
                            case 'AP':
                                return(<p className="aguardandoPagamento">AGUARDANDO PAGAMENTO</p>);
                            break;
                                
                            case 'PG':
                                return(<p className="pago">PAGO</p>);
                            break;
                                
                            case 'FI':
                                return(<p className="finalizado">FINALIZADO</p>);
                            break;
                            default:
                                return(<p className="cancelado">REJEITADO</p>);
                            break;
                        }
                    })
                ()}
                
            </div>
        </div>
        <div className="dropdown-lol-oculto" style={{display:dropdown}}>
            <div className="content m-3">
                <ol className="p-3">
                    {json.roupas.map((item2: any, index) =>(
                        <li className="mb-3" key={index}>PEÇA: {item2.nome} - QTDE {item2.qtde}</li>
                    ))}
                </ol>
            </div>
            <div className="columns">
                <div className="column is-5 ml-5 is-flex">

                    {(
                        () => {
                            if (json.status === 'AB') {
                                return (
                                    <p className="ml-2">Data de Abertura:
                                        {toDate(json.dataAbertura)}
                                    </p>
                                );
                            } else if (json.status === 'PG' || json.status === 'FI') {
                                return (
                                    <p className="ml-2">Pago em:
                                        {toDate(json.dataPrazo)}
                                    </p>
                                );
                            } else {
                                return (
                                    <p className="ml-2">Previsão de Termino:
                                        {toDate(json.dataPrazo)}
                                    </p>
                                );
                            }
                        }
                    )()}
                </div>
                <div className="column is-5 is-offset-2 is-flex">
                    {func?
                        <>
                            {(()=>{
                                switch(json.status){
                                    case 'AB':
                                       return( <a className="button is-light is-rounded is-centered ml-2" href={"/FuncionarioHome?acao=pedido&id=" + json.id + "&status=RC&pg=main"}>Recolher</a>);
                                        break;
                                    case 'RC':  
                                        return(<a className="button is-light is-rounded is-centered ml-2" href={"/FuncionarioHome?acao=pedido&id="+ json.id + "&status=AP&pg=main"}>Confirmar Lavagem</a>);
                                        break;
                                    case 'PG':
                                        return(<a className="button is-light is-rounded is-centered ml-2" href={"/FuncionarioHome?acao=pedido&id=" + json.id + "&status=FI&pg=main"}>Finalizar Pedido</a>);
                                        break;
                                    default:
                                        <></>
                                        break;
                                }
                            })()}
                            
                            <a className="button is-warning is-rounded is-centered ml-4" onClick={()=>{ navigate("/ConsultaPedido", {state:{id:json.id, func:"true"}}) }} >Detalhes</a>
                                
                        </>
                            :
                        <a className="button is-warning is-rounded is-centered ml-4" onClick={()=>{ navigate("/ConsultaPedido", {state:{id:json.id}}) }} >Detalhes</a>
                    }
                </div>
            </div>
        </div>
    </div>
);
}

export default Dropdown;