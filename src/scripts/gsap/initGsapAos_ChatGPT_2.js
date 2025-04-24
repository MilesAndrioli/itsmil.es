import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import gsapAnimations from "./animations/index";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function initGsapAos() {
    // Convertir milisegundos a segundos
    const msToSec = (ms) => parseFloat(ms) / 1000;

    // Obtener configuraciones del elemento
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

    // Crear trigger de ScrollTrigger
    function createScrollTrigger(elements, trigger, settings) {
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

    function animateElement(el) {
        const settings = getSettings(el);
        const isGroup = "aosGroup" in el.dataset;
        const groupAnim = el.dataset.aosGroup;

        // Verificar si el elemento tiene animaciones asociadas
        if (!isGroup && !gsapAnimations[el.dataset.aos]) return;

        const elements = isGroup ? getElementsInGroup(el) : [el];

        const timeline = gsap.timeline({
            scrollTrigger: createScrollTrigger(elements, el, settings),
        });

        elements.forEach((child, index) => {
            const animKey = getAnimKey(child, groupAnim);
            if (!gsapAnimations[animKey]) return;

            const { origin, destination } = gsapAnimations[animKey];
            const finalOrigin = child.dataset.aosAfter ? destination : origin;
            const finalDestination = child.dataset.aosAfter
                ? origin
                : destination;

            if (animKey.includes("split")) {
                animateSplitText(
                    child,
                    finalOrigin,
                    finalDestination,
                    settings,
                    timeline,
                    index
                );
            } else {
                animateSimple(
                    child,
                    finalOrigin,
                    finalDestination,
                    settings,
                    timeline,
                    index
                );
            }
        });
    }

    // Obtener los elementos dentro de un grupo
    function getElementsInGroup(el) {
        return el.querySelectorAll("[data-aos-child]").length
            ? Array.from(el.querySelectorAll("[data-aos-child]"))
            : Array.from(el.children);
    }

    // Obtener la clave de animación de un elemento
    function getAnimKey(child, groupAnim) {
        return child.dataset.aosChild || groupAnim || child.dataset.aos;
    }

    function animateSplitText(
        child,
        origin,
        destination,
        settings,
        timeline,
        index
    ) {
        gsap.set(child, { willChange: "transform" });

        const splitGap = child.dataset.aosSplitGap
            ? msToSec(child.dataset.aosSplitGap)
            : settings.splitGap;
        const splitFrom = child.dataset.aosSplitFrom || settings.splitFrom;
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
    }

    function animateSimple(
        child,
        origin,
        destination,
        settings,
        timeline,
        index
    ) {
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

    document
        .querySelectorAll("[data-aos], [data-aos-group]")
        .forEach(animateElement);
}
