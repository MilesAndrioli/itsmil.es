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
            stagger: {
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
            splitType:
                TOUCH && el.dataset.aosSplit === "chars"
                    ? "words"
                    : el.dataset.aosSplit || "words",
        };
    }

    function createTrigger(elements, trigger, settings) {
        const classHandler = (elements, action, className) => {
            elements.forEach((el) => el.classList[action](className));
        };

        return {
            trigger,
            start: settings.start,
            end: settings.end,
            toggleActions: settings.once
                ? "play none none none"
                : "play none none reverse",
            scrub: settings.scrub,
            once: settings.once,
            markers: settings.debug,
            onEnter: () => classHandler(elements, "add", "aos-engaged"),
            onLeave: () => classHandler(elements, "add", "aos-finished"),
            onEnterBack: () => classHandler(elements, "remove", "aos-finished"),
            onLeaveBack: () => classHandler(elements, "remove", "aos-engaged"),
            toggleClass: { targets: elements, className: "aos-active" },
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
            const split = new SplitText(elements, { type: settings.splitType });
            const splitElements = split[settings.splitType];
            gsap.set(splitElements, { willChange: "transform", ...origin });

            gsap.to(splitElements, {
                ...destination,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay,
                stagger: settings.stagger,
                scrollTrigger: createTrigger(splitElements, el, settings),
            });
        } else {
            gsap.set(elements, origin);
            gsap.to(elements, {
                ...destination,
                duration: settings.duration,
                ease: settings.ease,
                delay: settings.delay,
                stagger: settings.stagger,
                scrollTrigger: createTrigger(elements, el, settings),
            });
        }
    }

    document.querySelectorAll("[data-aos]").forEach(animate);
}
