"use strict"

import sidemenu from './layout/sidemenu.js';
import filterGallery from './layout/portfolio.js';
import AboutSectionClass from'./layout/about.js';
import { headerScroll, fixedHeader } from'./layout/header.js';
<<<<<<< HEAD
// experience import
import renderExperience from './layout/experience.js';
=======
import renderServices from'./layout/services.js';
>>>>>>> a003753045404b7b084d12136b3f74ccbc2f87e6

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

// // experience
new renderExperience();