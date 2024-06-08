import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function initGsap() {
    gsap.defaults({
        ease: "power2.out",
    });

    ScrollSmoother.create({
        effects: !ScrollTrigger.isTouch,
        smooth: 1.2,
    });

    ScrollTrigger.normalizeScroll(!ScrollTrigger.isTouch);
}
