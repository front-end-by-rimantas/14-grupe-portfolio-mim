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

export default function setUpContacts() {
    renderContacts(contacts)
    console.log(document.querySelector('.cont-btn'))
    document.querySelector('.cont-btn').addEventListener('click', renderAlert);
}

function renderAlert() {

    const textAlert = document.forms["form"]['text'].value;
    const emailAlert = document.forms["form"]['email'].value;
    const textareaAlert = document.querySelector('textarea').value;

    console.log(document.querySelector(".alert-text"))

    if ( textAlert === '' ) {
        document.querySelector(".alert-text").innerHTML = 'The field is required.';
    }

    let email = 0;
    for ( let i=0; i<emailAlert.length; i++ ) {
        if ( emailAlert[i] === '@' ) {
            email++;
        }
    }

    if ( textareaAlert === '' ) {
        document.querySelector(".alert-textarea").innerHTML = 'The field is required.';
    }

    if ( 
        emailAlert[0] === '@' ||
        emailAlert.length-1 === '@' ||
        (emailAlert.length < 5) ) {
            document.querySelector(".alert-email").innerHTML = 'The e-mail address entered is invalid.';
        }

    if ( emailAlert === '' ) {
        document.querySelector(".alert-email").innerHTML = 'The field is required.';
    }
    if ( textareaAlert === '' || emailAlert === '' || textareaAlert === '' || emailAlert.length < 5 ||
        emailAlert[0] === '@' ||
        emailAlert.length-1 === '@'){
        return document.querySelector(".alert-btn").innerHTML = 'One or more fields have an error. Please check and try again.';
    }
    
    return

}

   

