function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('User Cadastrado')
    } 
    return (
        <>
            <h1>Cadastro Pessoal</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite Aqui!"/>
                </div>
                <div>
                    <input type="submit" value="Cadastro De Usuario" />
                </div>
            </form>
        </>
    )
}

export default Form