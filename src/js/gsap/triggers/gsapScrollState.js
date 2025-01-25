const debug = false;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initGsapScrollState() {
    const body = document.body;

    // Detect Scroll Milestones
    ScrollTrigger.create({
        trigger: "#app-main > section:first-child",
        start: "top top",
        onEnter: () => body.classList.add("HAS-REACHED--STEP-1"),
        onLeaveBack: () => body.classList.remove("HAS-REACHED--STEP-1"),
        markers: debug,
    });

    ScrollTrigger.create({
        trigger: body,
        start: `${innerHeight} top`,
        toggleClass: "HAS-REACHED--STEP-2",
        markers: debug,
    });

    ScrollTrigger.create({
        trigger: "#app-footer",
        toggleClass: {
            targets: body,
            className: "HAS-REACHED--FOOTER",
        },
        markers: debug,
    });

    // Detect Scroll Direction
    ScrollTrigger.create({
        onUpdate: (self) => {
            body.classList.toggle("SCROLLING--DOWN", self.direction === 1);
            body.classList.toggle("SCROLLING--UP", self.direction === -1);
        },
        markers: debug,
    });

    // Detect Scroll Progress
    // ScrollTrigger.create({
    //     onUpdate: (self) => {
    //         const scrollProgress = Math.round(self.progress * 100);
    //         document
    //             .querySelector("html")
    //             .style.setProperty("--SCROLL_PROGRESS", scrollProgress);
    //         if (debug) console.log(scrollProgress);
    //     },
    //     markers: debug,
    // });
}
