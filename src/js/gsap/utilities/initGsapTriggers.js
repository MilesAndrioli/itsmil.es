import { ScrollTrigger } from "gsap/ScrollTrigger";

import initGsapAos from "../triggers/gsapAos";
import initGsapRevealer from "../triggers/gsapRevealer";

export default function initGsapTriggers() {
    if (MNK) {
        initGsapAos();
        initGsapRevealer();
    }
}
