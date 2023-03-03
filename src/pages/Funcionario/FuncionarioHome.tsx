
import Dropdown from '../../components/Dropdown';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import { useState, useEffect  } from 'react';
import { useForm } from "react-hook-form";
import  *  as yup from  "yup";
import { yupResolver } from  "@hookform/resolvers/yup";
import Navbar from '../../components/Navbar';



function FuncionarioHome() {

    const [date, setDate] = useState('');
    const [json, setJson] = useState([]);

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    useEffect(() => {
        const calendars = bulmaCalendar.attach('[type="date"]',{
            displayMode: 'dialog', dateFormat: 'dd/MM/yyyy',todayLabel:'Hoje',
            clearLabel:'Limpar', cancelLabel:'Cancelar', showHeader:false, lang:"pt"
        });

        fetch('http://localhost:47776/FrontWeb/GetPedidos').then(response => response.json())
            .then(data => {
                console.log(data);
                setJson(data);
            }).catch(()=>{
                setJson(
                    [{"id":1,"cpf":"11111111111111","status":"FI","dataPrazo":"2023-01-20T00:00","dataAbertura":"2023-01-18T00:00","dataPagamento":"2023-01-18T00:00","roupas":[{"nome":"Calca","qtde":5}]},{"id":2,"cpf":"11111111111111","status":"FI","dataPrazo":"2023-01-20T00:00","dataAbertura":"2023-01-18T00:00","dataPagamento":"2023-01-18T00:00","roupas":[{"nome":"Calca","qtde":4}]}]
                );
            });

    }, []);

    const enviaResp = async data =>{
        try {
           
        } catch (err) {
            console.log(err);
        }
    };

    function dataToYup(data : string){
        const [day, month, year] = dateStr.split('/');
        return Date(year+'-'+month+'-'+day);
    }

    const validador = yup.object().shape({
        dataInicio: yup.date().transform((value, originalValue) => parse(originalValue, 'dd/MM/yyyy', new Date())).required("Data de início é obrigatória"),
        dataFim: yup.date().transform((value, originalValue) => parse(originalValue, 'dd/MM/yyyy', new Date())).when(
          "dataInicio",
          (dataInicio, schema) =>
          dataInicio && schema.min(dataInicio, "A Data Final Deve Ser Maior Que A Data Inicial.")
        ).required("Data final é obrigatória"),
      });

    const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm({
        resolver: yupResolver(validador)
    });

    return (
        <>
            <Navbar func="true"/>
            <div className="column">
                <div className="box" style={{minHeight: '748px'}}>
                    <h1 className="titulo">Consultar Pedidos</h1>
                    <br/>
                    <div className="box ml-2 mr-2 is-flex is-mobile" style={{height: '4em'}}>
                        <a className="button is-warning is-outlined is-small ml-2" href="/FuncionarioHome">Em Aberto</a>
                        <a className="button is-info is-outlined is-small ml-2" href="/FuncionarioHome?acao=todos">Todos</a>
                        <a className="button is-info is-outlined is-small ml-2" href="/FuncionarioHome?acao=hoje">Hoje</a>
                        
                        <form onSubmit={handleSubmit(enviaResp)} method="post" className="is-flex ">                    
                            <label id="label1" className="is-small ml-3 mr-3">Data Início:</label>
                            <input className="ml-1 calend is-small" type="date" id="dtinic" name="dataInicio"/>
                            
                            <label id="label2" className="is-small ml-3 mr-3">Data Fim:</label>
                            <input className="ml-1 calend" type="date" id="dtfim" name="dataFim"/>
                            
                            <button className="button is-success is-outlined is-small ml-5" type="submit">Filtrar</button>
                        </form>
                    </div>
                    <p className="has-text-danger">{errors.dataFim?.message}</p>
                    <br/>
                    <div id="listaDropdowns">
                        {json.map((d: any) =>(
                            <div className='mb-5' key={d.id}>
                                <Dropdown key={d.id} item={d} func="true"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FuncionarioHome;