import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function initGsapEffects() {
    const smoother = ScrollSmoother.get();

    smoother.effects("[data-speed], [data-lag]", {
        effectsPadding: 600,
    });
}
