import React from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../../Assets';

const Header = () => {
    return (
        <header className="u-clearfix u-header u-header" id="sec-8624">
            <div className="u-clearfix u-sheet u-sheet-1">
                <Link to="/" data-page-id="291507058" className="u-image u-logo u-image-1" data-image-width="1001" data-image-height="454" title="Home">
                    <img src={Logo} className="u-logo-image u-logo-image-1" alt="logo"/>
                </Link>
                <nav className="u-align-left u-menu u-menu-dropdown u-nav-spacing-25 u-offcanvas u-menu-1" data-responsive-from="MD">
                    <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: "0px", fontWeight: 700, textTransform: "uppercase"}}>
                        <a className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-custom-color-1" href="#" style={{fontSize: "calc(1em + 8px)"}}>
                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-7b92"></use>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302" style={{enableBackground: "new 0 0 302 302"}} xmlSpace="preserve" className="u-svg-content">
                                <g>
                                    <rect y="36" width="302" height="30"></rect>
                                    <rect y="236" width="302" height="30"></rect>
                                    <rect y="136" width="302" height="30"></rect>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                            </svg>  
                        </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                        <ul className="u-custom-font u-nav u-spacing-30 u-text-font u-unstyled u-nav-1">
                            <li className="u-nav-item">
                                <Link className="u-border-2 u-border-active-custom-color-1 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-grey-90 u-text-hover-grey-90" to="/" style={{padding: "10px 0px"}}>
                                    Home
                                </Link>
                            </li>
                            <li className="u-nav-item">
                                <Link className="u-border-2 u-border-active-custom-color-1 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-grey-90 u-text-hover-grey-90" to="/how-to" style={{padding: "10px 0px"}}>
                                    Como funciona
                                </Link>
                            </li>
                            <li className="u-nav-item">
                                <Link className="u-border-2 u-border-active-custom-color-1 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-grey-90 u-text-hover-grey-90" to="/plans" style={{padding: '10px 0px'}}>
                                    Planos
                                </Link>
                            </li>
                            <li className="u-nav-item">
                                <a className="u-border-2 u-border-active-custom-color-1 u-border-hover-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-custom-color-1 u-text-grey-90 u-text-hover-grey-90" href="https://parceiro.fidelija.com.br/" style={{padding: '10px 0px'}}>
                                    Entrar
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                        <div className="u-align-center u-container-style u-custom-color-1 u-inner-container-layout u-sidenav">
                            <div className="u-inner-container-layout u-sidenav-overflow">
                                <div className="u-menu-close"></div>
                                <ul className="u-align-center-lg u-align-center-xl u-align-left-md u-align-left-sm u-align-left-xs u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li className="u-nav-item">
                                        <Link className="u-button-style u-nav-link" to="/" style={{padding: '10px 0px'}}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link className="u-button-style u-nav-link" to="/how-to" style={{padding: '10px 0px'}}>
                                            Como funciona
                                        </Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <Link className="u-button-style u-nav-link" to="/plans" style={{padding: '10px 0px'}}>
                                            Planos
                                        </Link>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link" href="https://parceiro.fidelija.com.br/" style={{padding: '10px 0px'}}>
                                            Entrar
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="u-black u-menu-overlay u-opacity u-opacity-50"></div>
                    </div>
                </nav>
            </div>
        </header> 
    )
}
export default Header
