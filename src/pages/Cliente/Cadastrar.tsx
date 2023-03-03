


function Cadastrar(){
return(
    <div class="columns is-centered">
    <div class="column m-auto is-two-thirds">
        <div class="box is-centered">
            <form method="post" >
                <div class="field">
                    <h1 class="title is-10 is-center mb-3">Cadastro</h1>
                    
                    <div class="control mb-4 mt-3">
                        <label>Nome</label>
                        <input class="input" name="nome" type="charset" placeholder="XXXXXX" maxlength="255" minlength="5"/>
                        <p class="has-text-danger"></p>
                    </div>
                    

                            <div class="control mb-4">
                                <label>CPF</label>
                                <input class="input" name="cpf" type="charset" placeholder="XXX.XXX.XXX-XX" maxlength="14" minlength="14"/>
                                <p class="has-text-danger"></p>
                            </div>
                            <div class="control mb-4">
                                <label>Email</label>
                                <input class="input" name="email" type="email" placeholder="XXXXX@XX.XX" maxlength="50" minlength="3"/>
                                <p class="has-text-danger"></p>
                            </div>


                    
                    
                    <div class="control mb-4">
                        <label>Telefone</label>
                        <input class="input" name="telefone" type="charset" placeholder="XX XXXXX-XXXX" maxlength="13" minlength="13"/>
                        <p class="has-text-danger"></p>
                    </div>
                    <div class="columns">
                        <div class="column is-12 is-offset-0">
                            <div class="columns">
                                <div class="column">
                                    <div class="control">
                                        <label>CEP</label>
                                        <input name="cep" class="input" type="charset" placeholder="XXXXX-XXX" maxlength="9" minlength="9"/>
                                        <p class="has-text-danger"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-8 is-offset-0">
                            <div class="control">
                                <label>Complemento</label>
                                <input name="complemento" class="input" type="charset" placeholder="Complemento" />
                                <p class="has-text-danger"></p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="control">
                                <label>Número</label>
                                <input name="numero" class="input" type="number" placeholder="000" minlength="1" maxlength="7"/>
                                <p class="has-text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="control is-flex mb-4">
                            <button class='button is-danger is-rounded m-auto' type='submit'>Cadastrar</button>
                    </div>
                        <a href="/">Voltar</a>  
                </div>
            </form>
        </div>
    </div>
</div>
)
}

export default Cadastrar;