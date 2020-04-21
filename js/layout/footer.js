"use strict"

function renderFooter(footerList) {
    let footerHTML = '';
    for (let f = 0; f < footerList.length; f++) {
        const footer = footerList[f];
        footerHTML += `<a href="${footer.link}" 
                        target="${footer.target}">${footer.description}</a>`;
    }
    let HTML = `<div class="row">
                    <div class="f-left col-3 col-lg-3 col-md-4 col-sm-4 col-xs-12">Copyright © 2020 IVTT</div>
                    <div class="f-right col-4 col-lg-5 col-md-6 col-sm-7 col-xs-12">
                    ${footerHTML}
                    </div>
                </div>`
    document.querySelector('#main_footer').innerHTML = HTML;
}
renderFooter(footer);

export default renderFooter;