import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function updateGsapTriggers() {
    ScrollTrigger.update();

    if (DEBUG) {
        console.log(`Triggers have been updated.`);
    }
}
