import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Componentes/Login'
import Home from './Componentes/Home'

// esse arquivo nunca muda - todo projeto é igual
export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/home/:usuario' component={Home}/>
                </Switch> 
            </BrowserRouter>

        );
    }
}
