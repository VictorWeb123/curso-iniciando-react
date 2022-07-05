import Arquivo from "./Arquivo"
import styles from '../styles/OlaMundo.module.css'

function OlaMundo() {
    return (
        <>
            <h1 className={styles.Titulo}>Olá Mundo!!!</h1>
            <p className={styles.Paragrafo}>Colocando css em um Arquivo especifico.</p>
            <Arquivo />
        </>
    )
}

export default OlaMundo