"use strict";

function renderContacts(contactData){
    if (!Array.isArray(contactData)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < contactData.length; i++){
        HTML += `<div class="contact">
                ${contactData[i].i}
                <div class="credentials">
                <h4>${contactData[i].h4}</h4>
                <a href="#" class = ${contactData[i].class}>${contactData[i].atext}</a>
                </div>
                </div>
               
                `
    }
    let contactmenu = document.querySelector('.bottom');
    console.log(contactmenu)
    return contactmenu.innerHTML = HTML; 
}

renderContacts(contacts)


    console.log(document.querySelector('.cont-btn'))

    document.querySelector('.cont-btn').addEventListener('click', renderAlert);

    function renderAlert(){
        
    }

   

