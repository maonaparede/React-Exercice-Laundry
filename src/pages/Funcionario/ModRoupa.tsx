
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";


function ModFuncionario(props){
    const location = useLocation();

    let up = false;

    if(location.state?.id){
        up = true;
    }
    

    const [count, setCount] = useState(1);

    let roupa = {id: "", nome: "", preco: "", limiteDias: 1}

    
    let action = "/Roupa?acao=inserirBD";
    if(up){
        action = "/Roupa?acao=updateBD";
        roupa = {id: 1,nome: "Camisa", preco: 12.50, limiteDias: 1}
    }
    
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

    function handleRoupa(event, variavel){

    }

return(
    <>
    <Navbar func="true"/>
    <div className="columns">
    <div className="column">
        <div className="box">
            <p className="title is-5">{up?<>Editar</>:<>Cadastrar</>} - Peças de Roupa</p>
        </div>
        <div className="box mb-5 pb-6">
            <form action={action} method="post">
                      <div className="field">
                          <div className="columns">
                              <div className="column is-11 is-offset-0">
                                  <h1 className="title is-5">Peça de Roupa</h1>
                              </div>
                          {up? 
                            <a className="button is-danger is-rounded" href={"/Roupa?acao=excluir&id=" + roupa.id} >Excluir</a>
                            : <></>
                          }
                      </div>
                      <div className="columns">

                          <div className="column">
                              <label>Nome da Peça</label>
                              <input type="text" name="id" value={roupa.id} onChange={(e)=>{handleRoupa(e, "id")}} style={{display:'none'}} />
                              <input className="input" name="nome" minLength="3" maxLength="255" type="charset" onChange={(e)=>{handleRoupa(e, "nome")}} value={roupa.nome}/>
                              <p className="has-text-danger"></p>
                          </div>
                      </div>
                      <div className="columns">
                          <div className="column is-8 is-offset-0">
                              <label>Preço</label>
                              <input className="input" step="0.01" name="preco" minLength="3" maxLength="255" type="number" placeholder="R$XX.XX" onChange={(e)=>{handleRoupa(e, "id")}} value={roupa.preco} />
                              <p className="has-text-danger"></p>
                          </div>
                          <div className="is-flex">
                              <button className="button is-danger is-inverted mt-auto mb-3" type="button" onClick={()=>{atualizaCount("-")}}>-</button>
                              <div className="m-auto">
                                  <label>Tempo de Lavagem (Em dias)</label>
                                  <input name="qtde" className="input" max="30" type="number" min="1" placeholder="XX" onChange={(e)=>{handleRoupa(e, "dia")}} value={count} id="manPecaId" />
                                  <p className="has-text-danger"></p>
                              </div>
                              <button className="button is-danger is-inverted mt-auto mb-3" type="button" onClick={()=>{atualizaCount("+")}}>+</button>
                          </div>
                      </div>
                      <a href="/ListarRoupa">Voltar</a>
                  </div>
            </form>
        </div>
        <div className="is-flex">
            <button className="button is-success is-rounded pl-6 pr-6 m-auto" form="form1" type="submit">Salvar</button>
        </div>
    </div>
</div>
</>
)
}

export default ModFuncionario;