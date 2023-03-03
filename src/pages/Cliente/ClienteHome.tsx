import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import {FaSearch} from 'react-icons/fa';

function ClienteHome(){

    const json = [{"id":1,"cpf":"11111111111111","status":"FI","dataPrazo":"2023-01-20T00:00","dataAbertura":"2023-01-18T00:00","dataPagamento":"2023-01-18T00:00","roupas":[{"nome":"Calca","qtde":5}]},{"id":2,"cpf":"11111111111111","status":"FI","dataPrazo":"2023-01-20T00:00","dataAbertura":"2023-01-18T00:00","dataPagamento":"2023-01-18T00:00","roupas":[{"nome":"Calca","qtde":4}]}];
    const msgPesq = "";

    return(
        <>
        <Navbar/>
        <div className="column">
            <div className="box" style={{ minHeight: '748px' }}>
                <h1 className="titulo mb-5">Seus Pedidos</h1>
                <br/>
                    <div className="box ml-2 mr-2 is-flex" >
                        <a className="button is-info is-outlined is-small ml-2" href="/ClienteHome">Todos</a>
                        <a className="button emAberto is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=AB">Aberto</a>
                        <a className="button cancelado is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=CA">Cancelado</a>
                        <a className="button cancelado is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=RJ">Rejeitado</a>
                        <a className="button recolhido is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=RC">Recolhido</a>
                        <a className="button aguardandoPagamento is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=AP">A Pagar</a>
                        <a className="button pago is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=PG">Pago</a>
                        <a className="button finalizado is-outlined is-small ml-2" href="/ClienteHome?acao=pesquisa&status=FI">Finalizado</a>

                        <form action="/ClienteHome?acao=pesquisaText" method="post" className="m-auto is-flex">
                            <p className="control has-icons-left m-auto">
                                <input className="input is-small" type="number" name="texto" placeholder="Pesquisar" autoComplete="off" />
                                <span className="icon is-small is-left">
                                    <FaSearch/>
                                </span>
                            </p>
                            <input className="ml-1 button is-small is-success" type="submit" value="Pesquisar" />
                        </form>
                    </div>

                    {msgPesq?
                        <h3 className="mb-3">Resultado Pesquisa Pedido: {msgPesq}</h3>
                    :
                        <></>
                    }
                    <br/>
                    <div id="listaDropdowns">
                        {json.map((d: any) =>(
                            <div className='mb-5' key={d.id}>
                                <Dropdown key={d.id} item={d} func="false"/>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
        </>
    );
}

export default ClienteHome;