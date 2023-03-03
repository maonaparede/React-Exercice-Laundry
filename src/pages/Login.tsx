
//npm install react-hook-form
//npm install @hookform/resolvers yup
//https://httpbin.org/post

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from  "@hookform/resolvers/yup";
import { useState } from 'react';
import  *  as yup from  "yup";

import 'bulma/css/bulma.css'


function Login(){

    const [msg, setMsg] = useState("");

    const validador = yup.object().shape({
        login: yup.string().email("Formato Inválido de Email").required("Email não pode Estar Vazio!"),
        senha: yup.string().required("Senha Não Pode Estar Vazia"),
    });

    const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm({
        resolver: yupResolver(validador)
    });

    const navigate = useNavigate();

    function direciona(opcao: string) {
        if(opcao === "main"){
            navigate("/");
        }else{
            navigate("/");
        }
    }

    const enviaResp = async data =>{
        try {
            const resp = await fetch("http://localhost:47776/FrontWeb/GetRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    login: data.login,
                    senha: data.senha
                }),
            });
                
            const res = await resp.json();
            if(resp.status === 200) {
                console.log("data successfully");
                setMsg("Login Efetuado Com Sucesso!");
                console.log(res);
                direciona("main");
            }else{
                console.log("data failed");
                setMsg("Login Falhou! Não há conexão com a API");
                //direciona("erro");
            }
        } catch (err) {
            console.log(err);
        }
    };

return(
        <div className="is-flex hero is-fullheight">
            <div className="column is-half m-auto">
                <div className="box is-centered">
                    <form onSubmit={handleSubmit(enviaResp)}>
                        <div className="field">
                            <h1 className="title is-10 mb-6">Login</h1>
                            <div className="control mb-5">
                                <label>Email</label>
                                <input {...register("login", {required:true, minLength:2, maxLength:100})} className="input" type="charset" placeholder="XXXXXX@XXXX.XX" />
                                <p className="has-text-danger">{errors.login?.message}</p>
                            </div>
                            
                            <div className="control mb-5">
                                <label>Senha</label>
                                <input {...register("senha", {required:true})} className="input" type="charset" placeholder="**********" />
                                <p className="has-text-danger">{errors.senha?.message}</p>
                            </div>
                             
                            <p className="has-text-success">{msg}</p>
                             
                            <div className="control is-flex mb-4">
                                    <input className="button is-success is-rounded m-auto" type="submit" value="Login"/>
                            </div>
                            <a href="/">Voltar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)
}

export default Login;