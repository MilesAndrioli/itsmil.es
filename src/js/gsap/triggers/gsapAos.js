import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

import gsapAnimations from "../animations/animationsIndex";

export default function initGsapAos() {
    // Utility Functions
    const msToSec = (ms) => parseFloat(ms) / 1000;
    const classHandler = (elements, action, className) => {
        elements.forEach((el) => el.classList[action](className));
    };

    function extractAnimationSettings(el) {
        const happensAfter = "aosAfter" in el.dataset;

        return {
            start:
                el.dataset.aosStart ||
                (happensAfter ? "center top" : "top bottom"),
            end:
                el.dataset.aosEnd ||
                (happensAfter ? "bottom top" : "top center"),

            duration: msToSec(el.dataset.aosDuration || 1000),
            delay: msToSec(el.dataset.aosDelay || 0),
            stagger: {
                // ease: CustomEase.create("cubic", "M0,0 C0.77,0, 0.18,1, 1,1"),
                // each || amount
                each: msToSec(
                    el.dataset.aosStaggerDuration ||
                        (el.dataset.aos?.includes("split") ? 20 : 200)
                ),
                from: el.dataset.aosStaggerFrom,
            },

            ease: el.dataset.aosEase,
            once: "aosOnce" in el.dataset,
            scrub: "aosScrub" in el.dataset,

            debug: "aosDebug" in el.dataset,
            debugId: el.dataset.aosDebug,

            splitType:
                TOUCH && el.dataset.aosSplit === "chars"
                    ? "words"
                    : el.dataset.aosSplit || "words",
        };
    }

    const createScrollTrigger = (
        animatedElements,
        triggerElement,
        settings
    ) => ({
        id: settings.debugId || "aos",
        trigger: triggerElement,
        start: settings.start,
        end: settings.end,
        toggleActions: settings.once
            ? "play none none none"
            : "play none none reverse",
        scrub: settings.scrub,
        once: settings.once,
        markers: settings.debug,
        onEnter: () => classHandler(animatedElements, "add", "aos-engaged"),
        onLeave: () => classHandler(animatedElements, "add", "aos-finished"),
        onEnterBack: () =>
            classHandler(animatedElements, "remove", "aos-finished"),
        onLeaveBack: () =>
            classHandler(animatedElements, "remove", "aos-engaged"),
        toggleClass: { targets: animatedElements, className: "aos-active" },
    });

    const getAnimatedElements = (el) => {
        if (!("aosGroup" in el.dataset)) {
            return [el];
        }

        const implicitChildren = Array.from(el.children);
        const explicitChildren = Array.from(
            el.querySelectorAll("[data-aos-child]")
        );

        return explicitChildren.length > 0
            ? explicitChildren
            : implicitChildren;
    };

    const executeAnimation = ({
        elements,
        triggerElement,
        origin,
        destination,
        settings,
        animation,
    }) => {
        if (animation.includes("split")) {
            gsap.set(elements, { willChange: "transform" });
        }

        const animatedElements = animation.includes("split")
            ? (() => {
                  const split = new SplitText(elements, {
                      type: settings.splitType,
                  });
                  gsap.set(split[settings.splitType], origin);
                  return split[settings.splitType];
              })()
            : (() => {
                  gsap.set(elements, origin);
                  return elements;
              })();

        gsap.to(animatedElements, {
            ...destination,
            duration: settings.duration,
            ease: settings.ease,
            delay: settings.delay,
            stagger: settings.stagger,
            scrollTrigger: createScrollTrigger(
                animatedElements,
                triggerElement,
                settings
            ),
        });
    };

    const gsapAos = (el) => {
        const animation = TOUCH ? "fade" : el.dataset.aos;
        if (!gsapAnimations[animation]) return;

        let { origin, destination } = gsapAnimations[animation];
        if ("aosAfter" in el.dataset) {
            [origin, destination] = [destination, origin];
        }

        const settings = extractAnimationSettings(el);
        const elements = getAnimatedElements(el);

        executeAnimation({
            elements,
            triggerElement: el,
            origin,
            destination,
            settings,
            animation,
        });

        console.log(`gsapAos scrollTriggers: ${ScrollTrigger.getAll().length}`);
    };

    document.querySelectorAll("[data-aos]").forEach(gsapAos);
}
