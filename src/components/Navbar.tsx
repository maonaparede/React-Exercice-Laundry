import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo2.png';

function Navbar(props){

    const navigate = useNavigate();

    let func = true;
    if(props.func === "true"){
        func = true;
    }else{
        func = false;
    }

return(
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{height:'84px'}}>
        <div className="navbar-brand">
            
            <img src={logo} width="200" height="100"/>
            

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            {func?
            <>
                <a className="navbar-item" onClick={()=>{ navigate("/FuncionarioHome") }} >Pagina Inicial</a>
                <a className="navbar-item" onClick={()=>{ navigate("/ListarRoupa") }} >Lista de Peças</a>
                <a className="navbar-item" onClick={()=>{ navigate("/ListarFuncionario") }} >Lista de Funcionários</a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Mais
                    </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" onClick={()=>{ navigate("/Roupa") }}>
                            Inserir Nova Roupa
                        </a>
                        <a className="navbar-item" onClick={()=>{ navigate("/Funcionario") }}>
                            Inserir Novo Funcionário
                        </a>
                        <a className="navbar-item" onClick={()=>{ navigate("/Relatorio") }} >
                            Gerar Relatórios
                        </a>
                    </div>
                </div>
            </>
            :
            <>
                <a className="navbar-item" href="/ClienteHome">Pagina Inicial</a>
                <a className="navbar-item" href="/FazerPedido">Fazer Pedido</a>
            </>

            }
                
                    
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-danger" href="/">
                            <strong>Logout</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)
}

export default Navbar;