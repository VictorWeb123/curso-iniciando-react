import { useState } from 'react'
import React from 'react'
import './styles/App.css'
import Evento from './components/Evento'
import Form from './components/Form'



function App() {

    return (
        <div className="app">
            <h2>Testando Eventos no React</h2>
            <Evento numero = "1" />
            <Evento numero = "2"/>
            <Evento numero= "123" />
            <Form />
        </div>
            
    )
}

export default App
