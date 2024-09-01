import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const debug = false;

export default function initGsapCurtain() {
    function gsapCurtain(curtain) {
        const target = curtain.querySelector("[curtain-target]");
        if (!target) return;

        gsap.set(target, { yPercent: -100 });
        const reveal = gsap.timeline({ paused: true });

        reveal.to(target, {
            yPercent: 0,
            ease: "none",
        });

        ScrollTrigger.create({
            markers: debug,

            animation: reveal,
            scrub: true,

            trigger: curtain,
            start: "top bottom",
            end: () => `+=${curtain.offsetHeight}`,
        });
    }

    gsap.utils.toArray("[curtain]").forEach((curtain) => gsapCurtain(curtain));
}
