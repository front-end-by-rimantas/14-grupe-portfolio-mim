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
        HTML += `<div class="col-3 col-md-6 col-xxs-service-12 ${serviceSection.class}">
                    <div class="box-inside">
                        <i class="fa ${serviceSection.icon}"></i>
                        <h4>${serviceSection.title}</h4>
                        <p>${serviceSection.description}</p>
                    </div>
                </div>`;
    }
    return document.querySelector('#transferServices').innerHTML = HTML;
}
function renderServicesRow() {
    let servicesHTML = '';
    servicesHTML += `<div class="row">
                        <div class="section-title text-center">
                            <h2>My services</h2>
                                <div class="horizontal-line">
                                    <div class="top-line"></div>
                                    <div class="bottom-line"></div>
                                </div>
                            </div>
                        </div>   
                    <div class="row" id="transferServices">

                    </div>`;
    return document.querySelector('#services').innerHTML = servicesHTML;

}
renderServicesRow();
renderServices(services);

export default renderServices;