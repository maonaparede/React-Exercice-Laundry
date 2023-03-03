
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function ConsultaPedido(props) {

    const location = useLocation();
    

    let func = false;

    if(location.state?.func){
        func = true;
    }

    const pd = {"id":1,"cpf":"11111111111111","status":"AB","dataPrazo":"2023-01-20T00:00","dataAbertura":"2023-01-18T00:00",
                "dataPagamento":"2023-01-18T00:00","roupas":[{"nome":"Calca","qtde":5}],
                 "nomeCliente":"João", "cepCliente":"123456-123","compCliente":"Casa", "numCliente":"123", "endereco":"Bairro 123",
                 "preco": 20.50
    }

    function toDate(date: string) {
        const data = new Date(date);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return (dia + "/" + mes + "/" + ano);
    }

    return (
        <>
        <Navbar func={func?"true": "false"}/>
        <div className="columns">
            <div className="column">
                <div className="box">
                    <p className="title is-5">Consulta de Pedido</p>
                    <p className="title is-6">ID: {pd.id}</p>
                    <p>Cliente: {pd.nomeCliente}</p>
                    <p>CEP: {pd.cepCliente}</p>
                    <p>Endereço: {pd.endereco}</p>
                    <p>N°: {pd.numCliente}</p>
                    <p>Complemento: {pd.compCliente}</p>
                </div>
                <div className="box" >
                    <p className="title is-5">Lista de Roupas</p>
                    <div className="content m-3">
                        <ol className="p-3">
                            {pd.roupas.map((item2: any, index) => (
                                <li className="mb-3" key={index}>PEÇA: {item2.nome} - QTDE {item2.qtde}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="box" >
                    <form>
                        <div className="field">
                            <label className="label mb-5">Preço total: R$ {pd.preco}</label>

                            <p>
                                Data do Pedido: {toDate(pd.dataAbertura)}
                            </p>
                            <p>
                                Prazo de Entrega:{toDate(pd.dataPrazo)}
                            </p>
                            {(
                                () => {
                                    if (pd.dataPagamento) {
                                        return (
                                            <p className="has-text-success">Data do Pagamento:
                                                {toDate(pd.dataPagamento)}
                                            </p>
                                        );
                                    }
                                }
                            )()
                            }
                            <div className="is-flex mt-3">
                            {(
                                () => {
                                        if (func === true) {
                                            switch (pd.status) {
                                                case 'AB':
                                                    return (
                                                        <>
                                                            <a className="button is-danger is-rounded m-auto mr-1" href={"./FuncionarioHome?acao=pedido&id=" + pd.id + "&status=RJ"}>Rejeitar Pedido</a>
                                                            <a className="recolhido button is-warning is-rounded m-auto ml-1" href={"./FuncionarioHome?acao=pedido&id=" + pd.id + "&status=RC"}>Recolher Pedido</a>
                                                        </>
                                                    );
                                                    break;
                                                case 'CA':
                                                    return (<p className="cancelado">CANCELADO</p>);
                                                    break;

                                                case 'RC':
                                                    return (
                                                        <a className="aguardandoPagamento button is-warning is-rounded m-auto" href={"./FuncionarioHome?acao=pedido&id=" + pd.id + "&status=AP"}>Requisitar Pagamento</a>
                                                    );
                                                    break;

                                                case 'AP':
                                                    return (
                                                        <p className="aguardandoPagamento">AGUARDANDO PAGAMENTO</p>
                                                    );
                                                    break;
                                                case 'PG':
                                                    return (
                                                        <a className="button is-success is-rounded m-auto" href={"./FuncionarioHome?acao=pedido&id=" + pd.id + "&status=FI"}>Finalizar Pedido</a>
                                                    );
                                                    break;
                                                case 'FI':
                                                    return (<p className="finalizado">FINALIZADO</p>);
                                                    break;
                                                default:
                                                    return (<p className="cancelado">REJEITADO</p>);
                                                    break;
                                            }

                                        } else {
                                            switch (pd.status) {
                                                case 'AB':
                                                    return (
                                                        <a className="button is-danger is-rounded m-auto" href={"/ClienteHome?acao=pedido&id=" + pd.id + "&status=CA"}>Cancelar Pedido</a>
                                                    );
                                                    break;

                                                case 'CA':
                                                    return (<p className="cancelado">CANCELADO</p>);
                                                    break;

                                                case 'RC':
                                                    return (<p className="recolhido">RECOLHIDO</p>);
                                                    break;

                                                case 'AP':
                                                    return (
                                                        <a className="button is-success is-rounded m-auto" href={"/ClienteHome?acao=pedido&id=" + pd.id + "&status=PG"}>Confirmar pagamento</a>
                                                    );
                                                    break;
                                                case 'PG':
                                                    return (<p className="pago">PAGO</p>);
                                                    break;

                                                case 'FI':
                                                    return (<p className="finalizado">FINALIZADO</p>);
                                                    break;
                                                default:
                                                    return (<p className="cancelado">REJEITADO</p>);
                                                    break;
                                            }
                                        }
                                })()}
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </>
    )
}

export default ConsultaPedido;