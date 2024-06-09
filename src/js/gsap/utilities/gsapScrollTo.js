import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function gsapScrollTo(
    target,
    smooth = true,
    position = `top ${gsap.getProperty(":root", "--app-header-height")}`
) {
    const smoother = ScrollSmoother.get();

    if (
        typeof target === "number" ||
        typeof target === "string" ||
        target instanceof Element
    ) {
        smoother.scrollTo(target, smooth, position);
    } else {
        console.warn("Invalid target for scrollTo: ", target);
    }
}
