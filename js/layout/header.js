"use strict";
import navigation from '../header_data.js';

class Header{
    constructor(target){
        this.target = target
        

        this.init();
    }

    init(){
        const DOM = document.querySelector(this.target);
        if ( !DOM ) {
            throw 'ERROR: header target location was not found.';
        }
        this.DOM = DOM;

        this.renderHeader();
        this.renderHeaderMenu();
        this.removeOverlay();
        this.openOverlay ();
    }

    renderHeader(){
        let HTML = "";
        HTML = `
        <div class="container header">
        <div class="row">
            <div class = "col-6 col-lg-5 min-width-0">
                <a href="#"><img class="logo" src="./img/dark-logo.png" alt="Logo"></a>
            </div>
            <div class = "col-6 col-lg-7 min-width-0">
                <nav>
               
                </nav>
                <div class="menuIcon">
                    <div class="mIcon"></div>
                    <div class="mIcon"></div>
                    <div class="mIcon"></div>
                </div>
             </div>
        </div> 
    </div>    
    <div class="side-menu" id="transferSideMenuContent">
        Side menu
    </div>
        `  
        this.DOM.innerHTML = HTML;
    }

    renderHeaderMenu(){
        if (!Array.isArray(navigation)){
            return console.error("Reikia Array");
        }
       
        let HTML = "";
        for (let i = 0; i < navigation.length; i++){
            HTML += `<a href=${navigation[i].ref} class = ${navigation[i].class}>
               ${navigation[i].text}</a>`
        }
    
        let headerMenu = document.querySelector('nav');
        headerMenu.innerHTML = HTML;
    }

    removeOverlay(){
        let overlay = document.querySelector(".overlay")
        setTimeout(function(){
          overlay.remove();
        }, 2000);
    
    }


    openOverlay (){
        const logo = document.querySelector(".logo");
        
        let body = document.querySelector("body");
        
       logo.addEventListener('click', () => {
        body.insertAdjacentHTML ("afterbegin", `<div class = "overlayLogo">
        <div class = "logoWhite">
            <img src="./img/light-logo.png" alt="Logo">
        </div>
    </div>`)
        } );
        
        let overlayLogo = document.querySelector(".overlayLogo")

        console.log(overlayLogo)

        setTimeout(function(){
            overlayLogo.remove();
        }, 2000);
            
    }
    
}

/*
function renderHeaderMenu(dataHMenu){
    if (!Array.isArray(dataHMenu)){
        return console.error("Reikia Array");
    }
    let HTML = "";
    for (let i = 0; i < dataHMenu.length; i++){
        HTML += `<a href=${dataHMenu[i].ref} class = ${dataHMenu[i].class}>
           ${dataHMenu[i].text}</a>`
    }

    let headerMenu = document.querySelector('nav');
    return headerMenu.innerHTML = HTML;
}


/// nuimame overlay klas4, kuri atsiranda tik užkrovus puslapį
function removeOverlay(){
    let overlay = document.querySelector(".overlay")
    setTimeout(function(){
      overlay.remove();
    }, 2000);
    return
}

////// pridedame animaciją - papildomą klasę logo paspaudimui
const logo = document.querySelector(".logo");
logo.addEventListener('click', openOverlay);
let body = document.querySelector("body");

function openOverlay (){
    body.insertAdjacentHTML("afterbegin", `<div class = "overlayLogo">
    <div class = "logoWhite">
        <img src="./img/light-logo.png" alt="Logo">
    </div>
</div>`);

let overlayLogo = document.querySelector(".overlayLogo")
setTimeout(function(){
    overlayLogo.remove();
}, 2000);
    return
}

let logoS = document.querySelector(".logoS");
logoS.addEventListener('click', openOverlayS);

function openOverlayS (){
    body.insertAdjacentHTML("afterbegin", `<div class = "overlayLogoS">
    <div class = "logoWhite">
        <img src="./img/light-logo.png" alt="Logo">
    </div>
</div>`);

let overlayLogoS = document.querySelector(".overlayLogoS")
setTimeout(function(){
    overlayLogoS.remove();
}, 2000);
    return
}

//nuimame papildomą overlayLogo klase

window.addEventListener('scroll', funcScroll);

function funcScroll(){
    return
}

window.addEventListener('scroll', () => {
    headerScroll();  
    fixedHeader();
});


function headerScroll(){
    //einamoji scrolo vieta (aukstis)
    //susidarome sarasa
    let links = [];
    let DOMlinks = document.querySelectorAll(".header > .row nav a");
    let headerHeight = document.querySelector(".container.header").offsetHeight;

    let height = window.scrollY + headerHeight;
    for(let i = 0; i<DOMlinks.length; i++){
        let link = DOMlinks[i];
       let href = link.href;
       let split = href.split("#");
       if(split.length > 1){
        links.push("#" + split[1]);
       }
    }
   
    //randame aukscio pozicija
    let sectionHeigths = [];
        for (let i = 0; i<links.length; i++){
            let link = links[i];
            console.log()
            if (link === "#"){
                sectionHeigths.push(0);
                
            }else{
                let section = document.querySelector(link)
                sectionHeigths.push(section.offsetTop)
                
            }
        }

    let wantedSection = 0;
    //nustatome kuri is dominanciu yra artimiausia mano esamai pozicijai
    for(let i=0; i<sectionHeigths.length; i++){
        let sectionH = sectionHeigths[i];
        
        if(sectionH <= height){
            wantedSection = i;
        }else{
           
            break;
        }
    }
        //jeigu randame artimiausia dominancia
            //pries tia buvusi nuoroda header > nav netenka active klases
            //naujoji nuoroda
            document.querySelector(`#main_header nav > a.active`).classList.remove('active');
            document.querySelector(`#main_header nav > a[href = "${links[wantedSection]}"]`).classList.add('active'); 
   
    return;

}
function fixedHeader() {
    let firstHeader = document.querySelector('.container.header')
    let minLogo = document.querySelector('.logo')
  // let headerActive = document.querySelector(`#main_header nav > a.ref.active`)
 
    if (window.scrollY > 200) {
        firstHeader.classList.add('fixedHeader');
        minLogo.classList.add('logoMin');
    }

    if (window.scrollY <= 200){
        firstHeader.classList.remove('fixedHeader');
        minLogo.classList.remove('logoMin');
       //headerActive.classList.remove('active');
        //firstHeader.classList.remove('logoMin');
    }
    return
}


function setUpHeader(){
  
    renderHeaderMenu(navigation)
    removeOverlay();
    fixedHeader()
    headerScroll()
    removeOverlay()
}

export default setUpHeader;*/

export default Header

