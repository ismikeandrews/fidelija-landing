import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Header, Footer } from '../Components';
import { Home, Plans } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/plans" exact component={Plans}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes
