
import { useState, useEffect  } from 'react';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import Navbar from '../../components/Navbar';

function GerarRelatorio(){

    const [erro, setErro] = useState("");


    useEffect(() => {
        const calendars = bulmaCalendar.attach('[type="date"]',{
            displayMode: 'dialog', dateFormat: 'dd/MM/yyyy',todayLabel:'Hoje',
            clearLabel:'Limpar', cancelLabel:'Cancelar', showHeader:false, lang:"pt"
        });

        fetch('http://localhost:47776/FrontWeb/GetPedidos').then(response => response.json())
            .then(data => {
                console.log(data);
                setJson(data);
            });

    }, []);

    return(
        <>
        <Navbar func="true"/>
        <div className="columns mt-4">
            <div className="column">
                <form action="/Relatorio">

                    <div className="columns is-mobile">
                        <div className="column is-6 is-offset-0">
                            <div className="card box p-1">
                                <div className="card-content is-flex">
                                    <div>
                                        <p className="title">
                                            Clientes
                                        </p>
                                        <p>Todos os Clientes</p>
                                    </div>
                                    <div className="mt-auto mb-auto ml-auto mr-0">
                                        <button className="button is-rounded is-success" type="submit" name="acao" value="clienteAll">Gerar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column is-6 is-offset-0">
                            <div className="card box p-1">
                                <div className="card-content is-flex">
                                    <div>
                                        <p className="title">
                                            Clientes Fiéis
                                        </p>
                                        <p>Os 5 Clientes Mais Fiéis</p>
                                    </div>
                                    <div className="mt-auto mb-auto ml-auto mr-0">
                                        <button className="button is-rounded is-success" type="submit" name="acao" value="clienteFiel">Gerar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="is-flex mb-5 is-mobile">
                        <div className="m-auto is-flex">
                            <div className="mr-4">
                                <label className="label">Data Inicial</label>
                                <input className="input is-medium" type="date" name="dataInicio" placeholder="XX/XX/XXXX" />
                            </div>
                            <div className="ml-4">
                                <label className="label">Data Final</label>
                                <input className="input is-medium" name="dataFim" type="date" placeholder="XX/XX/XXXX" />
                            </div>
                        </div>
                    </div>

                    <div className="is-flex mb-2">
                        <p className="has-text-danger m-auto">{erro}</p>
                    </div>



                    <div className="is-flex mb-6">
                        <div className="m-auto">
                            <button className="button is-danger is-light" type="submit" name="acao" value="todos">Solicitar todos os Relatórios</button>
                        </div>
                    </div>


                    <div>
                        <div className="columns mb-5 box p-2">
                            <div className="ml-6 column">
                                <p><strong>Tipo</strong></p>Receita
                            </div>
                            <div className="ml-2 column"><button className="button is-link is-light" type="submit" name="acao" value="receita">Solicitar PDF</button></div>
                        </div>

                        <div className="columns mb-5 box p-2">
                            <div className="ml-6 column">
                                <p><strong>Tipo</strong></p>Pedidos
                            </div>
                            <div className="ml-2 column"><button className="button is-link is-light" type="submit" name="acao" value="pedido">Solicitar PDF</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default GerarRelatorio;