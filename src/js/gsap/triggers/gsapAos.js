import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import gsapAnimations from "../animations/animationsIndex";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function initGsapAos() {
    const msToSec = (ms) => parseFloat(ms) / 1000;

    function getSettings(el) {
        const isAfter = "aosAfter" in el.dataset;

        return {
            start:
                el.dataset.aosStart || (isAfter ? "center top" : "top bottom"),
            end: el.dataset.aosEnd || (isAfter ? "bottom top" : "top center"),
            duration: msToSec(el.dataset.aosDuration || 1000),
            delay: msToSec(el.dataset.aosDelay || 0),
            ease: el.dataset.aosEase,
            once: "aosOnce" in el.dataset,
            scrub: "aosScrub" in el.dataset,
            debug: "aosDebug" in el.dataset,
            debugId: el.dataset.aosDebug,

            staggerFrom: el.dataset.aosStaggerFrom,
            staggerGap: msToSec(
                el.dataset.aosStaggerGap ||
                    (el.dataset.aos?.includes("split") ? 20 : 200)
            ),

            splitType:
                TOUCH && el.dataset.aosSplit === "chars"
                    ? "words"
                    : el.dataset.aosSplit || "words",
        };
    }

    function createTrigger(elements, trigger, settings) {
        return {
            trigger: trigger,
            start: settings.start,
            end: settings.end,
            toggleActions: settings.once
                ? "play none none none"
                : "play none none reverse",
            once: settings.once,
            scrub: settings.scrub,
            markers: settings.debug,
            id: settings.debugId,

            toggleClass: { targets: trigger, className: "aos-active" },
            onEnter: () => trigger.classList.add("aos-engaged"),
            onLeave: () => trigger.classList.add("aos-finished"),
            onEnterBack: () => trigger.classList.remove("aos-finished"),
            onLeaveBack: () => trigger.classList.remove("aos-engaged"),
        };
    }

    function animate(el) {
        const animation = TOUCH ? "fade" : el.dataset.aos;
        if (!gsapAnimations[animation]) return;

        let { origin, destination } = gsapAnimations[animation];
        if ("aosAfter" in el.dataset)
            [origin, destination] = [destination, origin];

        const settings = getSettings(el);
        const elements =
            "aosGroup" in el.dataset
                ? el.querySelectorAll("[data-aos-child]").length
                    ? Array.from(el.querySelectorAll("[data-aos-child]"))
                    : Array.from(el.children)
                : [el];

        if (animation.includes("split")) {
            gsap.set(el, { willChange: "transform" });

            const split = new SplitText(elements, { type: settings.splitType });
            const textElements = split[settings.splitType];

            gsap.set(textElements, origin);
            gsap.to(textElements, {
                ...destination,
                duration: settings.duration,
                delay: settings.delay,
                ease: settings.ease,
                stagger: {
                    from: settings.staggerFrom,
                    each: settings.staggerGap,
                },
                scrollTrigger: createTrigger(textElements, el, settings),
            });
        } else {
            gsap.set(elements, origin);
            gsap.to(elements, {
                ...destination,
                duration: settings.duration,
                delay: settings.delay,
                ease: settings.ease,
                stagger: {
                    from: settings.staggerFrom,
                    each: settings.staggerGap,
                },
                scrollTrigger: createTrigger(elements, el, settings),
            });
        }

        // const finalElements = animation.includes("split")
        //     ? new SplitText(elements, { type: settings.splitType })[
        //           settings.splitType
        //       ]
        //     : elements;

        // gsap.set(finalElements, origin);
        // gsap.to(finalElements, {
        //     ...destination,
        //     duration: settings.duration,
        //     delay: settings.delay,
        //     ease: settings.ease,
        //     stagger: {
        //         from: settings.staggerFrom,
        //         each: settings.staggerGap,
        //     },
        //     scrollTrigger: createTrigger(finalElements, el, settings),
        // });
    }

    document.querySelectorAll("[data-aos]").forEach(animate);
}
