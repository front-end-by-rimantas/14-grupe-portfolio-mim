"use strict";

class HeaderSection {
    constructor( parentId ) {
        this.parent = document.getElementById( parentId )
        this.init()
    }

    init() {
        this.render()
    }

    render() {
        let header = document.createElement( 'div' )
        header.classList = 'container header'
        header.id = 'new'
        // header.classList.add()
        // header.classList.remove()
        this.parent.appendChild( header )
        header.innerHTML = `
            <div class="row">
                <div class = "col-6 col-lg-5 min-width-0">
                    <a href="#"><img class="logo" src="./img/dark-logo.png" alt="Logo"></a>
                </div>
                <div class = "col-6 col-lg-7 min-width-0">
                    <nav />
                    <div class="menuIcon">
                        <div class="mIcon"></div>
                        <div class="mIcon"></div>
                        <div class="mIcon" data-something="0"></div>

                        object.dataset.something

                    </div>
                </div>
            </div> 
        `

        const extra = 'this is extra Side Menu'

        this.parent.insertAdjacentHTML( 'beforeend', 
            `
                <div class="side-menu" id="transferSideMenuContent">
                    ${extra}
                </div>
            `
        )
    }
}

export default HeaderSection

// /*const A = */new HeaderSection( 'main_header' )

// const B = new HeaderSection( 'bbb' )
// B.render()
// B.value = 'bbb'

// static classes
// import HeaderSection from ''
// HeaderSection.method( a + b )

// export default A - A.js
// export default A - B.js

// import alias from'./A.js'
// import alias from'./B.js'

// same file + default
// export const C
// export let Arr

// import alias, { C, Arr } from '...'

// be strict: import X from 'source' - be .js
// import X from 'directory' - be index.js/.html

//static class
// method( a, b ) {
//     return a + b
// } 

// this.value - statinis


/*function renderIntroduction(){
    let introHTML = "";
    introHTML += `<div class="row">
    <div class = "col-6 col-md-7 m-l-md-0 col-sm-12 col-xs-11 m-l-xs-1">
        <div class = "text">
            <h5>Hello, my name is</h5>
            <h1>Andrew Jordan</h1>
            <p>On the other hand, we denounce with righteous indignation and dislike
                men who are so beguiled demord by</p>
            <a class="btn lg-btn" href="#portfolio">MY WORK</a>
        </div>
    </div>
    <div class = "col-6 col-md-5 m-l-md-0 col-sm-12 col-xs-11 m-l-xs-1">
        <div class = "image">
        <img src="./img/author.png" alt="author">
        </div>
    </div> 
</div>`

return document.querySelector('#intro').innerHTML = introHTML;
}



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
    renderIntroduction();
    renderHeaderMenu(navigation)
    removeOverlay();
    fixedHeader()
    headerScroll()
    removeOverlay()
}

export default setUpHeader;

*/