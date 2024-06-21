import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);

export default function initGsap() {
    gsap.defaults({
        ease: CustomEase.create("cubic", "M0,0 C0.8,0.2, 0.2,0.8, 1,1"),
    });

    ScrollSmoother.create({
        effects: MNK,
        effectsPadding: 800,
        smooth: 1.2,
    });

    if (MNK) {
        ScrollTrigger.normalizeScroll({
            allowNestedScroll: true,
        });
    }
}
