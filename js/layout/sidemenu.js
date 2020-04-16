
const bars = document.querySelector('#main_header .menuIcon');
const sideMenu = document.querySelector('#main_header .side-menu');
bars.addEventListener('click', function () {

return sideMenu.classList.add("show-side-menu");

});
const times = document.querySelector('#main_header .close');
times.addEventListener('click', function () {

return sideMenu.classList.remove("show-side-menu");

});

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
                    <a href="${sideSection.id}">${sideSection.description}</a>
                </div>`;
    }
    return document.querySelector('#transferSideMenu').innerHTML = HTML;
}
renderElement(side);

export default sideMenu;