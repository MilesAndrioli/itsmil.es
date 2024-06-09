import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Scrolls to the specified target using GSAP's ScrollSmoother.
 * @see https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()
 */
export default function gsapScrollTo(
    target,
    smooth = true,
    position = `top ${gsap.getProperty(":root", "--app-header-height")}`
) {
    const smoother = ScrollSmoother.get();
    smoother.scrollTo(target, smooth, position);
}
