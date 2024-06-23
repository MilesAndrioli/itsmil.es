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
            stagger: getAttribute(el, "aos-stagger", 0.1),
            repeat: el.hasAttribute("aos-repeat"),
            scrub: el.hasAttribute("aos-scrub"),
            splitType: getAttribute(el, "split-type", "words"),
            splitStagger: getAttribute(el, "split-stagger", 0.05),
            splitFrom: getAttribute(el, "split-from", "start"),
        };
    }

    function setAnimation(elements, origin, target, settings, animationType) {
        elements.forEach((element, index) => {
            let animatedElement = element;

            if (animationType.includes("split")) {
                const split = new SplitText(element, {
                    type: settings.splitType,
                });
                gsap.set(split[settings.splitType], origin);
                animatedElement = split[settings.splitType];
            } else {
                gsap.set(element, origin);
            }

            gsap.to(animatedElement, {
                ...target,
                delay: settings.delay + index * settings.stagger, // Staggered delay for child elements
                duration: settings.duration,
                stagger: animationType.includes("split")
                    ? { each: settings.splitStagger, from: settings.splitFrom }
                    : undefined,
                scrollTrigger: {
                    trigger: element,
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

    function gsapAos(el) {
        const animationType = getAttribute(el, "aos");

        if (!gsapAnimations[animationType]) {
            consoleLog(`Invalid animation type: %c${animationType}`, "error");
            return;
        }

        let { origin, target } = gsapAnimations[animationType];
        if (el.hasAttribute("aos-reverse")) [origin, target] = [target, origin];

        const settings = setAnimationSettings(el);

        if (el.hasAttribute("aos-group-parent")) {
            const children = el.querySelectorAll("[aos-group-child]");
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
