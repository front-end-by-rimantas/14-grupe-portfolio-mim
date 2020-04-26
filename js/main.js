"use strict"

import contentOfSideMenu from './layout/sidemenu.js';
import renderSideList from './layout/sidemenu2.js';
import setUpPortfolio from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import renderExperience from './layout/experience.js';
import setUpHeader from'./layout/header.js';
import setUpServices from'./layout/services.js';
import setUpBlog from'./layout/blog.js';
import setUpBackToTopButton from'./layout/backtotopbtn.js';
import setUpTestimonials from'./layout/testimonials.js';
import setUpFooter from'./layout/footer.js';
import setUpContacts from'./layout/contacts.js';

new contentOfSideMenu('transferSideMenuContent');
new renderSideList('transferSideMenu');

setUpHeader();
// setUpSideMenu();
renderExperience(exp);
setUpPortfolio();
setUpServices();
setUpTestimonials();
setUpBlog();
setUpBackToTopButton();
setUpFooter();
setUpContacts();



new AboutSectionClass('about');