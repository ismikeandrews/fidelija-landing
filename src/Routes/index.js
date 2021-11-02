import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Header } from '../Components';
import { Home } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
