"use strict";
/// nuimame overlay klas4, kuri atsiranda tik užkrovus puslapį
function removeOverlay(){
    let overlay = document.querySelector(".overlay")
    setTimeout(function(){
      overlay.remove();
    }, 2000);
    return
}
removeOverlay()

////// pridedame animaciją - papildomą klasę logo paspaudimui
const logo = document.querySelector(".logo");
logo.addEventListener('click', openOverlay);
const body = document.querySelector("body");

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

const logoS = document.querySelector(".logoS");
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

/////
window.addEventListener('scroll', funcScroll);

function funcScroll(){
    return
}

window.addEventListener('scroll', () => {
    headerScroll();  
    fixedHeader();
});

export function headerScroll(){
    //einamoji scrolo vieta (aukstis)
    //susidarome sarasa
    let links = [];
    let DOMlinks = document.querySelectorAll(".header > .row nav a");
    const headerHeight = document.querySelector(".container.header").offsetHeight;
   

    const height = window.scrollY + headerHeight;

    console.log(window.scrollY)

    for(let i = 0; i<DOMlinks.length; i++){
        const link = DOMlinks[i];
       const href = link.href;
       const split = href.split("#");
       if(split.length > 1){
        links.push("#" + split[1]);
       }
    }
   
    //randame aukscio pozicija
    let sectionHeigths = [];
        for (let i = 0; i<links.length; i++){
            const link = links[i];
            console.log()
            if (link === "#"){
                sectionHeigths.push(0);
                
            }else{
                const section = document.querySelector(link)
                
                sectionHeigths.push(section.offsetTop)
                
            }
        }

       

    let wantedSection = 0;
    //nustatome kuri is dominanciu yra artimiausia mano esamai pozicijai
    for(let i=0; i<sectionHeigths.length; i++){
        const sectionH = sectionHeigths[i];
        console.log(sectionHeigths[1]);
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

export function fixedHeader() {
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


