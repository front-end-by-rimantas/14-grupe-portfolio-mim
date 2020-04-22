"use strict"

import setUpSideMenu from './layout/sidemenu.js';
import setUpPortfolio from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import setUpHeader from'./layout/header.js';
import setUpServices from'./layout/services.js';
import setUpBackToTopButton from'./layout/backtotopbtn.js';
import setUpTestimonials from'./layout/testimonials.js';
import setUpFooter from'./layout/footer.js';
import setUpContacts from'./layout/contacts.js';


/*
import from './reset.js';
import from'./main.js';
import from'./main.js';
import from'./header.js';
import from'./introduction.js';
import from'./about.js';
import from'./experience.js';
import from'./portfolio.js';
import from'./services.js';
import from'./testimonials.js';
import from'./blog.js';
import from'./contacts.js';
import from'./site-navigation.js';
import from'./footer.js';*/


setUpHeader();
setUpSideMenu();
setUpPortfolio();
setUpServices();
setUpTestimonials();
setUpBackToTopButton();
setUpFooter();
setUpContacts();



new AboutSectionClass('about');