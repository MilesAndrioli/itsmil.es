import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollSmoother, CustomEase);

export default function initGsap() {
    gsap.defaults({
        ease: CustomEase.create("cubic", "M0,0 C0.77,0, 0.18,1, 1,1"),
    });

    gsap.config({
        force3D: true,
    });

    ScrollSmoother.create({
        effects: true,
        effectsPadding: 1000,
        smooth: 0,
    });
}
