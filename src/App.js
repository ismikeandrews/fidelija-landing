import React from 'react';
import Routes from './Routes'
import './global.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-Y020XVNYRS"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
    return (
        <Routes/>
    )
}

export default App;