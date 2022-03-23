import React from 'react';
import Routes from './Routes'
import './global.css';
import ReactGA from 'react-ga';

const App = () => {
    ReactGA.initialize('G-Y020XVNYRS');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <Routes/>
    )
}

export default App;