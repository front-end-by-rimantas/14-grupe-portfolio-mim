/** @format */

"use strict";
/*export default class contentOfSideMenu {
    constructor( sideMenuId ) {
        this.side = document.getElementById(sideMenuId);
        this.init();
       
    }

    init() {
        this.renderContent();
        this.renderEvent();
    }

    renderContent() {
        this.side.insertAdjacentHTML('beforeend', `
                        <div class="element bot-border element-one">
                            <div class="close fa fa-times-circle-o"></div>
                            <a href="./index.html"><img class="logoS logoMin" src="./img/light-logo.png" alt="Logo"></a>
                        </div>
                        <nav>
                            <div id="transferSideMenu" />
                            <div class="element bot-border hov-dark">
                                <div class="menu-item">Update notice!</div>
                                <a href="#" class="side-menu-box">Update &#38 notice</a>
                            </div>
                            <div class="element bot-border hov-dark">
                                <a href="#" class="side-menu-box">Pricing &#38 timeline</a>
                            </div>
                            <div class="element bot-border hov-dark">
                                <div class="menu-item">New Updated!</div>
                                <a href="#" class="side-menu-box">Portfolio details</a>
                            </div>
                            <div class="element bot-border hov-dark" id="dark">
                                <a href="#" class="side-menu-box">Pricing &#38 timeline </a>
                                <div class="span">( Dark Version )</div>
                            </div>
                        </nav>
        `);
    }

    renderEvent() {
        const bars = document.querySelector('#main_header .menuIcon');
        const sideMenu = document.querySelector('#main_header .side-menu');
        bars.addEventListener('click', function () {

        return sideMenu.classList.add("show-side-menu");

        });
        const times = document.querySelector('#main_header .close');
        times.addEventListener('click', function () {

        return sideMenu.classList.remove("show-side-menu");

        });
        const timesClose = document.querySelectorAll('.close-side-menu');
        for (let z = 0; z < timesClose.length; z++) {
            const element = timesClose[z];
            element.addEventListener('click', function () {

            return sideMenu.classList.remove("show-side-menu");
                
            });
        }
    }

}

// Old code variant

// function renderContentOfSideMenu() {
//     let contentHTML = '';
//         contentHTML += `<div class="element bot-border element-one">
//                             <div class="close fa fa-times-circle-o"></div>
//                             <a href="./index.html"><img class="logoS logoMin" src="./img/light-logo.png" alt="Logo"></a>
//                         </div>
//                         <nav>
//                             <div id="transferSideMenu">
//                                 Side menu content
//                             </div>
//                             <div class="element bot-border hov-dark">
//                                 <div class="menu-item">Update notice!</div>
//                                 <a href="#" class="side-menu-box">Update &#38 notice</a>
//                             </div>
//                             <div class="element bot-border hov-dark">
//                                 <a href="#" class="side-menu-box">Pricing &#38 timeline</a>
//                             </div>
//                             <div class="element bot-border hov-dark">
//                                 <div class="menu-item">New Updated!</div>
//                                 <a href="#" class="side-menu-box">Portfolio details</a>
//                             </div>
//                             <div class="element bot-border hov-dark" id="dark">
//                                 <a href="#" class="side-menu-box">Pricing &#38 timeline </a>
//                                 <div class="span">( Dark Version )</div>
//                             </div>
//                         </nav>`;
//     return document.querySelector('#transferSideMenuContent').innerHTML = contentHTML;
// }

// renderContentOfSideMenu();

// const bars = document.querySelector('#main_header .menuIcon');
// const sideMenu = document.querySelector('#main_header .side-menu');
// bars.addEventListener('click', function () {

// return sideMenu.classList.add("show-side-menu");

// });
// const times = document.querySelector('#main_header .close');
// times.addEventListener('click', function () {

// return sideMenu.classList.remove("show-side-menu");

// });
// const timesClose = document.querySelectorAll('.close-side-menu');
// for (let z = 0; z < timesClose.length; z++) {
//     const element = timesClose[z];
//     element.addEventListener('click', function () {

//     return sideMenu.classList.remove("show-side-menu");
        
//     });
// }

function renderElement( sideList ) {
    let HTML = '';

    if ( !Array.isArray(sideList) ) {
        return console.log('ERROR: data is not arrey..');  
    }
    if ( sideList.length === 0 ) {
        return console.log('ERROR: arrey cannot be empty');  
    }

    for (let i = 0; i < sideList.length; i++) {
        const sideSection = sideList[i];
        HTML += `<div class="${sideSection.class}">
                    <a href="${sideSection.id}" class="side-menu-box">${sideSection.description}</a>
                </div>`;
    }
    return document.querySelector('#transferSideMenu').innerHTML = HTML;
}

/*function renderContentOfSideMenu() {
    let contentHTML = '';
        contentHTML += `<div class="element bot-border element-one">
                            <div class="close fa fa-times-circle-o"></div>
                            <a href="./index.html"><img class="logoS logoMin" src="./img/light-logo.png" alt="Logo"></a>
                        </div>
                        <nav>
                            <div id="transferSideMenu">
                                Side menu content
                            </div>
                            <div class="element bot-border hov-dark">
                                <div class="menu-item">Update notice!</div>
                                <a href="#" class="side-menu-box">Update &#38 notice</a>
                            </div>
                            <div class="element bot-border hov-dark">
                                <a href="#" class="side-menu-box">Pricing &#38 timeline</a>
                            </div>
                            <div class="element bot-border hov-dark">
                                <div class="menu-item">New Updated!</div>
                                <a href="#" class="side-menu-box">Portfolio details</a>
                            </div>
                            <div class="element bot-border hov-dark" id="dark">
                                <a href="#" class="side-menu-box">Pricing &#38 timeline </a>
                                <div class="span">( Dark Version )</div>
                            </div>
                        </nav>`;
    return document.querySelector('#transferSideMenuContent').innerHTML = contentHTML;
}


renderContentOfSideMenu();

const bars = document.querySelector('#main_header .menuIcon');
const sideMenu = document.querySelector('#main_header .side-menu');
bars.addEventListener('click', function () {

return sideMenu.classList.add("show-side-menu");

});
const times = document.querySelector('#main_header .close');
times.addEventListener('click', function () {

return sideMenu.classList.remove("show-side-menu");

});
const timesClose = document.querySelectorAll('.close-side-menu');
for (let z = 0; z < timesClose.length; z++) {
    const element = timesClose[z];
    element.addEventListener('click', function () {

    return sideMenu.classList.remove("show-side-menu");
        
    });
}

function renderElement( sideList ) {
    let HTML = '';

    if ( !Array.isArray(sideList) ) {
        return console.log('ERROR: data is not arrey..');  
    }
    if ( sideList.length === 0 ) {
        return console.log('ERROR: arrey cannot be empty');  
    }

    for (let i = 0; i < sideList.length; i++) {
        const sideSection = sideList[i];
        HTML += `<div class="${sideSection.class}">
                    <a href="${sideSection.id}" class="side-menu-box">${sideSection.description}</a>
                </div>`;
    }
    return document.querySelector('#transferSideMenu').innerHTML = HTML;
}

function setUpSideMenu(params) {
    renderElement(side);
}

export default setUpSideMenu;*/
