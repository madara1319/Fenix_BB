import "../scss/main.scss";
import "../js/burger-menu.js";
import "../js/sticky-menu.js";
import "../js/offer--slider";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide').mount({ Controls, Breakpoints });


// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
