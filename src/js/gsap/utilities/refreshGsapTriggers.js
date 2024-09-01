import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function refreshGsapTriggers() {
    ScrollTrigger.refresh();

    if (DEBUG) {
        console.log(`Triggers have been refreshed.`);
    }
}
