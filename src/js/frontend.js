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
import "../css/frontend.css";

// GSAP
import initGsap from "./gsap/initGsap";
import initGsapTriggers from "./gsap/utilities/initGsapTriggers";
// import gsapScrollTo from "./gsap/utilities/gsapScrollTo";

// Utilities
import getDimensions from "./utilities/getDimensions";
import initMouseFollower from "./utilities/initMouseFollower";

/* +-----------------------------------------+
    |           EVENTS AREA             		 |
    +-----------------------------------------+ */

// DOC Ready
document.addEventListener(
    "DOMContentLoaded",
    () => {
        document.body.classList.add("PAGE-IS--LOADING");
        getDimensions("#app-header", "height");

        initGsap();
        initGsapTriggers();
    },
    false
);

// WINDOW Ready
window.addEventListener(
    "load",
    () => {
        document.body.classList.remove("PAGE-IS--LOADING");
        document.body.classList.add("PAGE-IS--LOADED");

        if (MNK) initMouseFollower();
    },
    false
);
