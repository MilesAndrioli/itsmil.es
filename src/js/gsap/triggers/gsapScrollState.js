const debug = false;

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initGsapScrollState() {
    const body = document.querySelector("#app-body");

    // Detect Scroll Milestones
    // ScrollTrigger.create({
    //     trigger: body,
    //     start: `${innerHeight / 1.333333333333333 + APP_HEADER_HEIGHT} top`,
    //     toggleClass: "HAS-REACHED--STEP-0",
    //     markers: debug,
    // });

    // ScrollTrigger.create({
    //     trigger: body,
    //     start: `${innerHeight} top+=${APP_HEADER_HEIGHT}`,
    //     toggleClass: "HAS-REACHED--STEP-2",
    //     markers: debug,
    // });

    ScrollTrigger.create({
        trigger: "#app-main > section:first-of-type",
        endTrigger: body,
        start: "bottom top",
        toggleClass: {
            targets: body,
            className: "HAS-REACHED--STEP-1",
        },
        markers: true,
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
            body.classList.toggle("IS-SCROLLING--DOWN", self.direction === 1);
            body.classList.toggle("IS-SCROLLING--UP", self.direction === -1);
        },
        markers: debug,
    });

    // Detect Scroll Progress
    ScrollTrigger.create({
        onUpdate: (self) => {
            const scrollProgress = self.progress.toFixed(2);
            document
                .querySelector("html")
                .style.setProperty("--SCROLL_PROGRESS", scrollProgress);
            if (debug) console.log(scrollProgress);
        },
        markers: debug,
    });
}
