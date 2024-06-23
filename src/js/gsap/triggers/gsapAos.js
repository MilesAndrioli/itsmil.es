import { createDebugLogger } from "../../utilities/debugging";
const debug = true;
const consoleLog = createDebugLogger(debug);

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import gsapAnimations from "../animations/animationsIndex";

export default function initGsapAos() {
    /**
     * Fetches attribute values with a default fallback.
     * @param {HTMLElement} el - The element to fetch attributes from.
     * @param {string} attrName - The attribute name to fetch.
     * @param {*} [defaultValue] - The default value if the attribute is not set.
     * @returns {*} The attribute value or the default value.
     */
    function getAttribute(el, attrName, defaultValue = null) {
        const value = el.getAttribute(attrName);
        return value !== null
            ? isNaN(value)
                ? value
                : parseFloat(value)
            : defaultValue;
    }

    /**
     * Animates a single HTML element based on data attributes.
     * @param {HTMLElement} el - The element to animate.
     */
    function gsapAos(el) {
        const animationType = getAttribute(el, "aos");

        if (!gsapAnimations[animationType]) {
            consoleLog(`Invalid animation type: %c${animationType}`, "error");
            return;
        }

        let animatedElement = el;
        let { origin, target } = gsapAnimations[animationType];
        if (el.hasAttribute("aos-reverse")) [origin, target] = [target, origin];

        const isAfter = el.hasAttribute("aos-after");
        const defaultStart = isAfter ? "bottom center" : "top bottom";
        const defaultEnd = isAfter
            ? `bottom top+=${APP_HEADER_HEIGHT}`
            : "center center";

        const duration = getAttribute(el, "aos-duration", 1);
        const delay = getAttribute(el, "aos-delay", 0.2);
        const start = getAttribute(el, "aos-start", defaultStart);
        const end = getAttribute(el, "aos-end", defaultEnd);
        const repeat = el.hasAttribute("aos-repeat");
        const scrub = el.hasAttribute("aos-scrub");

        let splitType = getAttribute(el, "split-type", "words");
        const splitStagger = getAttribute(el, "split-stagger", 0.05);
        const splitFrom = getAttribute(el, "split-from", "start");

        if (ScrollTrigger.isTouch && splitType === "chars") splitType = "words";

        if (animationType.includes("split")) {
            const split = new SplitText(el, { type: splitType });
            gsap.set(split[splitType], origin);
            animatedElement = split[splitType];
        } else if (el.hasAttribute("aos-group-parent")) {
            const children = el.querySelectorAll("[aos-group-child]");
            children.forEach((child, index) => {
                gsap.set(child, origin);
            });
        } else {
            gsap.set(el, origin);
        }

        if (el.hasAttribute("aos-group-parent")) {
            const children = el.querySelectorAll("[aos-group-child]");
            children.forEach((child, index) => {
                gsap.to(child, {
                    ...target,
                    delay: delay + index * 0.1, // Staggered delay
                    duration,
                    scrollTrigger: {
                        trigger: child,
                        start,
                        end,
                        toggleActions: repeat
                            ? "play none none reverse"
                            : "play none none none",
                        markers: debug,
                        scrub,
                        once: !(scrub || repeat),
                    },
                });
            });
        } else {
            gsap.to(animatedElement, {
                ...target,
                duration,
                delay,
                // ease: "elastic.inOut(1,0.3)",
                stagger: animationType.includes("split")
                    ? { each: splitStagger, from: splitFrom }
                    : undefined,
                scrollTrigger: {
                    trigger: el,
                    markers: debug,
                    start,
                    end,
                    toggleActions: repeat
                        ? "play none none reverse"
                        : "play none none none",
                    scrub,
                    once: !(scrub || repeat),
                },
            });
        }
    }

    /**
     * Initializes animations on elements with the 'aos' attribute using GSAP.
     */
    const animatedElements = document.querySelectorAll("[aos]");
    consoleLog(`%c${animatedElements.length}%c AOS triggers found`, "info");
    animatedElements.forEach(gsapAos);
}
