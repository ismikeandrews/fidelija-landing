import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Header, Footer } from '../Components';
import { Home } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes
