"use strict"
import Header from'./layout/header.js';
//import setUpSideMenu from './layout/sidemenu.js';
import setUpPortfolio from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import renderExperience from './layout/experience.js';

import Introduction from'./layout/introduction.js';
import setUpServices from'./layout/services.js';
import setUpBlog from'./layout/blog.js';
import setUpBackToTopButton from'./layout/backtotopbtn.js';
import setUpTestimonials from'./layout/testimonials.js';
import setUpFooter from'./layout/footer.js';
import setUpContacts from'./layout/contacts.js';



//setUpHeader();

////setUpSideMenu();
renderExperience(exp);
setUpPortfolio();
setUpServices();
setUpTestimonials();
setUpBlog();
setUpBackToTopButton();
setUpFooter();
setUpContacts();

new Header ('#main_header')
new AboutSectionClass('about');
new Introduction('intro')
