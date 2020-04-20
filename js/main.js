"use strict"

import sidemenu from './layout/sidemenu.js';
import filterGallery from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import { headerScroll, fixedHeader } from'./layout/header.js';
import renderServices from'./layout/services.js';
import scrollFunction from'./layout/backtotopbtn.js';
import carouselSlide from'./layout/testimonials.js';

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

headerScroll();
fixedHeader();

new AboutSectionClass('about');