import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initGsapScrollState() {
    const body = document.body;

    // Detect Scroll Milestones
    ScrollTrigger.create({
        trigger: body,
        start: `${innerHeight / 1.333333333333333} top+=${APP_HEADER_HEIGHT}`,
        toggleClass: "HAS-REACHED--STEP-1",
        // markers: true,
    });

    ScrollTrigger.create({
        trigger: body,
        start: `${innerHeight} top+=${APP_HEADER_HEIGHT}`,
        toggleClass: "HAS-REACHED--STEP-2",
        // markers: true,
    });

    // Detect Scroll Direction
    ScrollTrigger.create({
        onUpdate: (self) => {
            body.classList.toggle("IS-SCROLLING--DOWN", self.direction === 1);
            body.classList.toggle("IS-SCROLLING--UP", self.direction === -1);
        },
        // markers: true,
    });

    // Detect Footer Visibility
    ScrollTrigger.create({
        trigger: "#app-footer",
        toggleClass: {
            targets: body,
            className: "HAS-REACHED--FOOTER",
        },
        // markers: true,
    });
}
