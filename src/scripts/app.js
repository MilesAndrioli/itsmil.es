console.log(`
    \ _   _      _ _         _____ _
    | | | | ___| | | ___   |_   _| |__   ___ _ __ ___
    | |_| |/ _ \\ | |/ _ \\    | | | '_ \\ / _ \\ '__/ _ \\
    |  _  |  __/ | | (_) |   | | | | | |  __/ | |  __/
    |_| |_|\\___|_|_|\\___/    |_| |_| |_|\\___|_|  \\___|
    `);

/* +-----------------------------------------+
|           GLOBALS AREA             		 |
+-----------------------------------------+ */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.MNK = !ScrollTrigger.isTouch;
window.TOUCH = !!ScrollTrigger.isTouch;

/* +-----------------------------------------+
|           IMPORTS AREA             		 |
+-----------------------------------------+ */

// Utilities
import throttle from "lodash.throttle";
import getDimensions from "./utilities/getDimensions";
import getStickyElements from "./utilities/getStickyElements";

// GSAP
import initGsapConfig from "./gsap/initGsapConfig";

import initGsapScrollState from "./gsap/initGsapScrollState";
import initGsapMouseFollower from "./gsap/initGsapMouseFollower";

/* +-----------------------------------------+
|           EVENTS AREA             		 |
+-----------------------------------------+ */

// DOC Ready
// document.addEventListener("DOMContentLoaded", () => {}, { once: true });

// WINDOW Ready
window.addEventListener(
    "load",
    () => {
        initGsapConfig();
        initGsapScrollState();
        if (MNK) initGsapMouseFollower();
        getDimensions("#app-header", "height");
        getStickyElements();
    },
    { once: true }
);

// WINDOW Resize
window.addEventListener(
    "resize",
    throttle(
        () => {
            getDimensions("#app-header", "height");
        },
        300,
        { leading: true, trailing: true }
    ),
    { once: false }
);
