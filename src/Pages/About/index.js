import React from 'react';
import './about.css';
import { Background } from '../../Assets/'

function About() {
    return (
        <div>
            <section className="u-align-center u-clearfix u-gradient about-section-1" id="sec-c03f">
              <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h1 className="u-custom-font u-text u-text-default u-text-white about-text-1">Quem somos?</h1>
              </div>
            </section>
            <section className="u-align-center u-clearfix about-section-2" id="sec-8a7a">
              <div className="u-clearfix u-sheet about-sheet-1">
                <h2 className="u-custom-font u-text u-text-default about-text-1">Fundadores<br/>
                </h2>
                <p className="u-text about-text-2">
                  Sample text. Click to select the text box. Click again or double click to start editing the text. 
                </p>
                <div className="u-expanded-width u-list about-list-1">
                  <div className="u-repeater about-repeater-1">
                    <div className="u-align-center u-container-style u-list-item u-repeater-item">
                      <div className="u-container-layout u-similar-container u-valign-top about-container-layout-1">
                        <div alt="" className="u-image u-image-circle about-image-1" src="" data-image-width="256" data-image-height="256"></div>
                        <p className="u-text about-text-3">"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                        <h5 className="u-text about-text-4">Richard Liu</h5>
                        <h6 className="u-text about-text-5">Coordenador</h6>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-list-item u-repeater-item">
                      <div className="u-container-layout u-similar-container u-valign-top about-container-layout-2">
                        <div alt="" className="u-image u-image-circle about-image-2" src="" data-image-width="256" data-image-height="256"></div>
                        <p className="u-text about-text-6">"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                        <h5 className="u-text about-text-7">Eduardo Soares</h5>
                        <h6 className="u-text about-text-8">Tecnologia</h6>
                      </div>
                    </div>
                    <div className="u-align-center u-container-style u-list-item u-repeater-item">
                      <div className="u-container-layout u-similar-container u-valign-top about-container-layout-3">
                        <div alt="" className="u-image u-image-circle about-image-3" src="" data-image-width="256" data-image-height="256"></div>
                        <p className="u-text about-text-9">"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                        <h5 className="u-text about-text-10">Michael Andrews</h5>
                        <h6 className="u-text about-text-11">Growth Marketing</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="u-clearfix about-section-3" id="carousel_5e43">
              <div className="u-clearfix u-sheet about-sheet-1">
                <div className="u-clearfix u-expanded-width u-layout-wrap about-layout-wrap-1">
                  <div className="u-layout">
                    <div className="u-layout-row">
                      <div className="u-container-style u-custom-color-1 u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs about-layout-cell-1">
                        <div className="u-container-layout about-container-layout-1">
                          <h2 className="u-align-left u-custom-font u-text u-text-default about-text-1">nossa missão</h2>
                          <p className="u-align-justify-lg u-align-justify-md u-align-justify-sm u-align-justify-xl u-align-left-xs u-custom-font u-font-montserrat u-text about-text-2">
                            A economia formal que conhecemos sofreu grandes mudanças na última década devido a digitalização e o comportamento de consumo. 
                            Grandes varejistas estão dominando cada vez mais, e os pequenos perdendo o espaço a cada dia.&nbsp;<br/>
                          </p>
                          <p className="u-align-justify-lg u-align-justify-md u-align-justify-sm u-align-justify-xl u-align-left-xs u-custom-font u-font-montserrat u-text about-text-3"> 
                            O que muitos não sabem é que os pequenos negócios, são responsáveis por&nbsp;mais da metade do emprego 
                            formal&nbsp;no país e por quase&nbsp;um terço de toda economia.<br/>
                          </p>
                          <p className="u-align-justify-lg u-align-justify-md u-align-justify-sm u-align-justify-xl u-align-left-xs u-custom-font u-font-montserrat u-text about-text-4">
                            Nossa missão é fornecer a mesma tecnologia empregada pelos grandes varejistas, dando as mesmas vantagens que eles propõe.
                          </p>
                          <p className="u-align-justify u-custom-font u-font-montserrat u-text about-text-5">
                            Por um mundo mais competitivo e sem desigualdade, queremos dar a oportunidade aos pequenos empreendedores o plano gratuito. 
                            Acreditamos que a tecnologia deve ser democrática e de fácil acesso, e mais importante melhorar a vida das pessoas.<br/>
                          </p>
                        </div>
                      </div>
                      <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs about-layout-cell-2">
                        <div className="u-container-layout u-valign-middle about-container-layout-2">
                          <img className="u-expanded-width u-image u-image-default about-image-1" src={Background} alt="" data-image-width="1280" data-image-height="852"/>
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

export default About
