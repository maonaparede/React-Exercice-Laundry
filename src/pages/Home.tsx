import logo from '../assets/logo2.png';
import background from '../assets/background.jpg';
import{FaHome, FaPlus} from 'react-icons/fa'

function Home(){
    return(
        <>
            <section className="hero is-info is-fullheight" style={{backgroundImage: `url(${background})`, backgroundSize:'contain', backgroundPosition:'center'}}>
            <div className="hero-head">
                <nav className="navbar" style={{minHeight:'80px'}}>
                    <div className="container">
                        <div className="navbar-brand">
                            <img src={logo} width="200" height="430"/>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="/login?acao=gologin">
                                        <FaHome className='mr-2'/>
                                        <span>Login</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="/Cadastrar">
                                        <FaPlus className='mr-2'/>
                                        <span>Cadastro</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="/FuncionarioHome">
                                        <span>Funcionario</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-white is-outlined" href="/ClienteHome">
                                        <span>Cliente</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title">
                            A melhor lavanderia online do Mundo!
                        </h1>
                        <h2 className="subtitle">
                            Com a nossa rapidez na lavagem e na entrega da roupas, garantimos sua roupa lavada da melhor maneira possível!
                        </h2>
                        <p className="has-text-danger"></p>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Home;