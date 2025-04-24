import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import gsapAnimations from "./animations/index";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function initGsapAos() {
    const msToSec = (ms) => parseFloat(ms) / 1000;

    function getSettings(el) {
        const isAfter = "aosAfter" in el.dataset;

        return {
            start:
                el.dataset.aosStart || (isAfter ? "center top" : "top bottom"),
            end: el.dataset.aosEnd || (isAfter ? "bottom top" : "top center"),
            duration: msToSec(el.dataset.aosDuration || 800),
            delay: msToSec(el.dataset.aosDelay || 0),
            ease: el.dataset.aosEase,
            once: "aosOnce" in el.dataset,
            scrub: "aosScrub" in el.dataset,
            debug: "aosDebug" in el.dataset,
            debugId: el.dataset.aosDebug,

            staggerGap: msToSec(el.dataset.aosStaggerGap || 240),
            // staggerFrom: el.dataset.aosStaggerFrom,

            splitGap: msToSec(el.dataset.aosSplitGap || 40),
            splitFrom: el.dataset.aosSplitFrom,
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
                : "play none none reset",
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
        const isGroup = "aosGroup" in el.dataset;
        const groupAnim = el.dataset.aosGroup;
        const settings = getSettings(el);

        if (!isGroup && !gsapAnimations[el.dataset.aos]) return;

        const elements = isGroup
            ? el.querySelectorAll("[data-aos-child]").length
                ? Array.from(el.querySelectorAll("[data-aos-child]"))
                : Array.from(el.children)
            : [el];

        const timeline = gsap.timeline({
            scrollTrigger: createTrigger(elements, el, settings),
        });

        elements.forEach((child, index) => {
            const customAnim = child.dataset.aosChild;
            const animKey = customAnim || groupAnim || child.dataset.aos;

            if (!gsapAnimations[animKey]) return;

            let { origin, destination } = gsapAnimations[animKey];
            if ("aosAfter" in child.dataset)
                [origin, destination] = [destination, origin];

            if (animKey.includes("split")) {
                gsap.set(child, { willChange: "transform" });

                const splitGap = child.dataset.aosSplitGap
                    ? msToSec(child.dataset.aosSplitGap)
                    : settings.splitGap;

                const splitFrom =
                    child.dataset.aosSplitFrom || settings.splitFrom;

                const splitType =
                    TOUCH && child.dataset.aosSplit === "chars"
                        ? "words"
                        : child.dataset.aosSplit || settings.splitType;

                const split = new SplitText(child, { type: splitType });
                const splitted = split[splitType];

                gsap.set(splitted, origin);

                timeline.to(
                    splitted,
                    {
                        ...destination,
                        duration: settings.duration,
                        ease: settings.ease,
                        stagger: {
                            each: splitGap,
                            from: splitFrom,
                        },
                    },
                    index * settings.staggerGap
                );
            } else {
                gsap.set(child, origin);

                timeline.to(
                    child,
                    {
                        ...destination,
                        duration: settings.duration,
                        ease: settings.ease,
                    },
                    index * settings.staggerGap
                );
            }
        });
    }

    document.querySelectorAll("[data-aos], [data-aos-group]").forEach(animate);
}
