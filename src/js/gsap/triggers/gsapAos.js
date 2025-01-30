import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

import gsapAnimations from "../animations/animationsIndex";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

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
            staggerGap: el.dataset.aosStaggerGap,
            // staggerDuration: el.dataset.aosStaggerDuration,
            // staggerEase: CustomEase.create("cubic", "M0,0 C0.77,0, 0.18,1, 1,1"),

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
            scrub: settings.scrub,
            once: settings.once,
            markers: settings.debug,
            onEnter: () => trigger.classList.add("aos-engaged"),
            onLeave: () => trigger.classList.add("aos-finished"),
            onEnterBack: () => trigger.classList.remove("aos-finished"),
            onLeaveBack: () => trigger.classList.remove("aos-engaged"),
            toggleClass: { targets: trigger, className: "aos-active" },
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
            const splitText = split[settings.splitType];
            gsap.set(splitText, origin);

            gsap.to(splitText, {
                ...destination,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay,
                stagger: {
                    from: settings.staggerFrom,
                    each: msToSec(settings.staggerGap || 20),
                    // amount: msToSec(settings.staggerDuration || 1000),
                    ease: settings.staggerEase,
                },
                scrollTrigger: createTrigger(splitText, el, settings),
            });
        } else {
            gsap.set(elements, origin);
            gsap.to(elements, {
                ...destination,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay,
                stagger: {
                    from: settings.staggerFrom,
                    each: msToSec(settings.staggerGap || 200),
                    // amount: msToSec(settings.staggerDuration || 1000),
                    ease: settings.staggerEase,
                },
                scrollTrigger: createTrigger(elements, el, settings),
            });
        }
    }

    document.querySelectorAll("[data-aos]").forEach(animate);
}
