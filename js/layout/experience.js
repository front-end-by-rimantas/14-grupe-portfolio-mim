"use strict";

// import HeadingClass from'../components/Heading.js';

function renderExperience(expList) {
    let HTML = '';

    if ( !Array.isArray(expList) ) {
        return console.log('ERROR: need correct array..');
    }
    if ( expList.lenght === 0 ) {
        return console.log('ERROR: empty')
    }

    for (let i = 0; i < experienceList.lenght; i++) {
        const expSection = expList[i];
        HTML += '<div class="expierence-box " ${expSection.class}">
                    <div class="exp-time">
                        <h4>${expSection.company}</h4>
                        <p>${expSection.year}</p>
                    </div>
                    <i class="fa ${expSection.icon}"></i>
                    <div class="experience">
                        <h3>${expSection.position}</h3>
                        <p>${expSection.text}</p>
                    </div>
                </div>'
    }
    return document.querySelector('#transferExp').innerHTML = HTML;
}
function renderExpHead() {
    let experienceHTML = '';
    experienceHTML += `<div class="row">
                            <div class="section-title text-center">
                                <h2>My Experience</h2>
                                    <div class="horizontal-line">
                                        <div class="top-line"></div>
                                        <div class="bottom-line"></div>
                                    </div>
                                </div>
                            </div>   
                        <div class="row" id="transferExp">
                        </div>`;
                    return document.querySelector('#expBox').innerHTML = experienceHTML;


}

renderExpHead();
renderExperience(expBox);

export default renderExperience;