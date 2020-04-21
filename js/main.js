"use strict"

// import { contacts, navigation } from './data.js'

import sidemenu from './layout/sidemenu.js';
import filterGallery from './layout/portfolio.js';
import setUpHeader from'./layout/header.js';
import AboutSectionClass from'./layout/about.js';
import setUpContacts from'./layout/contacts.js';
import renderServices from'./layout/services.js';
import scrollFunction from'./layout/backtotopbtn.js';
import carouselSlide from'./layout/testimonials.js';
import renderFooter from'./layout/footer.js';

setUpHeader();

new AboutSectionClass('about');

setUpContacts();