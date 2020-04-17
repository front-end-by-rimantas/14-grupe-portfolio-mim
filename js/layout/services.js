"use strict"


function renderServices( serviceList ) {
    let HTML = '';

    if ( !Array.isArray(serviceList) ) {
        return console.log('ERROR: data is not arrey..');  
    }
    if ( serviceList.length === 0 ) {
        return console.log('ERROR: arrey cannot be empty');  
    }
    
    for (let i = 0; i < serviceList.length; i++) {
        const serviceSection = serviceList[i];
        HTML += `<div class="col-3 ${serviceSection.class}">
                    <div class="box-inside">
                        <i class="fa ${serviceSection.icon}"></i>
                        <h4>${serviceSection.title}</h4>
                        ${serviceSection.margin}
                        <p>${serviceSection.description}</p>
                    </div>
                </div>`;
    }
    return document.querySelector('#transferServices').innerHTML = HTML;
}
function renderServicesRow() {
    let servicesHTML = '';
    servicesHTML += `<div class="row" id="transferServices">
    
                    </div>`;
    return document.querySelector('#services').innerHTML = servicesHTML;

}
renderServicesRow();
renderServices(services);

export default renderServices;