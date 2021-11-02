import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../Assets'
const Footer = () => {
    return (
        <footer className="u-clearfix u-footer u-grey-80" id="sec-a418">
            <div className="u-clearfix u-sheet u-sheet-1">
                <Link to="/" data-page-id="291507058" className="u-image u-logo u-image-1" data-image-width="1001" data-image-height="454" title="Home">
                    <img src={Logo} alt="Fidelijá" className="u-logo-image u-logo-image-1"/>
                </Link>
                <div className="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
                    <a className="u-social-url" title="facebook" target="_blank" href="">
                        <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-36da"></use>
                            </svg>
                            <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-36da">
                                <circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
                                <path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path>
                            </svg>
                        </span>
                    </a>
                    <a className="u-social-url" title="instagram" target="_blank" href="">
                        <span className="u-icon u-social-icon u-social-instagram u-icon-2">
                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4fa5"></use>
                            </svg>
                            <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-4fa5">
                                <circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
                                <path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
                                z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path>
                                <path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path>
                                <path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
                                C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
                                c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-50 u-line-1"></div>
                <p className="u-align-center u-custom-font u-font-montserrat u-text u-text-1">
                    <span style={{fontSize: "0.75rem"}}>© 2021 Fidelijá. All r​ights reserved.</span>
                    <br/>
                </p>
            </div>
        </footer>
    )
}

export default Footer
