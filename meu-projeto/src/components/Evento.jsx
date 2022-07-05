function Evento({ numero }) {
    function meuEvento() {
        console.log(`evento ativado ${numero}`)
    }
    return (
        <>
            <p>Clique pra ativar algum evento</p>
            <button onClick={meuEvento}>Ativar, Evento</button>
        </>
    ) 
}

export default Evento