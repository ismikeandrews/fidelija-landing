import React from 'react'
import './privacy.css'
import { Fab } from '../../Components'

const Privacy = () => {
    return (
        <section className="u-clearfix u-valign-middle-xs privacy-section-1" id="sec-1975">
            <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm privacy-sheet-1">
                <div className="u-expanded-width-xs u-shape u-shape-svg u-text-custom-color-1 privacy-shape-1">
                    <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 150">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-61af"></use>
                    </svg>
                    <svg className="u-svg-content" viewBox="0 0 160 150" x="0px" y="0px" id="svg-61af">
                        <path 
                        d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
                        c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
                        c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
                        C6.9,115.6,25.2,125.2,43.2,126.9z"></path>
                    </svg>
                </div>
                <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-layout-wrap privacy-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-28 privacy-image-1" data-image-width="6016" data-image-height="4016">
                                <div className="u-container-layout privacy-container-layout-1"></div>
                            </div>
                            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-32 privacy-layout-cell-2">
                                <div className="u-container-layout u-valign-middle privacy-container-layout-2">
                                    <h1 className="u-text u-text-default privacy-text-1">
                                        Política de Privacidade
                                    </h1>
                                    <p className="u-text privacy-text-2">
                                        Tenha acesso ao nosso documento de privacidade aqui.
                                    </p>
                                    <a href="https://drive.google.com/uc?export=download&id=1MGI2KukRagf0xq8VOws0vVdtYnrMhRMJ" className="u-active-custom-color-3 u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 privacy-btn-1">
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fab/>
        </section>
    )
}

export default Privacy
