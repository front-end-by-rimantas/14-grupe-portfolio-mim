"use strict"

import HeaderSection from'./layout/header.js';
// import setUpSideMenu from './layout/sidemenu.js';
import setUpPortfolio from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import renderExperience from './layout/experience.js';
import setUpServices from'./layout/services.js';
import setUpBlog from'./layout/blog.js';
import setUpBackToTopButton from'./layout/backtotopbtn.js';
import setUpTestimonials from'./layout/testimonials.js';
import setUpFooter from'./layout/footer.js';
import setUpContacts from'./layout/contacts.js';

new HeaderSection( 'main_header' );

// setUpHeader();
// setUpSideMenu();
renderExperience(exp);
setUpPortfolio();
setUpServices();
setUpTestimonials();
setUpBlog();
setUpBackToTopButton();
setUpFooter();
setUpContacts();



new AboutSectionClass( 'about' );