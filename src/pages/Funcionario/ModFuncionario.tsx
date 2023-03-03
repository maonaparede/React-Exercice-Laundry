
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";


function ModFuncionario(props){
    const location = useLocation();

    let up = false;

    let fc = {id: "", nome: "", senha: "", email: ""}

    if(location.state?.id){
        up = true;
    }
    
    
    let action = "/Funcionario?acao=inserirBD";
    if(up){
        action = "/Funcionario?acao=updateBD";
        fc = {id: 1, nome: "João", senha: "1234", email: "joao@gmail.com"}
    }
    

    function handleFunc(event, variavel){

    }

return(
    <>
    <Navbar func="true"/>
        <div className="columns">
            <div className="column">
                <div className="box">
                    <p className="title is-5">{up ? <>Editar</> : <>Cadastrar</>} - Funcionário</p>
                </div>
                <div className="box mb-5 pb-6">
                    <form action={action} method="post">
                        <div className="field">
                            <div className="columns">
                                <div className="column is-11 is-offset-0">
                                    <h1 className="title is-5">Funcionário</h1>
                                </div>

                                {up ?
                                    <a className="button is-danger is-rounded" href={"/Funcionario?acao=excluir&id=" + fc.id}>Excluir</a>
                                    :
                                    <></>
                                }


                            </div>

                            <div className="columns">
                                <input type="text" name="id" value={fc.id} onChange={(e)=>{handleFunc(e, "id")}} style={{ display: 'none' }} />
                                    <div className="column">
                                        <label>Nome</label>
                                        <input className="input" type="charset" name="nome" onChange={(e)=>{handleFunc(e, "nome")}} minLength="3" maxLength="255" value={fc.nome} />
                                        <p className="has-text-danger"></p>
                                    </div>
                            </div>
                            <div className="columns">
                                <div className="column is-6 is-offset-0">
                                    <label>Senha</label>
                                    <input className="input" type="charset" name="senha" minLength="4" onChange={(e)=>{handleFunc(e, "senha")}} maxLength="255" value={fc.senha} />
                                    <p className="has-text-danger"></p>
                                </div>
                                <div className="column">
                                    <label>Email</label>
                                    <div className="control">
                                        <input className="input" type="email" name="email" minLength="3" maxLength="255" onChange={(e)=>{handleFunc(e, "email")}} value={fc.email} />
                                        <p className="has-text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <a href="/ListarFuncionario">Voltar</a>
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