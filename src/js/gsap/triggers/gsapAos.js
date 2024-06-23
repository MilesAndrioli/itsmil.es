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
     * Fetches attribute values from a DOM element with a default if not set.
     * This function helps in extracting and converting attribute values needed for animations.
     * @param {HTMLElement} el - The element to fetch attributes from.
     * @param {string} attrName - The attribute name to fetch.
     * @param {*} [defaultValue] - The default value if the attribute is not set.
     * @returns {*} The attribute value or the default value, correctly parsed.
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
     * Sets up default and custom animation settings based on element attributes.
     * This function centralizes the setup for all animation related settings.
     * @param {HTMLElement} el - The element for which to set up animation settings.
     * @returns {Object} A settings object with all necessary animation parameters.
     */
    function setAnimationSettings(el) {
        const isAfter = el.hasAttribute("aos-after");
        return {
            start: getAttribute(
                el,
                "aos-start",
                isAfter ? "bottom center" : "top bottom"
            ),
            end: getAttribute(
                el,
                "aos-end",
                isAfter ? `bottom top+=${APP_HEADER_HEIGHT}` : "center center"
            ),
            duration: getAttribute(el, "aos-duration", 1),
            delay: getAttribute(el, "aos-delay", 0.2),
            stagger: getAttribute(el, "aos-stagger", 0.05),
            repeat: el.hasAttribute("aos-repeat"),
            scrub: el.hasAttribute("aos-scrub"),
            splitType: getAttribute(el, "split-type", "words"),
            splitStagger: getAttribute(el, "split-stagger", 0.05),
            splitFrom: getAttribute(el, "split-from", "start"),
        };
    }

    /**
     * Animates a set of elements according to specified animation settings.
     * This function handles the actual animation logic, applying GSAP animations based on the provided settings.
     * @param {Array<HTMLElement>} elements - Array of elements to animate.
     * @param {Object} origin - Initial animation state.
     * @param {Object} target - Final animation state.
     * @param {Object} settings - Animation settings including duration, delay, etc.
     * @param {string} animationType - The type of animation to apply.
     */
    function setAnimation(elements, origin, target, settings, animationType) {
        elements.forEach((el, index) => {
            let animatedElement = el;

            if (animationType.includes("split")) {
                const split = new SplitText(el, {
                    type: settings.splitType,
                });
                gsap.set(split[settings.splitType], origin);
                animatedElement = split[settings.splitType];
            } else {
                gsap.set(el, origin);
            }

            gsap.to(animatedElement, {
                ...target,
                delay: settings.delay + index * settings.stagger,
                duration: settings.duration,
                stagger: animationType.includes("split")
                    ? { each: settings.splitStagger, from: settings.splitFrom }
                    : undefined,
                scrollTrigger: {
                    trigger: el,
                    start: settings.start,
                    end: settings.end,
                    toggleActions: settings.repeat
                        ? "play none none reverse"
                        : "play none none none",
                    markers: debug,
                    scrub: settings.scrub,
                    once: !(settings.scrub || settings.repeat),
                },
            });
        });
    }

    /**
     * Main function to initialize animations on all elements with the 'aos' attribute.
     */
    function gsapAos(el) {
        const animationType = getAttribute(el, "aos");

        if (!gsapAnimations[animationType]) {
            consoleLog(`Invalid animation type: %c${animationType}`, "error");
            return;
        }

        let { origin, target } = gsapAnimations[animationType];
        if (el.hasAttribute("aos-reverse")) [origin, target] = [target, origin];

        const settings = setAnimationSettings(el);

        if (el.hasAttribute("aos-parent")) {
            const children = el.querySelectorAll("[aos-child]");
            setAnimation(children, origin, target, settings, animationType);
        } else {
            setAnimation([el], origin, target, settings, animationType);
        }
    }

    const animatedElements = document.querySelectorAll("[aos]");
    consoleLog(
        `%cTotal AOS triggers found: ${animatedElements.length}`,
        "info"
    );
    animatedElements.forEach(gsapAos);
}
