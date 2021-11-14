import React from 'react';
import { 
    Phone, 
    Web, 
    Carrefour, 
    Livelo, 
    Donuz, 
    Extra, 
    Starbucks, 
    Pizza, 
    Barber, 
    Barista, 
    Restaurant, 
    Shopping, 
    Petshop,
    Jessica,
    Socials
} from '../../Assets';

import './home.css'

const Home = () => {
    return (
        <div>
            <section className="u-align-left u-clearfix u-gradient home-section-1" id="carousel_87aa">
                <div className="u-clearfix u-layout-wrap home-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-left u-container-style u-layout-cell u-size-28-xl u-size-29-lg u-size-60-md u-size-60-sm u-size-60-xs home-layout-cell-1">
                                <div className="u-container-layout home-container-layout-1">
                                    <h1 className="u-align-left u-custom-font u-text u-text-body-alt-color home-text-1"> 
                                        Aumente as Vendas Hoje Mesmo&nbsp;
                                    </h1>
                                    <div className="u-border-3 u-border-white u-line u-line-horizontal home-line-1"></div>
                                    <p className="u-custom-font u-font-montserrat u-text u-text-body-alt-color home-text-2"> 
                                        Tenha seu plano de fidelização de cliente,<br/>e melhor, totalmente gratuito.
                                    </p>
                                    <a href="https://parceiro.fidelija.com.br/" className="u-active-palette-2-base u-border-none u-btn u-btn-round u-button-style u-custom-color-4 u-custom-font u-font-raleway u-hover-custom-color-5 u-radius-50 u-text-body-alt-color home-btn-1">entrar</a>
                                </div>
                            </div>
                            <div className="u-container-style u-layout-cell u-size-31-lg u-size-32-xl u-size-60-md u-size-60-sm u-size-60-xs home-layout-cell-2">
                                <div className="u-container-layout home-container-layout-2">
                                    <img className="u-image u-image-default home-image-1" src={Web} alt="webpage" data-image-width="1924" data-image-height="1305" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down"/>
                                    <img className="u-image u-image-default home-image-2" src={Phone} alt="app" data-image-width="200" data-image-height="397" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Up"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-white home-section-2" id="carousel_f4f0">
                <div className="u-clearfix u-sheet home-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-16 u-layout-wrap home-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-size-30">
                                    <div className="u-layout-col">
                                        <div className="u-container-style u-custom-color-1 u-layout-cell u-shape-rectangle u-size-60 home-layout-cell-1">
                                            <div className="u-container-layout home-container-layout-1">
                                                <h1 className="u-text u-text-default-lg u-text-default-xl home-text-1">
                                                    Você&nbsp;Sabe o que é CAC ?
                                                </h1>
                                                <p className="u-align-left u-custom-font u-font-montserrat u-text u-text-default-lg u-text-default-xl home-text-2">
                                                    CAC (Custo de Aquisição de Cliente) é o custo de quanto gastamos para conquistar um novo cliente. 
                                                    E que pode ser gastos em diversas maneiras: Impulsionamento nas redes sociais; Ads nas buscas; Ou anúncios no rádio,&nbsp; jornal ou tv.<br/>
                                                </p>
                                                <p className="u-align-left u-custom-font u-font-montserrat u-text home-text-3">
                                                    Divida o valor gasto pelo número de clientes que uma campanha lhe trouxe, você terá o CAC. 
                                                    Este método de marketing geralmente não é tão eficiente para pequenos comércios, pois estes não disponham de verba  marketing constante. 
                                                    E se for feita de forma esporádica, não tem bons resultados.
                                                </p>
                                                <p className="u-align-left u-custom-font u-font-montserrat u-text home-text-4">
                                                    Acreditamos que a melhor maneira de divulgação para pequenos comércios é de relacionamento. 
                                                    Dando benefícios aos clientes já conquistados e fazer com que o retorno dele seja frequente. 
                                                    E nada melhor do que o marketing viral que este cliente satisfeito fará e melhor, gratuitamente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-size-30">
                                    <div className="u-layout-col">
                                        <div className="u-container-style u-layout-cell u-size-30 home-layout-cell-2">
                                            <div className="u-container-layout home-container-layout-2">
                                                <div className="u-align-left u-container-style u-expanded-width-xs u-group u-palette-5-light-2 u-shape-rectangle home-group-1">
                                                    <div className="u-container-layout home-container-layout-3">
                                                        <h2 className="u-text u-text-5">
                                                            Fidelize seus clientes
                                                        </h2>
                                                        <a href="https://parceiro.fidelija.com.br/register" className="u-active-custom-color-3 u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 home-btn-1">
                                                            Comece agora
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-container-style u-layout-cell u-size-30 home-layout-cell-3">
                                            <div className="u-container-layout u-valign-bottom-xl home-container-layout-4">
                                                <img className="u-expanded-width-lg u-expanded-width-md u-image u-image-default home-image-1" src={Socials} alt="marketing" data-image-width="358" data-image-height="406" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-custom-color-1 home-section-3" id="carousel_27c0">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl home-sheet-1">
                    <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-layout-wrap home-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-size-30-xl u-size-31-lg u-size-60-md u-size-60-sm u-size-60-xs home-layout-cell-1">
                                    <div className="u-container-layout home-container-layout-1">
                                        <h1 className="u-text u-text-default-lg u-text-default-xl home-text-1">
                                            Fidelização<br/>Digital
                                        </h1>
                                        <p className="u-custom-font u-font-montserrat u-text home-text-2">
                                            Plano de fidelidade já existe a muito tempo nos comércios, é um meio muito eficiente de reter clientes.
                                            &nbsp; Bastante utilizado por grandes varejistas, e eles tem seu própio aplicativo que faz todo esse gerenciamento. 
                                            Porém os pequenos comércios ficaram de fora por falta de recursos.&nbsp;
                                        </p>
                                        <p className="u-custom-font u-font-montserrat u-text home-text-3">
                                            Pensando nisso criamos a Fidelijá, o primeiro aplicativo de fidelização de cliente GRATUITO, pensado justamente nos pequenos comércios.
                                        </p>
                                        <p className="u-custom-font u-font-montserrat u-text home-text-4">
                                            Comece hoje pois esse benefício é por tempo limitado!
                                        </p>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-style u-layout-cell u-size-29-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs home-layout-cell-2">
                                    <div className="u-container-layout home-container-layout-2">
                                        <img className="u-image u-image-default u-preserve-proportions home-image-1" src={Donuz} alt="donuz-logo" data-image-width="709" data-image-height="709" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down"/>
                                        <img className="u-image u-image-default home-image-2" src={Carrefour} alt="carrefour-app" data-image-width="614" data-image-height="577" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down"/>
                                        <img className="u-image u-image-default u-preserve-proportions home-image-3" src={Livelo} alt="livelo-logo" data-image-width="512" data-image-height="512" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Left"/>
                                        <img className="u-image u-image-default home-image-4" src={Starbucks} alt="starbucks-card" data-image-width="1786" data-image-height="1132" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Up"/>
                                        <img className="u-image u-image-default u-preserve-proportions home-image-5" src={Extra} alt="club-extra" data-image-width="250" data-image-height="168" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Right"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-grey-90 home-section-4" id="carousel_7351">
                <div className="u-clearfix u-sheet u-valign-middle-xs home-sheet-1">
                    <div className="u-custom-color-1 u-shape u-shape-rectangle home-shape-1"></div>
                    <div className="u-gallery home-layout-grid u-lightbox u-no-transition u-show-text-on-hover home-gallery-1">
                        <div className="home-gallery-inner home-gallery-inner-1">
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="1600" data-image-height="1600">
                                    <img className="u-back-image u-expanded" src={Pizza} alt="pizza"/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-1">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="2228" data-image-height="2228">
                                    <img className="u-back-image u-expanded" src={Barber} alt="barber"/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-2">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="1600" data-image-height="1600">
                                    <img className="u-back-image u-expanded" src={Barista} alt="Barista"/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-3">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="1600" data-image-height="1600">
                                    <img className="u-back-image u-expanded" src={Shopping} alt="shopping"/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-4">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="1600" data-image-height="1600">
                                    <img className="u-back-image u-expanded" src={Restaurant} alt="restaurant"/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-5">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                            <div className="u-effect-zoom u-gallery-item">
                                <div className="u-back-slide" data-image-width="1600" data-image-height="1592">
                                    <img className="u-back-image u-expanded" src={Petshop}/>
                                </div>
                                <div className="u-over-slide u-shading home-over-slide-6">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-container-style u-expanded-width-xs u-group u-white home-group-1">
                        <div className="u-container-layout u-valign-bottom home-container-layout-1">
                            <h2 className="u-text home-text-1">
                                Todas as lojas em um único Aplicativo
                            </h2>
                            <p className="u-text home-text-2">
                                A Fidelijá uma plataforma de fidelização de clientes, onde cada estabelecimento tem sua conta e o usuário pode acumular pontos e resgatar prêmios, 
                                tudo em um só lugar.<br/><br/>
                            </p>
                            <p className="u-text home-text-3">
                                Bem vindo a era digital e chega de cartão de papel.
                            </p>
                            <a href="https://parceiro.fidelija.com.br/register" className="u-active-custom-color-3 u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 u-text-active-white u-text-body-alt-color u-text-hover-white home-btn-1">
                                Comece agora
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-align-center u-clearfix home-section-5" id="sec-077e">
                <div className="u-clearfix u-sheet u-valign-middle home-sheet-1">
                    <h2 className="u-text u-text-default home-text-1">Funcionalidades</h2>
                    <p className="u-text u-text-default home-text-2">Entenda um pouco mais sobre a Fidelijá</p>
                    <div className="u-expanded-width u-list home-list-1">
                        <div className="u-repeater home-repeater-1">
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-1">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-1">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5032"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-5032" style={{enableBackground: "new 0 0 512 512"}}>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M155.327,57.142c-51.531,0-93.454,44.45-93.454,99.086c0,54.636,41.923,99.086,93.454,99.086s93.455-44.45,93.455-99.086    
                                                    C248.782,101.592,206.859,57.142,155.327,57.142z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M367.798,71.321c-0.211,0-0.425,0.001-0.636,0.002c-21.626,0.179-41.826,9.31-56.878,25.713    
                                                    c-14.788,16.113-22.829,37.37-22.644,59.854c0.186,22.484,8.577,43.605,23.628,59.473c15.17,15.991,35.265,24.773,56.651,24.773    
                                                    c0.215,0,0.43-0.001,0.646-0.002c21.626-0.179,41.826-9.311,56.878-25.713c14.788-16.113,22.829-37.37,22.644-59.855    
                                                    C447.702,108.972,411.747,71.321,367.798,71.321z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M371.74,257.358h-7.76c-36.14,0-69.12,13.74-94.02,36.26c6.23,4.78,12.16,9.99,17.78,15.61    
                                                    c16.58,16.58,29.6,35.9,38.7,57.42c8.2,19.38,12.88,39.8,13.97,60.83H512v-29.87C512,320.278,449.08,257.358,371.74,257.358z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M310.35,427.478c-2.83-45.59-25.94-85.69-60.43-111.39c-25.09-18.7-56.21-29.77-89.92-29.77h-9.34    
                                                    C67.45,286.319,0,353.768,0,436.978v17.88h310.65v-17.88C310.65,433.788,310.55,430.618,310.35,427.478z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group home-group-1">
                                        <div className="u-container-layout u-valign-top home-container-layout-2">
                                            <h5 className="u-text home-text-3">Indicação de amigos</h5>
                                            <p className="u-text home-text-4">A indicação por amigos é a propaganda mais eficiente que existe, além de totalmente gratuito a taxa de conversão é muito grande.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-3">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-2">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 -3 511.99981 511">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-07d2"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 -3 511.99981 511" id="svg-07d2">
                                            <path 
                                            d="m499.902344 236.066406c-7.664063-7.070312-18.089844-11.4375-28.605469-11.984375-11.941406-.617187-23.128906 3.640625-31.460937 
                                            11.976563l-56.929688 56.332031c-1.125-1.949219-2.410156-3.789063-3.851562-5.496094-7.003907-8.316406-17.246094-12.894531-28.835938-12.894531h-79.695312c-15.027344 
                                            0-29.6875-1.949219-43.570313-5.789062-36.195313-10.011719-70.773437-2.699219-100.003906 21.160156-11.886719 9.703125-20.558594 
                                            20.257812-26.042969 27.953125l-14.289062-13.867188c-1.878907-1.824219-4.425782-2.859375-7.046876-2.859375-.023437 0-.042968 
                                            0-.066406 0-2.714844.019532-5.339844 1.148438-7.222656 3.101563l-69.464844 72.113281c-1.859375 1.929688-2.8710935 4.523438-2.81249975 
                                            7.203125.05859375 2.683594 1.17968775 5.230469 3.12109375 7.078125l117.488281 111.871094c1.949219 1.855468 4.449219 2.78125 6.945313 
                                            2.78125 2.621094 0 5.242187-1.019532 7.214844-3.042969l68.816406-70.601563c1.878906-1.929687 2.921875-4.566406 
                                            2.871094-7.261718-.050782-2.65625-1.164063-5.21875-3.070313-7.070313l-5.992187-5.8125 13.714843-1.542969c8.296875-.964843 
                                            16.734375-1.453124 25.085938-1.453124h121.253906c19.703125 0 36.4375-4.308594 49.742187-12.808594.109376-.070313.21875-.144532.328126-.21875 
                                            4.765624-3.3125 9.089843-7.238282 12.847656-11.664063l81.710937-96.128906c13.984375-16.449219 13.109375-36.976563-2.179687-51.074219zm-372.605469 
                                            244.449219-102.945313-98.023437 55.457032-57.574219 102.34375 99.316406zm359.4375-206.421875-81.710937 96.132812c-2.59375 3.050782-5.566407 
                                            5.761719-8.84375 8.058594-9.988282 6.324219-23.015626 9.535156-38.726563 9.535156h-121.257813c-9.121093 0-18.34375.535157-27.371093 1.585938l-30.148438 
                                            3.382812-63.125-61.257812c4.386719-6.503906 12.453125-17.015625 24.136719-26.554688 24.289062-19.828124 51.84375-25.667968 81.894531-17.351562 
                                            15.632813 4.324219 32.097657 6.519531 48.941407 6.519531h79.695312c14.3125 0 18.132812 12.398438 18.132812 19.722657 0 5.351562-1.71875 10.445312-4.714843 
                                            13.976562-3.25 3.824219-7.871094 5.761719-13.734375 5.761719h-69.375c-5.5625 0-10.070313 4.511719-10.070313 10.074219s4.507813 10.070312 10.070313 
                                            10.070312h69.375c11.710937 0 22.039062-4.570312 29.085937-12.867188 5.863281-6.898437 9.207031-15.96875 9.488281-25.664062l65.566407-64.878906c9.371093-9.371094 
                                            24.011719-7.019532 32.203125.535156 4.234375 3.90625 9.929687 12.113281.488281 23.21875zm0 0"></path>
                                            <path 
                                            d="m249.117188 340.996094c-1.269532-5.417969-6.6875-8.773438-12.105469-7.507813-5.414063 
                                            1.269531-8.777344 6.6875-7.503907 12.105469l.09375.410156c1.089844 4.640625 5.226563 7.773438 9.796876 7.773438.761718 0 1.535156-.085938 2.308593-.265625 
                                            5.417969-1.269531 8.777344-6.691407 7.507813-12.105469zm0 0"></path>
                                            <path 
                                            d="m68.078125 213h98.140625c5.34375 0 10.289062-1.734375 14.3125-4.664062 4.023438 2.929687 8.96875 4.664062 14.3125 4.664062h98.144531c5.34375 
                                            0 10.289063-1.734375 14.3125-4.664062 4.023438 2.929687 8.96875 4.664062 14.3125 4.664062h98.140625c13.445313 0 
                                            24.382813-10.941406 24.382813-24.386719v-45.765625c0-20.554687-11.503907-38.410156-28.722657-47.21875 8.34375-10.0625 13.367188-22.96875 
                                            13.367188-37.03125 0-32.035156-26.0625-58.097656-58.097656-58.097656s-58.097656 26.0625-58.097656 58.097656c0 14.0625 5.023437 26.972656 
                                            13.367187 37.03125-7.441406 3.8125-13.8125 9.316406-18.652344 15.992188-4.839843-6.679688-11.210937-12.183594-18.65625-15.992188 8.34375-10.058594 
                                            13.367188-22.96875 13.367188-37.03125 0-32.035156-26.0625-58.097656-58.097657-58.097656-32.035156 0-58.097656 26.0625-58.097656 58.097656 
                                            0 14.0625 5.027344 26.972656 13.371094 37.035156-7.445312 3.808594-13.816406 9.3125-18.65625 15.992188-4.839844-6.679688-11.210938-12.183594-18.65625-15.996094 
                                            8.34375-10.058594 13.367188-22.96875 13.367188-37.027344 0-32.039062-26.0625-58.101562-58.097657-58.101562-32.03125 0-58.09375 26.0625-58.09375 58.101562 
                                            0 14.058594 5.023438 26.96875 13.367188 37.03125-17.21875 8.808594-28.726563 26.667969-28.726563 47.21875v45.761719c0 13.445313 10.941406 24.386719 24.386719 
                                            24.386719zm302.609375-192.355469c20.925781 0 37.953125 17.023438 37.953125 37.953125 0 20.925782-17.027344 37.953125-37.953125 37.953125-20.929688 
                                            0-37.953125-17.023437-37.953125-37.953125-.003906-20.929687 17.023437-37.953125 37.953125-37.953125zm-26.167969 89.800781c7.871094 3.988282 16.757813 
                                            6.25 26.164063 6.25 9.410156 0 18.296875-2.261718 26.164062-6.25 15.652344 2.726563 27.148438 16.214844 27.148438 32.402344v45.765625c0 
                                            2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.335937 0-4.238281-1.902344-4.238281-4.242188v-45.765625c-.003906-16.183594 
                                            11.496094-29.675781 27.144531-32.402344zm-100.601562-89.800781c20.925781 0 37.953125 17.023438 37.953125 37.953125 0 20.925782-17.027344 
                                            37.953125-37.953125 37.953125-20.929688 0-37.953125-17.023437-37.953125-37.953125 0-20.929687 17.023437-37.953125 37.953125-37.953125zm-26.164063 
                                            89.800781c7.867188 3.988282 16.753906 6.25 26.164063 6.25 9.410156 0 18.292969-2.261718 26.164062-6.25 15.648438 2.726563 27.148438 16.214844 27.148438 
                                            32.402344v45.765625c0 2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.339844 0-4.242187-1.902344-4.242187-4.242188v-45.765625c0-16.183594 
                                            11.5-29.675781 27.148437-32.402344zm-100.605468-89.800781c20.925781 0 37.953124 17.023438 37.953124 37.953125 0 20.925782-17.027343 37.953125-37.953124 
                                            37.953125-20.925782 0-37.953126-17.027343-37.953126-37.953125 0-20.929687 17.027344-37.953125 37.953126-37.953125zm-53.3125 122.203125c0-16.183594 
                                            11.5-29.675781 27.148437-32.402344 7.871094 3.988282 16.753906 6.25 26.164063 6.25 9.410156 0 18.292968-2.261718 26.164062-6.25 15.652344 2.726563 
                                            27.148438 16.214844 27.148438 32.402344v45.765625c0 2.339844-1.902344 4.242188-4.242188 4.242188h-98.140625c-2.339844 0-4.242187-1.902344-4.242187-4.242188zm0 0"></path>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group u-video-cover home-group-2">
                                        <div className="u-container-layout u-valign-top home-container-layout-4">
                                            <h5 className="u-text u-text-default home-text-5">Potencial do cliente</h5>
                                            <p className="u-text home-text-6">
                                                20% do cliente frequênte corresponde a 80% do faturamento, então o melhor a fazer é explorar o potencial de consumo destes clientes já conquistados.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-5">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-3">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="-40 -20 640 640">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-6d93"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="-40 -20 640 640" id="svg-6d93">
                                            <path 
                                            d="m428.667969 80h-300c-27.613281 0-50 22.386719-50 50v310c0 5.523438 4.476562 10 10 10 5.519531 
                                            0 10-4.476562 10-10v-310c0-16.566406 13.429687-30 30-30h300c16.566406 0 30 13.433594 30 30v420c0 
                                            16.566406-13.433594 30-30 30-16.570313 0-30-13.433594-30-30v-50c0-11.046875-8.957031-20-20-20h-360c-11.046875 0-20 8.953125-20 
                                            20v50c0 27.613281 22.386719 50 50 50h380c27.609375 0 50-22.386719 50-50v-420c0-27.613281-22.390625-50-50-50zm-380 500c-16.570313 
                                            0-30-13.433594-30-30v-50h360v50c0 10.820312 3.507812 21.34375 10 30zm0 0"></path>
                                            <path d="m378.667969 200c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-160c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"></path>
                                            <path d="m158.667969 250c0 5.523438 4.476562 10 10 10h210c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-210c-5.523438 0-10 4.476562-10 10zm0 0"></path>
                                            <path d="m168.667969 320h210c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-210c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"></path>
                                            <path d="m168.667969 380h210c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-210c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"></path>
                                            <path d="m168.667969 440h170c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-170c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"></path>
                                            <path 
                                            d="m508.667969 0h-300c-27.613281 0-50 22.386719-50 50 0 5.523438 4.476562 10 10 10 5.519531 0 10-4.476562 10-10 0-16.566406 13.429687-30 30-30h300c16.566406 
                                            0 30 13.433594 30 30v420c0 16.566406-13.433594 30-30 30-5.523438 0-10 4.476562-10 10s4.476562 10 10 10c27.609375 0 50-22.386719 50-50v-420c0-27.613281-22.390625-50-50-50zm0 0"></path>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group u-video-cover home-group-3">
                                        <div className="u-container-layout u-valign-top home-container-layout-6">
                                            <h5 className="u-text u-text-default home-text-7">Suas Regras</h5>
                                            <p className="u-text home-text-8">
                                                Defina os prêmios e as pontuações, no seu estabelecimento quem faz as regras é você.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-7">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-4">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 201.387 201.387">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-296c"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 201.387 201.387" x="0px" y="0px" id="svg-296c" style={{enableBackground: "new 0 0 201.387 201.387"}}>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M129.413,24.885C127.389,10.699,115.041,0,100.692,0C91.464,0,82.7,4.453,77.251,11.916    
                                                    c-1.113,1.522-0.78,3.657,0.742,4.77c1.517,1.109,3.657,0.78,4.768-0.744c4.171-5.707,10.873-9.115,17.93-9.115    
                                                    c10.974,0,20.415,8.178,21.963,19.021c0.244,1.703,1.705,2.932,3.376,2.932c0.159,0,0.323-0.012,0.486-0.034    
                                                    C128.382,28.479,129.679,26.75,129.413,24.885z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M178.712,63.096l-10.24-17.067c-0.616-1.029-1.727-1.657-2.927-1.657h-9.813c-1.884,0-3.413,1.529-3.413,3.413    
                                                    s1.529,3.413,3.413,3.413h7.881l6.144,10.24H31.626l6.144-10.24h3.615c1.884,0,3.413-1.529,3.413-3.413s-1.529-3.413-3.413-3.413    
                                                    h-5.547c-1.2,0-2.311,0.628-2.927,1.657l-10.24,17.067c-0.633,1.056-0.648,2.369-0.043,3.439s1.739,1.732,2.97,1.732h150.187    
                                                    c1.231,0,2.364-0.662,2.97-1.732S179.345,64.15,178.712,63.096z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M161.698,31.623c-0.478-0.771-1.241-1.318-2.123-1.524l-46.531-10.883c-0.881-0.207-1.809-0.053-2.579,0.423    
                                                    c-0.768,0.478-1.316,1.241-1.522,2.123l-3.509,15c-0.43,1.835,0.71,3.671,2.546,4.099c1.835,0.43,3.673-0.71,4.101-2.546    
                                                    l2.732-11.675l39.883,9.329l-6.267,26.795c-0.43,1.835,0.71,3.671,2.546,4.099c0.263,0.061,0.524,0.09,0.782,0.09    
                                                    c1.55,0,2.953-1.062,3.318-2.635l7.045-30.118C162.328,33.319,162.176,32.391,161.698,31.623z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M102.497,39.692l-3.11-26.305c-0.106-0.899-0.565-1.72-1.277-2.28c-0.712-0.56-1.611-0.816-2.514-0.71l-57.09,6.748    
                                                    c-1.871,0.222-3.209,1.918-2.988,3.791l5.185,43.873c0.206,1.737,1.679,3.014,3.386,3.014c0.133,0,0.27-0.009,0.406-0.024    
                                                    c1.87-0.222,3.208-1.918,2.988-3.791l-4.785-40.486l50.311-5.946l2.708,22.915c0.222,1.872,1.91,3.202,3.791,2.99    
                                                    C101.379,43.261,102.717,41.564,102.497,39.692z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M129.492,63.556l-6.775-28.174c-0.212-0.879-0.765-1.64-1.536-2.113c-0.771-0.469-1.696-0.616-2.581-0.406L63.613,46.087    
                                                    c-1.833,0.44-2.961,2.284-2.521,4.117l3.386,14.082c0.44,1.835,2.284,2.964,4.116,2.521c1.833-0.44,2.961-2.284,2.521-4.117    
                                                    l-2.589-10.764l48.35-11.626l5.977,24.854c0.375,1.565,1.775,2.615,3.316,2.615c0.265,0,0.533-0.031,0.802-0.096    
                                                    C128.804,67.232,129.932,65.389,129.492,63.556z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M179.197,64.679c-0.094-1.814-1.592-3.238-3.41-3.238H25.6c-1.818,0-3.316,1.423-3.41,3.238l-6.827,133.12    
                                                    c-0.048,0.934,0.29,1.848,0.934,2.526c0.645,0.677,1.539,1.062,2.475,1.062h163.84c0.935,0,1.83-0.384,2.478-1.062    
                                                    c0.643-0.678,0.981-1.591,0.934-2.526L179.197,64.679z M22.364,194.56l6.477-126.293h143.701l6.477,126.293H22.364z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M126.292,75.093c-5.647,0-10.24,4.593-10.24,10.24c0,5.647,4.593,10.24,10.24,10.24c5.647,0,10.24-4.593,10.24-10.24    
                                                    C136.532,79.686,131.939,75.093,126.292,75.093z M126.292,88.747c-1.883,0-3.413-1.531-3.413-3.413s1.531-3.413,3.413-3.413    
                                                    c1.882,0,3.413,1.531,3.413,3.413S128.174,88.747,126.292,88.747z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M75.092,75.093c-5.647,0-10.24,4.593-10.24,10.24c0,5.647,4.593,10.24,10.24,10.24c5.647,0,10.24-4.593,10.24-10.24    
                                                    C85.332,79.686,80.739,75.093,75.092,75.093z M75.092,88.747c-1.882,0-3.413-1.531-3.413-3.413s1.531-3.413,3.413-3.413    
                                                    s3.413,1.531,3.413,3.413S76.974,88.747,75.092,88.747z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M126.292,85.333h-0.263c-1.884,0-3.413,1.529-3.413,3.413c0,0.466,0.092,0.911,0.263,1.316v17.457    
                                                    c0,12.233-9.953,22.187-22.187,22.187s-22.187-9.953-22.187-22.187V88.747c0-1.884-1.529-3.413-3.413-3.413    
                                                    s-3.413,1.529-3.413,3.413v18.773c0,15.998,13.015,29.013,29.013,29.013s29.013-13.015,29.013-29.013V88.747    
                                                    C129.705,86.863,128.176,85.333,126.292,85.333z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group u-video-cover home-group-4">
                                        <div className="u-container-layout u-valign-top home-container-layout-8">
                                            <h5 className="u-text u-text-default home-text-9">Prêmios &amp; CASHBACK</h5>
                                            <p className="u-text home-text-10">
                                                Nada melhor dar prêmios ou cashback para agradar o cliente. O cliente satisfeito vai ajudar a divulgar o seu comércio. Pense nisso como um investimento no marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-9">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-5">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-3854"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-3854" style={{enableBackground: "new 0 0 512 512"}}>
                                            <g>
                                                <g>
                                                    <g>
                                                        <path d="M160,0H0v160h160V0z M128,128H32V32h96V128z"></path>
                                                        <rect x="64" y="64" width="32" height="32"></rect>
                                                        <path d="M352,0v160h160V0H352z M480,128h-96V32h96V128z"></path>
                                                        <rect x="416" y="64" width="32" height="32"></rect>
                                                        <path d="M0,512h160V352H0V512z M32,384h96v96H32V384z"></path>
                                                        <rect x="64" y="416" width="32" height="32"></rect>
                                                        <rect x="256" width="64" height="32"></rect>
                                                        <polygon points="256,128 288,128 288,96 320,96 320,64 224,64 224,32 192,32 192,64 192,80 192,96 256,96"></polygon>
                                                        <rect x="192" y="128" width="32" height="32"></rect>
                                                        <polygon points="320,160 288,160 288,192 192,192 192,224 320,224"></polygon>
                                                        <polygon points="32,288 64,288 64,256 32,256 32,192 0,192 0,320 32,320"></polygon>
                                                        <rect x="64" y="192" width="32" height="32"></rect>
                                                        <polygon points="192,320 256,320 256,288 224,288 224,256 160,256 160,192 128,192 128,256 96,256 96,320 128,320 128,288      144,288 160,288 192,288    "></polygon>
                                                        <rect x="288" y="256" width="32" height="64"></rect><polygon points="288,352 192,352 192,384 256,384 256,480 192,480 192,512 288,512 288,480 352,480 352,448 288,448    "></polygon>
                                                        <rect x="192" y="416" width="32" height="32"></rect><rect x="320" y="352" width="32" height="64"></rect>
                                                        <polygon points="480,416 384,416 384,512 416,512 416,448 480,448"></polygon>
                                                        <rect x="448" y="480" width="64" height="32"></rect>
                                                        <rect x="480" y="352" width="32" height="32"></rect>
                                                        <polygon points="384,384 416,384 416,288 352,288 352,320 384,320"></polygon>
                                                        <polygon points="448,224 416,224 416,192 384,192 384,224 352,224 352,256 480,256 480,224 512,224 512,192 448,192"></polygon>
                                                        <rect x="448" y="288" width="64" height="32"></rect>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group u-video-cover home-group-5">
                                        <div className="u-container-layout u-valign-top home-container-layout-10">
                                            <h5 className="u-text u-text-default home-text-11">QR Code</h5>
                                            <p className="u-text home-text-12">
                                                As operações de pontuação e resgate de prêmios podem ser feitas através de QR Codes, para evitar falhas humanas e acelerar o processo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-valign-top home-container-layout-11">
                                    <span className="u-custom-color-1 u-icon u-icon-circle u-spacing-15 home-icon-6">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="-14 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-6d03"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="-14 0 512 512" id="svg-6d03">
                                            <path 
                                            d="m295.570312 497h-220.253906c-33.257812 0-60.316406-27.015625-60.316406-60.21875v-220.199219c0-4.140625-3.355469-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v220.199219c0 
                                            41.476562 33.789062 75.21875 75.316406 75.21875h220.253906c4.140626 0 7.5-3.355469 7.5-7.5s-3.359374-7.5-7.5-7.5zm0 0"></path>
                                            <path 
                                            d="m483.121094 119.832031c0-22.480469-6.269532-44.398437-18.136719-63.378906-2.195313-3.511719-6.824219-4.582031-10.335937-2.382813-3.511719 2.195313-4.578126 
                                            6.820313-2.382813 10.335938 10.371094 16.59375 15.855469 35.757812 15.855469 55.425781 0 57.804688-47.101563 104.828125-104.992188 104.828125-57.894531 
                                            0-104.996094-47.023437-104.996094-104.828125 0-57.804687 47.101563-104.832031 104.996094-104.832031 24.335938 0 48.054688 8.503906 66.785156 23.9375 3.195313 2.632812 
                                            7.921876 2.179688 10.558594-1.015625 2.632813-3.199219 2.179688-7.925781-1.019531-10.558594-21.410156-17.644531-48.515625-27.363281-76.324219-27.363281-44.53125 
                                            0-83.472656 24.351562-104.179687 60.414062h-183.632813c-41.527344 0-75.316406 33.746094-75.316406 75.222657v45.53125c0 4.144531 3.355469 7.5 7.5 7.5s7.5-3.355469 
                                            7.5-7.5v-45.53125c0-33.207031 27.058594-60.222657 60.316406-60.222657h176.367188c-5.511719 13.742188-8.550782 28.730469-8.550782 44.417969 0 66.074219 53.828126 119.828125 
                                            119.996094 119.828125 22.351563 0 43.296875-6.144531 61.234375-16.816406v213.9375c0 33.203125-27.058593 60.21875-60.316406 60.21875h-33.273437c-4.140626 0-7.5 3.355469-7.5 
                                            7.5s3.359374 7.5 7.5 7.5h33.273437c41.527344 0 75.316406-33.742188 75.316406-75.21875v-224.480469c26.707031-21.996093 43.757813-55.28125 43.757813-92.46875zm0 0"></path>
                                            <path 
                                            d="m363.128906 174.046875c4.140625 0 7.5-3.359375 7.5-7.5v-93.402344c0-2.96875-1.753906-5.660156-4.46875-6.859375-2.714844-1.199218-5.886718-.683594-8.082031 
                                            1.3125l-16.074219 14.636719c-3.066406 2.789063-3.285156 7.535156-.496094 10.597656 2.789063 3.0625 7.53125 3.285157 10.59375.496094l3.527344-3.210937v76.429687c0 
                                            4.140625 3.355469 7.5 7.5 7.5zm0 0"></path>
                                            <path 
                                            d="m87.066406 428.183594c3.089844 0 4.996094-1.140625 5.71875-3.425782l6.335938-22.097656h38.078125l6.414062 22.15625c.785157 2.246094 2.8125 3.367188 6.070313 3.367188 
                                            2.695312 0 5.246094-.703125 7.65625-2.105469 2.40625-1.402344 3.609375-3.074219 3.609375-5.019531 0-.324219-.101563-.8125-.308594-1.457032l-30.671875-100.234374c-1.316406-3.457032-5.042969-5.183594-11.179688-5.183594-6.023437 
                                            0-9.695312 1.855468-11.011718 5.5625l-30.757813 100.253906c-.105469.308594-.15625.773438-.15625 1.390625 0 1.851563 1.082031 3.449219 3.246094 4.789063 2.164063 1.335937 4.484375 
                                            2.003906 6.957031 2.003906zm31-91.601563 15.53125 53.085938h-30.75zm0 0"></path>
                                            <path 
                                            d="m180.136719 428.183594c2.269531 0 4.207031-.488282 5.808593-1.46875 1.601563-.980469 2.402344-2.292969 2.402344-3.945313v-38.207031h19.207032c10.535156 0 18.976562-2.757812 
                                            25.328124-8.273438 6.351563-5.515624 9.527344-14.152343 9.527344-25.910156v-1.234375c0-11.757812-3.074218-20.367187-9.21875-25.832031-6.144531-5.464844-14.382812-8.199219-24.707031-8.199219h-30.207031c-1.859375 
                                            0-3.382813.519531-4.570313 1.546875-1.1875 1.03125-1.78125 2.269532-1.78125 3.710938v102.398437c0 1.652344.828125 2.964844 2.480469 3.945313 1.652344.980468 3.5625 1.46875 5.730469 
                                            1.46875zm8.210937-98.53125h19.207032c5.886718 0 10.429687 1.648437 13.632812 4.949218 3.199219 3.300782 4.800781 8.300782 4.800781 15.003907v1.855469c0 6.703124-1.601562 11.730468-4.800781 15.082031-3.203125 3.351562-7.746094 
                                            5.027343-13.632812 5.027343h-19.207032zm0 0"></path>
                                            <path 
                                            d="m326.832031 349.140625c0-11.753906-3.070312-20.363281-9.214843-25.828125-6.148438-5.464844-14.382813-8.199219-24.707032-8.199219h-30.207031c-1.859375 
                                            0-3.386719.515625-4.570313 1.546875-1.1875 1.03125-1.78125 2.269532-1.78125 3.710938v102.398437c0 1.652344.824219 2.964844 2.476563 3.945313 1.652344.980468 
                                            3.566406 1.46875 5.734375 1.46875 2.269531 0 4.207031-.488282 5.808594-1.46875 1.601562-.980469 2.398437-2.292969 2.398437-3.945313v-38.207031h19.210938c10.53125 
                                            0 18.976562-2.757812 25.328125-8.273438 6.347656-5.515624 9.523437-14.152343 9.523437-25.910156zm-16.417969 2.320313c0 6.703124-1.605468 11.730468-4.804687 
                                            15.082031-3.199219 3.351562-7.742187 5.027343-13.628906 5.027343h-19.210938v-41.917968h19.210938c5.886719 0 10.429687 1.648437 13.628906 4.949218 3.199219 3.300782 
                                            4.804687 8.300782 4.804687 15.003907zm0 0"></path>
                                        </svg>
                                    </span>
                                    <div className="u-container-style u-group u-video-cover home-group-6">
                                        <div className="u-container-layout u-valign-top home-container-layout-12">
                                            <h5 className="u-text u-text-default home-text-13">Aplicativo</h5>
                                            <p className="u-text home-text-14">
                                                Poucas soluções semelhantes no mercado disponha do aplicativo onde o cliente tem como saber quais são os prêmios e suas pontuações.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-grey-5 u-valign-middle-lg u-valign-middle-xl home-section-6" id="carousel_d230">
                <div className="u-custom-color-1 u-expanded-height-lg u-expanded-height-md u-expanded-height-xl u-expanded-width-sm u-expanded-width-xs u-shape u-shape-rectangle home-shape-1"></div>
                <div className="u-clearfix u-layout-wrap home-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-center u-container-style u-layout-cell u-shape-rectangle u-size-30 home-layout-cell-1">
                                <div className="u-container-layout u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs home-container-layout-1">
                                    <img className="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-round u-radius-5 home-image-1" src={Jessica} alt="jessica" data-image-width="1086" data-image-height="724" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down"/>
                                </div>
                            </div>
                            <div className="u-container-style u-layout-cell u-size-30 home-layout-cell-2">
                                <div className="u-container-layout home-container-layout-2">
                                    <span className="u-icon u-icon-circle u-text-grey-25 home-icon-1">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-405e"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-405e" style={{enableBackground: "new 0 0 95.333 95.332"}}>
                                            <g>
                                                <g>
                                                    <path 
                                                    d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    
                                                    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    
                                                    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    
                                                    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    
                                                    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path>
                                                    <path 
                                                    d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    
                                                    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    
                                                    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    
                                                    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    
                                                    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <h2 className="u-custom-font u-font-raleway u-text home-text-1">Resultado imediato!</h2>
                                    <p className="u-text home-text-2"> 
                                        Fidelijá me ajudou a alavancar as vendas em menos de 2 meses, agora os clientes retornam não apenas por conta do preço.
                                    </p>
                                    <h5 className="u-text u-text-default home-text-3">Jessica Soares</h5>
                                    <h6 className="u-text u-text-default home-text-4">Proprietária da GSK Print</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-image home-section-7" id="carousel_1927" data-image-width="1600" data-image-height="1067">
                <div className="u-clearfix u-sheet home-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap home-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-left u-container-style u-image u-layout-cell u-size-30 home-image-1" data-image-width="1600" data-image-height="1600">
                                    <div className="u-container-layout home-container-layout-1"></div>
                                </div>
                                <div className="u-container-style u-grey-5 u-layout-cell u-size-30 home-layout-cell-2">
                                    <div className="u-container-layout home-container-layout-2">
                                        <h2 className="u-align-left u-text home-text-1">Vamos Alavancar as Vendas ?</h2>
                                        <p className="u-custom-font u-font-montserrat u-text home-text-2">
                                            Sabemos que não é fácil ser empreendor, garra e a coragem é o que não nos falta. 
                                            Estaremos ao seu lado nessa jornada fantástica, basta querer.
                                        </p>
                                        <a href="https://parceiro.fidelija.com.br/" className="u-active-custom-color-3 u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-custom-color-2 u-radius-50 home-btn-1">
                                            Comece agora
                                        </a>
                                        <div className="u-social-icons u-spacing-30 home-social-icons-1">
                                            <a className="u-social-url" target="_blank" href="">
                                                <span className="u-icon u-icon-circle u-social-facebook u-social-icon home-icon-1">
                                                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b57b"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-b57b">
                                                        <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="u-social-url" target="_blank" href="">
                                                <span className="u-icon u-icon-circle u-social-icon u-social-instagram home-icon-2">
                                                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5333"></use>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px" id="svg-5333">
                                                        <path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path>
                                                        <path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path>
                                                        <path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
