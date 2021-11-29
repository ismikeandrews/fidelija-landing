import React from 'react';
import { Usage, Qrcode, Payment } from '../../Assets';
import { Fab } from '../../Components'
import './usage.css'

const Plans = () => {
    return (
        <div>
            <section className="u-align-center u-clearfix u-gradient usage-section-1" id="carousel_f0d4">
                <div className="u-clearfix u-sheet usage-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap usage-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-align-center u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-27 usage-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs usage-container-layout-1">
                                        <h2 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color usage-text-1">
                                            Como usar o plano de fidelização ?<br/>
                                        </h2>
                                        <p className="u-text u-text-body-alt-color usage-text-2">
                                            Entenda em 10 minutos como elaborar uma boa estratégia de vendas usando plano de fidelidade.
                                        </p>
                                    </div>
                                </div>
                                <div className="u-align-center u-container-style u-layout-cell u-right-cell u-size-33 usage-layout-cell-2">
                                    <div className="u-container-layout u-valign-middle-md u-valign-middle-xl usage-container-layout-2">
                                        <img className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-contain usage-image-1" src={Usage} data-image-width="1098" data-image-height="1080" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Down"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-white usage-section-2" id="carousel_6a01">
                <div className="u-clearfix u-sheet u-valign-middle usage-sheet-1">
                    <h2 className="u-align-center u-heading-font u-text usage-text-1">
                        Saia na frente de seus concorrentes<br/>
                    </h2>
                    <div className="u-expanded-width u-list usage-list-1">
                        <div className="u-repeater usage-repeater-1">
                            <div className="u-align-center u-border-1 u-border-grey-60 u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round usage-list-item-1">
                                <div className="u-container-layout u-similar-container u-valign-top usage-container-layout-1">
                                    <span className="u-align-left u-custom-color-2 u-icon u-icon-rounded u-radius-50 u-spacing-10 u-text-white usage-icon-1">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-6a0a"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-6a0a">
                                            <path 
                                            d="m256 0c-140.96875 0-256 115.050781-256 256 0 140.96875 115.050781 256 256 256 140.96875 0 256-115.050781 
                                            256-256 0-140.96875-115.050781-256-256-256zm0 482c-124.617188 0-226-101.382812-226-226s101.382812-226 226-226 226 101.382812 
                                            226 226-101.382812 226-226 226zm0 0"></path>
                                            <path 
                                            d="m211 376c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 
                                            15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
                                            <path 
                                            d="m256 91c-57.898438 0-105 47.101562-105 105v15h90v-15c0-8.269531 6.730469-15 15-15s15 6.730469 15 15c0 5.53125-3.046875 10.605469-7.96875 13.25-32.09375 17.300781-52.03125 
                                            51.996094-52.03125 90.550781v31.199219h90v-31.199219c0-5.695312 2.425781-10.070312 4.703125-11.300781 34.109375-18.351562 55.296875-53.796875 
                                            55.296875-92.5 0-57.898438-47.101562-105-105-105zm35.488281 171.085938c-12.636719 6.800781-20.488281 21.253906-20.488281 37.714843v1.199219h-30v-1.199219c0-27.507812 
                                            13.894531-52.082031 36.25-64.132812 14.648438-7.871094 23.75-23.074219 23.75-39.667969 0-24.8125-20.1875-45-45-45-19.558594 0-36.238281 12.539062-42.429688 
                                            30h-31.0625c6.96875-34.191406 37.273438-60 73.492188-60 41.355469 0 75 33.644531 75 75 0 27.648438-15.140625 52.96875-39.511719 66.085938zm0 0"></path>
                                        </svg>
                                    </span>
                                    <h5 className="u-text u-text-custom-color-1 u-text-default usage-text-2">
                                        Fator de decisão
                                    </h5>
                                    <p className="u-text u-text-grey-60 usage-text-3">
                                        Quando o cliente está em dúvida onde vai consumir, ter um plano de fidelidade pode ser o fator decisivo, desde que a qualidade do produto e do serviço seja equivalentes.
                                    </p>
                                </div>
                            </div>
                            <div className="u-align-center u-border-1 u-border-grey-60 u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round usage-list-item-2">
                                <div className="u-container-layout u-similar-container u-valign-top usage-container-layout-2">
                                    <span className="u-align-left u-custom-color-2 u-icon u-icon-rounded u-radius-50 u-spacing-10 u-text-white usage-icon-2">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="-21 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-43f6"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="-21 0 512 512" id="svg-43f6">
                                            <path 
                                            d="m453.332031 229.332031c-8.832031 0-16-7.167969-16-16 0-61.269531-23.847656-118.847656-67.15625-162.175781-6.25-6.25-6.25-16.382812 
                                            0-22.632812s16.382813-6.25 22.636719 0c49.34375 49.363281 76.519531 115.007812 76.519531 184.808593 0 8.832031-7.167969 16-16 16zm0 0"></path>
                                            <path 
                                            d="m16 229.332031c-8.832031 0-16-7.167969-16-16 0-69.800781 27.179688-135.445312 76.542969-184.789062 6.25-6.25 16.386719-6.25 
                                            22.636719 0s6.25 16.386719 0 22.636719c-43.328126 43.304687-67.179688 100.882812-67.179688 162.152343 0 8.832031-7.167969 16-16 16zm0 0"></path>
                                            <path 
                                            d="m234.667969 512c-44.117188 0-80-35.882812-80-80 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 26.476562 21.523437 48 48 48 
                                            26.472656 0 48-21.523438 48-48 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 44.117188-35.882813 80-80 80zm0 0"></path>
                                            <path 
                                            d="m410.667969 448h-352c-20.589844 0-37.335938-16.746094-37.335938-37.332031 0-10.925781 4.757813-21.269531 13.058594-28.375 
                                            32.445313-27.414063 50.941406-67.261719 50.941406-109.480469v-59.480469c0-82.34375 66.988281-149.332031 149.335938-149.332031 82.34375 
                                            0 149.332031 66.988281 149.332031 149.332031v59.480469c0 42.21875 18.496094 82.066406 50.730469 109.332031 8.511719 7.253907 13.269531 
                                            17.597657 13.269531 28.523438 0 20.585937-16.746094 37.332031-37.332031 37.332031zm-176-352c-64.707031 0-117.335938 52.628906-117.335938 
                                            117.332031v59.480469c0 51.644531-22.632812 100.414062-62.078125 133.757812-.746094.640626-1.921875 1.964844-1.921875 4.097657 0 2.898437 
                                            2.433594 5.332031 5.335938 5.332031h352c2.898437 0 5.332031-2.433594 5.332031-5.332031 
                                            0-2.132813-1.171875-3.457031-1.878906-4.054688-39.488282-33.386719-62.121094-82.15625-62.121094-133.800781v-59.480469c0-64.703125-52.628906-117.332031-117.332031-117.332031zm0 0"></path>
                                            <path d="m234.667969 96c-8.832031 0-16-7.167969-16-16v-64c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v64c0 8.832031-7.167969 16-16 16zm0 0"></path>
                                        </svg>
                                    </span>
                                    <h5 className="u-text u-text-custom-color-1 u-text-default usage-text-4">
                                        Canal de comunicação
                                    </h5>
                                    <p className="u-text u-text-grey-60 usage-text-5">
                                        Achamos que o uso do WhatsApp é muito invasivo, por isso a melhor estrategia de deixar o 
                                        cliente saber das novidades do seu estabelecimento é mandar uma notificação.
                                    </p>
                                </div>
                            </div>
                            <div className="u-align-center u-border-1 u-border-grey-60 u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round usage-list-item-3">
                                <div className="u-container-layout u-similar-container u-valign-top usage-container-layout-3">
                                    <span className="u-align-left u-custom-color-2 u-icon u-icon-rounded u-radius-50 u-spacing-10 u-text-white usage-icon-3">
                                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="-14 0 512 512">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-a307"></use>
                                        </svg>
                                        <svg className="u-svg-content" viewBox="-14 0 512 512" id="svg-a307">
                                            <path 
                                            d="m295.570312 497h-220.253906c-33.257812 0-60.316406-27.015625-60.316406-60.21875v-220.199219c0-4.140625-3.355469-7.5-7.5-7.5s-7.5 3.359375-7.5 
                                            7.5v220.199219c0 41.476562 33.789062 75.21875 75.316406 75.21875h220.253906c4.140626 0 7.5-3.355469 7.5-7.5s-3.359374-7.5-7.5-7.5zm0 0"></path>
                                            <path 
                                            d="m483.121094 119.832031c0-22.480469-6.269532-44.398437-18.136719-63.378906-2.195313-3.511719-6.824219-4.582031-10.335937-2.382813-3.511719 
                                            2.195313-4.578126 6.820313-2.382813 10.335938 10.371094 16.59375 15.855469 35.757812 15.855469 55.425781 0 57.804688-47.101563 104.828125-104.992188 
                                            104.828125-57.894531 0-104.996094-47.023437-104.996094-104.828125 0-57.804687 47.101563-104.832031 104.996094-104.832031 24.335938 0 48.054688 8.503906 
                                            66.785156 23.9375 3.195313 2.632812 7.921876 2.179688 10.558594-1.015625 2.632813-3.199219 2.179688-7.925781-1.019531-10.558594-21.410156-17.644531-48.515625-27.363281-76.324219-27.363281-44.53125 
                                            0-83.472656 24.351562-104.179687 60.414062h-183.632813c-41.527344 0-75.316406 33.746094-75.316406 75.222657v45.53125c0 4.144531 3.355469 7.5 7.5 7.5s7.5-3.355469 
                                            7.5-7.5v-45.53125c0-33.207031 27.058594-60.222657 60.316406-60.222657h176.367188c-5.511719 13.742188-8.550782 28.730469-8.550782 44.417969 0 66.074219 53.828126 
                                            119.828125 119.996094 119.828125 22.351563 0 43.296875-6.144531 61.234375-16.816406v213.9375c0 33.203125-27.058593 60.21875-60.316406 60.21875h-33.273437c-4.140626 
                                            0-7.5 3.355469-7.5 7.5s3.359374 7.5 7.5 7.5h33.273437c41.527344 0 75.316406-33.742188 75.316406-75.21875v-224.480469c26.707031-21.996093 43.757813-55.28125 43.757813-92.46875zm0 0"></path>
                                            <path 
                                            d="m363.128906 174.046875c4.140625 0 7.5-3.359375 7.5-7.5v-93.402344c0-2.96875-1.753906-5.660156-4.46875-6.859375-2.714844-1.199218-5.886718-.683594-8.082031 1.3125l-16.074219 
                                            14.636719c-3.066406 2.789063-3.285156 7.535156-.496094 10.597656 2.789063 3.0625 7.53125 3.285157 10.59375.496094l3.527344-3.210937v76.429687c0 4.140625 3.355469 7.5 7.5 7.5zm0 0"></path>
                                            <path 
                                            d="m87.066406 428.183594c3.089844 0 4.996094-1.140625 5.71875-3.425782l6.335938-22.097656h38.078125l6.414062 22.15625c.785157 2.246094 2.8125 3.367188 6.070313 3.367188 2.695312 
                                            0 5.246094-.703125 7.65625-2.105469 2.40625-1.402344 3.609375-3.074219 3.609375-5.019531 0-.324219-.101563-.8125-.308594-1.457032l-30.671875-100.234374c-1.316406-3.457032-5.042969-5.183594-11.179688-5.183594-6.023437 
                                            0-9.695312 1.855468-11.011718 5.5625l-30.757813 100.253906c-.105469.308594-.15625.773438-.15625 1.390625 0 1.851563 1.082031 3.449219 3.246094 4.789063 2.164063 1.335937 4.484375 2.003906 6.957031 2.003906zm31-91.601563 
                                            15.53125 53.085938h-30.75zm0 0"></path><path d="m180.136719 428.183594c2.269531 0 4.207031-.488282 5.808593-1.46875 1.601563-.980469 2.402344-2.292969 2.402344-3.945313v-38.207031h19.207032c10.535156 0 18.976562-2.757812 25.328124-8.273438 
                                            6.351563-5.515624 9.527344-14.152343 9.527344-25.910156v-1.234375c0-11.757812-3.074218-20.367187-9.21875-25.832031-6.144531-5.464844-14.382812-8.199219-24.707031-8.199219h-30.207031c-1.859375 0-3.382813.519531-4.570313 1.546875-1.1875 1.03125-1.78125 
                                            2.269532-1.78125 3.710938v102.398437c0 1.652344.828125 2.964844 2.480469 3.945313 1.652344.980468 3.5625 1.46875 5.730469 1.46875zm8.210937-98.53125h19.207032c5.886718 0 10.429687 1.648437 13.632812 4.949218 3.199219 3.300782 4.800781 8.300782 4.800781 
                                            15.003907v1.855469c0 6.703124-1.601562 11.730468-4.800781 15.082031-3.203125 3.351562-7.746094 5.027343-13.632812 5.027343h-19.207032zm0 0"></path>
                                            <path 
                                            d="m326.832031 349.140625c0-11.753906-3.070312-20.363281-9.214843-25.828125-6.148438-5.464844-14.382813-8.199219-24.707032-8.199219h-30.207031c-1.859375 
                                            0-3.386719.515625-4.570313 1.546875-1.1875 1.03125-1.78125 2.269532-1.78125 3.710938v102.398437c0 1.652344.824219 2.964844 2.476563 3.945313 1.652344.980468 
                                            3.566406 1.46875 5.734375 1.46875 2.269531 0 4.207031-.488282 5.808594-1.46875 1.601562-.980469 2.398437-2.292969 2.398437-3.945313v-38.207031h19.210938c10.53125 
                                            0 18.976562-2.757812 25.328125-8.273438 6.347656-5.515624 9.523437-14.152343 9.523437-25.910156zm-16.417969 2.320313c0 6.703124-1.605468 11.730468-4.804687 
                                            15.082031-3.199219 3.351562-7.742187 5.027343-13.628906 5.027343h-19.210938v-41.917968h19.210938c5.886719 0 10.429687 1.648437 13.628906 4.949218 3.199219 
                                            3.300782 4.804687 8.300782 4.804687 15.003907zm0 0"></path>
                                        </svg>
                                    </span>
                                    <h5 className="u-text u-text-custom-color-1 u-text-default usage-text-6">
                                        Empresa digital
                                    </h5>
                                    <p className="u-text u-text-grey-60 usage-text-7">
                                        A empresa que adota a tecnologia a seu favor se destaca. 
                                        Além de facilitar o gerenciamento, ganha pontos com os clientes. 
                                        Chega de cartãozinhos!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-align-left u-clearfix usage-section-3" id="sec-1c37">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-xl usage-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap usage-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs usage-layout-cell-1">
                                    <div className="u-container-layout u-valign-bottom-sm u-valign-top-xs usage-container-layout-1">
                                        <div className="fr-view u-clearfix u-rich-text u-text usage-text-1">
                                            <h2 style={{textAlign: "left"}}>
                                                Recompensas
                                            </h2>
                                            <p style={{textAlign: "left"}}>
                                                <span style={{lineHeight: "2.0"}}>
                                                    A função básica que a plataforma oferece, é a pontuação para os clientes toda vez que ele consome em seu estabelecimento, 
                                                    e depois os pontos acumulados podem ser revertidos em prêmios que você mesmo vai determinar. Todo mundo gosta de receber recompensas
                                                    dependendo da sua atividade, o custo da recompensa não tem um valor significativo para o estabelecimento, por exemplo numa barbearia 
                                                    se realizar 10 cortes de cabelo ganha 1 grátis, este prêmio é apenas um serviço e não tem custo. O cliente voltará com mais frequência,
                                                    e o cliente satisfeito dificilmente mudará de barbearia. Isto serve para outras atividades, no restaurante muita comida é desperdiçada
                                                    se não for vendida no mesmo dia, e por que não dar como prêmio? E também ajuda o restaurante a diminuir o desperdicio, pois quem determina os prêmios
                                                    são os própios lojistas.
                                                </span>
                                            </p>
                                            <h2 style={{textAlign: "left"}}>
                                                Cashback
                                            </h2>
                                            <p style={{textAlign: "left"}}>
                                                <span style={{lineHeight: "2.0"}}>
                                                    Os pontos também podem ser revertidos em descontos nas próximas compras, crie suas regras, mas aconselhamos que os 
                                                    pontos sejam revertidos em um valor fixo e que pode ser abatido até &nbsp;X% da compra. Por exemplo: 
                                                    você estabeleceu 1000 pontos igual a R$ 20,00, porém só pode abater até 20% na próxima compra, isto é, o cliente deve consumir 
                                                    no minimo R$ 100,00 para ter o abatimento de R$ 20,00. Desta forma forçamos o cliente a gastar mais para poder usar este desconto. 
                                                    É de natureza humana pensar que deve utilizar um benefício adquirido, pois se ele não for consumado dá a sensação de prejuízo.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs usage-layout-cell-2">
                                    <div className="u-container-layout usage-container-layout-2">
                                        <img className="u-expanded-width-xs u-image u-image-round u-radius-24 usage-image-1" src={Payment} alt="paying" data-image-width="1067" data-image-height="1600" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Right"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix usage-section-4" id="sec-0670">
                <div className="u-clearfix u-sheet u-valign-middle usage-sheet-1">
                    <div className="u-clearfix u-expanded-width u-layout-wrap usage-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs usage-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle usage-container-layout-1">
                                        <img className="u-image u-image-round u-radius-24 usage-image-1" src={Qrcode} alt="scan qrcode" data-image-width="2382" data-image-height="3204" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction="Left"/>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs usage-layout-cell-2">
                                    <div className="u-container-layout usage-container-layout-2">
                                        <div className="fr-view u-align-center u-clearfix u-rich-text u-text usage-text-1">
                                            <h2 style={{textAlign: "left"}}>
                                                Notificações
                                            </h2>
                                            <p style={{textAlign: "left"}}>
                                                <span style={{lineHeight: "2.0"}}>
                                                    Já deu vontade de querer avisar as novidades e promoções para seus clientes? Aderindo ao seu plano de fidelização, 
                                                    automaticamente cria-se um link onde poderá notifica-los, isso não é uma maravilha? Quando notificamos os clientes 
                                                    não esperamos uma resposta, apenas que recebam a mensagem. Esta tática é bastante usada por outros aplicativos. 
                                                    Quantas notificações você já recebeu hoje? &nbsp;
                                                </span>
                                            </p>
                                            <h2 style={{textAlign: "left"}}>
                                                Aplicativo
                                            </h2>
                                            <p style={{textAlign: "left"}}>
                                                <span style={{lineHeight: "2.0"}}>
                                                    O aplicativo Fidelijá é uma forma de marketing place onde o cliente final acumula os pontos de diversos 
                                                    &nbsp;estabelecimentos, e através dele pode ser verificado as pontuações e os prêmios que cada estabelecimento 
                                                    oferece. Não exigimos nenhum investimento inicial em equipamentos, todo gerenciamento pode ser feito usando 
                                                    apenas um computador e smartphone, para pontuar e invalidar os cupons de forma simples, sempre através de QR code 
                                                    para evitar erros humanos e acelerar o processo.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="u-clearfix u-grey-10 usage-section-5" id="carousel_4d21">
                <div className="u-clearfix u-sheet usage-sheet-1">
                    <div className="u-clearfix u-layout-wrap usage-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                                <div className="u-container-style u-layout-cell u-left-cell u-size-15 usage-layout-cell-1">
                                    <div className="u-container-layout u-valign-middle usage-container-layout-1">
                                        <div alt="steve jobs" className="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-image u-image-circle usage-image-1" data-image-width="1024" data-image-height="682" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-delay="0" data-animation-direction=""></div>
                                    </div>
                                </div>
                                <div className="u-container-style u-layout-cell u-right-cell u-size-45 usage-layout-cell-2">
                                    <div className="u-container-layout usage-container-layout-2">
                                        <span className="u-icon u-icon-circle u-text-palette-3-light-1 usage-icon-1">
                                            <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4ea0"></use>
                                            </svg>
                                            <svg id="svg-4ea0" x="0px" y="0px" viewBox="0 0 95.333 95.332" style={{enableBackground: "new 0 0 95.333 95.332"}} className="u-svg-content">
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
                                                <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                            </svg>
                                        </span>
                                        <p className="u-align-justify u-text usage-text-1">
                                            Cada sonho que você deixa para trás, é um pedaço do futuro que deixa de existir.<br/>
                                            <br/>
                                        </p>
                                        <p className="u-align-right u-text usage-text-2">Steve Jobs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Fab/>
        </div>
    )
}

export default Plans
