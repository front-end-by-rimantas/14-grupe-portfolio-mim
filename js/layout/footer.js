/** @format */

"use strict";

function renderFooter(footerList) {
  let footerHTML = "";

  if (!Array.isArray(footerList)) {
    return console.log("ERROR: data is not arrey..");
  }
  if (footerList.length === 0) {
    return console.log("ERROR: arrey cannot be empty");
  }

  for (let f = 0; f < footerList.length; f++) {
    const footer = footerList[f];
    footerHTML += `<a href="${footer.link}"target="${footer.target}">
                            ${footer.description}
                        </a>`;
  }

  let HTML = `<div class="row">
                    <div class="f-left col-3 col-lg-3 col-md-4 col-sm-4 col-xs-12  min-width-0">Copyright © 2020 IVTT</div>
                    <div class="f-right col-4 col-lg-5 col-md-6 col-sm-7 col-xs-12  min-width-0">
                    ${footerHTML}
                    </div>
                </div>`;

  document.querySelector("#main_footer").innerHTML = HTML;
}

function setUpFooter() {
  renderFooter(footer);
}

export default setUpFooter;
