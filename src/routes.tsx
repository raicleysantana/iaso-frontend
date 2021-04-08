import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import PreAtendimento from './pages/pre-atendimento';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro-usuario" component={CadastroUsuario}/>
            <Route path="/pre-atendimento" component={PreAtendimento}/>
        </BrowserRouter>
    );
}

export default Routes;