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

// Barba
import barba from "@barba/core";
import initBarba from "./barba/initBarba";

// GSAP
import initGsap from "./gsap/initGsap";
import initGsapTriggers from "./gsap/utilities/initGsapTriggers";

// Cuberto Mouse Follower
import initMouseFollower from "./cuberto/initMouseFollower";

// GSAP x Barba Utilities
import killGsapTriggers from "./gsap/utilities/killGsapTriggers";
import initGsapEffects from "./gsap/utilities/initGsapEffects";
import gsapScrollTo from "./gsap/utilities/gsapScrollTo";

// Utilities
import getDimensions from "./utilities/getDimensions";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
document.addEventListener(
    "DOMContentLoaded",
    () => {
        document.body.classList.add("PAGE-IS--LOADING");
        getDimensions("#app-header", "height");

        initBarba();
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

// BARBA After Leave
barba.hooks.afterLeave(() => {
    killGsapTriggers();
});

// BARBA After
barba.hooks.after(() => {
    initGsapTriggers();
    initGsapEffects();
    gsapScrollTo(0, false);
});
