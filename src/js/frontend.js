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

// Utilities
import getDimensions from "./utilities/getDimensions";
import initMouseFollower from "./utilities/initMouseFollower";

// GSAP
import initGsap from "./gsap/initGsap";
import initGsapTriggers from "./gsap/utilities/initGsapTriggers";
import initGsapLenis from "./gsap/utilities/initGsapLenis";
// import gsapScrollTo from "./gsap/utilities/gsapScrollTo";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
document.addEventListener(
    "DOMContentLoaded",
    () => {
        document.body.classList.add("PAGE-IS--LOADING");

        getDimensions("#app-header", "height");
        initGsapLenis();
    },
    false
);

// WINDOW Ready
window.addEventListener(
    "load",
    () => {
        document.body.classList.remove("PAGE-IS--LOADING");
        document.body.classList.add("PAGE-IS--LOADED");

        initGsap();
        initGsapTriggers();

        if (MNK) initMouseFollower();

        // Scroll to anchor if there is one
        // const hash = window.location.hash;
        // if (hash) gsapScrollTo(hash);
    },
    false
);
