import { createDebugLogger } from "../../utilities/debugger";
const debug = false;
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
    function getAttribute(el, attrName, defaultValue) {
        const attrValue = el.getAttribute(attrName);

        return attrValue !== null
            ? isNaN(attrValue)
                ? attrValue
                : parseFloat(attrValue)
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
            ease: getAttribute(el, "aos-ease"),
            delay: getAttribute(el, "aos-delay", 0.3),
            stagger: getAttribute(el, "aos-stagger", 0.2),
            once: el.hasAttribute("aos-once"),
            scrub: el.hasAttribute("aos-scrub"),
            splitType: getAttribute(el, "aos-split-type", "words"),
            splitStagger: getAttribute(el, "aos-split-stagger", 0.05),
            splitFrom: getAttribute(el, "aos-split-from"),
        };
    }

    /**
     * Animates a set of elements according to specified animation settings.
     * This function handles the actual animation logic, applying GSAP animations based on the provided settings.
     * @param {Array<HTMLElement>} elements - Array of elements to animate.
     * @param {Object} origin - Initial animation state.
     * @param {Object} target - Final animation state.
     * @param {Object} settings - Animation settings including duration, delay, etc.
     * @param {string} animation - The animation to apply.
     */
    function setAnimation(elements, origin, target, settings, animation) {
        elements.forEach((el, index) => {
            if (animation.includes("split")) {
                const split = new SplitText(el, {
                    type: settings.splitType,
                });
                gsap.set(split[settings.splitType], origin);
                el = split[settings.splitType];
            } else {
                gsap.set(el, origin);
            }

            gsap.to(el, {
                ...target,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay + index * settings.stagger,
                stagger: animation.includes("split")
                    ? { each: settings.splitStagger, from: settings.splitFrom }
                    : undefined,
                scrollTrigger: {
                    trigger: el,
                    start: settings.start,
                    end: settings.end,
                    toggleActions: settings.once
                        ? "play none none none"
                        : "play none none reverse",
                    scrub: settings.scrub,
                    once: settings.once,
                    markers: debug,
                    // id: el.tagName,
                },
            });
        });
    }

    /**
     * Main function to initialize animations on all elements with the 'aos' attribute.
     */
    function gsapAos(el) {
        const animation = getAttribute(el, "aos");

        if (!gsapAnimations[animation]) {
            consoleLog(`Invalid animation %c${animation}`, "error");
            return;
        }

        let { origin, target } = gsapAnimations[animation];
        if (el.hasAttribute("aos-reverse")) [origin, target] = [target, origin];

        const settings = setAnimationSettings(el);

        if (el.hasAttribute("aos-parent")) {
            const children = el.querySelectorAll("[aos-child]");
            setAnimation(children, origin, target, settings, animation);
        } else {
            setAnimation([el], origin, target, settings, animation);
        }
    }

    const animatedElements = document.querySelectorAll("[aos]");
    consoleLog(
        `%cTotal AOS triggers found: ${animatedElements.length}`,
        "info"
    );
    animatedElements.forEach(gsapAos);
}
