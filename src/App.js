import React from 'react';
import Routes from './Routes'
import './global.css';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

const App = () => {
    ReactGA.initialize('G-Y020XVNYRS');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: false, // enable logs
    };
    ReactPixel.init('1001194587481667', {}, options);
    ReactPixel.pageView(); // For tracking page view

    return (
        <Routes/>
    )
}

export default App;