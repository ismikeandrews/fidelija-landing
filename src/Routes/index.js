import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Header, Footer } from '../Components';
import { Home, Plans, Usage, Privacy, About } from '../Pages';

const Index = () => {
    return <Redirect to="/"/>
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/plans" component={Plans}/>
                <Route path="/how-to" component={Usage}/>
                <Route path="/privacy" component={Privacy}/>
                <Route path="/about" component={About}/>
                <Route path="*" component={Index}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes
