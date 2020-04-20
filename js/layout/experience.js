"use strict"


function renderExperience( expList ) {
    let HTML = '';

    if ( !Array.isArray(expList) ) {
        return console.log('ERROR: data is not arrey..');  
    }
    if ( expList.length === 0 ) {
        return console.log('ERROR: arrey cannot be empty');  
    }
    
    for (let i = 0; i < expList.length; i++) {
        const experienceSection = expList[i];
            HTML += `<div class="expierence-box">
                        <div class="exp-time">
                            <div class="dashed-line"></div>
                            <h4>${experienceSection.company}</h4>
                            <p>${experienceSection.year}</p>
                        </div>
                        <i class="fa ${experienceSection.icon}"></i>
                        <div class="experience">
                            <h3>${experienceSection.position}</h3>
                            <p>${experienceSection.text}</p>
                        </div>
                    </div>`;
    }
    return document.querySelector('#expContent').innerHTML = HTML;
}
function renderExperienceRow() {
    let experienceHTML = '';
    experienceHTML += `<div class="row">
                        <div class="section-title text-center">
                            <h2>My experience</h2>
                                <div class="horizontal-line">
                                    <div class="top-line"></div>
                                    <div class="bottom-line"></div>
                                </div>
                            </div>
                        </div>   
                    <div class="row" id="expContent">
                    </div>`;
    return document.querySelector('#experience').innerHTML = experienceHTML;

}
renderExperienceRow();
renderExperience(experience);

export default renderExperience;