/** @format */

"use strict";

function renderExperience(expList) {
  let HTML = "";
  let col1 = "";
  let col2 = "";
  if (!Array.isArray(expList)) {
    return;
  }
  if (expList.length === 0) {
    return console.log("ERROR: arrey cannot be empty");
  }
  let dash = "";

  for (let i = 0; i < expList.length; i++) {
    const experienceSection = expList[i];
    if (i % 2 === 0) {
      dash = "dash";
    } else {
      dash = "";
    }
    HTML = `
        <div class="expierence-box" >
        <div class="exp-time">
        <div class="${dash}"></div>
        <h4>${experienceSection.company}</h4>
        <p>${experienceSection.year}</p>
        </div>
        <i class="fa ${experienceSection.icon}"></i>
        <div class="experience">
        <h3>${experienceSection.position}</h3>
        <p>${experienceSection.text}</p>
        </div>
        </div>`;

    if (i === 1 || i === 0) {
      col1 += HTML;
    } else if (i === 2 || i === 3) {
      col2 += HTML;
    }
  }
  col1 = `<div class="col-6 col-sm-6 col-xs-12" >` + col1 + `</div>`;
  col2 = `<div class="col-6 col-sm-6 col-xs-12" >` + col2 + `</div>`;
  return (document.querySelector("#expContent").innerHTML = col1 + col2);
}
// section title start
function renderExperienceTitleRow() {
  let experienceHTML = "";
  experienceHTML += `<div class="row">
                        <div class="section-title text-center">
                            <h2>My experience</h2>
                                <div class="horizontal-line">
                                    <div class="top-line"></div>
                                    <div class="bottom-line"></div>
                                </div>
                            </div>
                        </div>   
                    <div class="row" id = "expContent">
                    </div>`;
  return (document.querySelector("#experience").innerHTML = experienceHTML);
}
// section title end

renderExperienceTitleRow();
renderExperience(experience);

export default renderExperience;
