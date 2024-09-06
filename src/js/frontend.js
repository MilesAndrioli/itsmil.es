console.log(`
    _   _      _ _         _____ _
    | | | | ___| | | ___   |_   _| |__   ___ _ __ ___
    | |_| |/ _ \\ | |/ _ \\    | | | '_ \\ / _ \\ '__/ _ \\
    |  _  |  __/ | | (_) |   | | | | | |  __/ | |  __/
    |_| |_|\\___|_|_|\\___/    |_| |_| |_|\\___|_|  \\___|
`);

/* +-----------------------------------------+
|           GLOBALS AREA             		 |
+-----------------------------------------+ */

import { ScrollTrigger } from "gsap/ScrollTrigger";

window.DEBUG = true;
window.MNK = !ScrollTrigger.isTouch;
window.TOUCH = !!ScrollTrigger.isTouch;

/* +-----------------------------------------+
|           IMPORTS AREA             		 |
+-----------------------------------------+ */

// CSS
import "../scss/bootstrap/bootstrap.scss";
import "../scss/frontend.scss";

// GSAP
import initGsap from "./gsap/initGsap";
import initGsapTriggers from "./gsap/utilities/initGsapTriggers";

// Utilities
import getDimensions from "./utilities/getDimensions";
import exitLoader from "./utilities/exitLoader";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
function documentReady() {
    getDimensions("#app-header", "height");

    initGsap();
    initGsapTriggers();
}
document.addEventListener("DOMContentLoaded", documentReady, false);

// WINDOW Load
function windowLoad() {
    exitLoader();
}
window.addEventListener("load", windowLoad, false);
