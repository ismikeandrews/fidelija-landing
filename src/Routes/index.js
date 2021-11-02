import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Header, Footer } from '../Components';
import { Home, Plans, Usage } from '../Pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/plans" exact component={Plans}/>
                <Route path="/usage" exact component={Usage}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes
