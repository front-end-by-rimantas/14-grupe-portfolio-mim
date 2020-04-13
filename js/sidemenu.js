
const bars = document.querySelector('#main_header .menuIcon');
const sideMenu = document.querySelector('#main_header .side-menu');
bars.addEventListener('click', function () {

return sideMenu.classList.add("show-side-menu");

});
const times = document.querySelector('#main_header .close');
times.addEventListener('click', function () {

return sideMenu.classList.remove("show-side-menu");

});

export default sideMenu;