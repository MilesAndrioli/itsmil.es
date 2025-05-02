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

            duration: msToSec(el.dataset.aosDuration || 600),
            delay: msToSec(el.dataset.aosDelay || 0),
            ease: el.dataset.aosEase,

            once: "aosOnce" in el.dataset,
            scrub: "aosScrub" in el.dataset,

            debug: "aosDebug" in el.dataset,
            debugId: el.dataset.aosDebug,

            staggerGap: msToSec(el.dataset.aosStaggerGap || 280),
            // staggerFrom: el.dataset.aosStaggerFrom,

            splitDuration: msToSec(
                el.dataset.aosStaggerGap || el.dataset.aosSplitDuration || 280
            ),
            splitGap: msToSec(el.dataset.aosSplitGap),
            splitFrom: el.dataset.aosSplitFrom,
            splitType: el.dataset.aosSplit || "words",
        };
    }

    // Crea un objeto de configuración para el ScrollTrigger
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
            toggleClass: { targets: elements, className: "aos-active" },
            onEnter: () =>
                elements.forEach((el) => el.classList.add("aos-engaged")),
            onLeave: () =>
                elements.forEach((el) => el.classList.add("aos-finished")),
            onEnterBack: () =>
                elements.forEach((el) => el.classList.remove("aos-finished")),
            onLeaveBack: () =>
                elements.forEach((el) => el.classList.remove("aos-engaged")),
        };
    }

    // Función principal para animar un elemento
    function animateElement(el) {
        const settings = getSettings(el);
        const isGroup = "aosGroup" in el.dataset;
        const groupAnimation = el.dataset.aosGroup;

        // Verifica si el elemento tiene animaciones asociadas
        if (!isGroup && !gsapAnimations[el.dataset.aos]) return;

        const elements = isGroup
            ? el.querySelectorAll("[data-aos-child]").length
                ? Array.from(el.querySelectorAll("[data-aos-child]"))
                : Array.from(el.children)
            : [el];

        const timeline = gsap.timeline({
            scrollTrigger: createScrollTrigger(elements, el, settings),
        });

        // Para cada elemento dentro de un grupo o individual, aplicar animación
        elements.forEach((child, index) => {
            const animationKey = getanimationKey(child, groupAnimation);
            if (!gsapAnimations[animationKey]) return;

            const { origin, destination } = gsapAnimations[animationKey];
            const finalOrigin = child.dataset.aosAfter ? destination : origin;
            const finalDestination = child.dataset.aosAfter
                ? origin
                : destination;

            // Si la animación es para texto dividido, llamar a la función de texto dividido
            if (animationKey.includes("split")) {
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

    // Obtiene la clave de animación (ya sea por grupo o por elemento individual)
    function getanimationKey(child, groupAnimation) {
        return child.dataset.aosChild || groupAnimation || child.dataset.aos;
    }

    // Animación para texto dividido
    function animateSplitText(
        child,
        origin,
        destination,
        settings,
        timeline,
        index
    ) {
        gsap.set(child, { willChange: "transform" });

        // Obtener la configuración de separación para el texto dividido
        // const splitDuration = child.dataset.aosSplitDuration
        //     ? msToSec(child.dataset.aosSplitDuration)
        //     : settings.splitDuration;

        // const splitGap = child.dataset.aosSplitGap
        //     ? msToSec(child.dataset.aosSplitGap)
        //     : settings.splitGap;

        const splitDuration = msToSec(
            child.dataset.aosSplitDuration || settings.splitDuration * 1000
        );

        const splitGap = msToSec(
            child.dataset.aosSplitGap || settings.splitGap * 1000
        );

        const splitFrom = child.dataset.aosSplitFrom || settings.splitFrom;

        const splitType =
            TOUCH && child.dataset.aosSplit === "chars"
                ? "words"
                : child.dataset.aosSplit || settings.splitType;

        // Crear el objeto SplitText para separar el texto
        const split = new SplitText(child, { type: splitType });
        const splitted = split[splitType];

        gsap.set(splitted, origin);

        timeline.to(
            splitted,
            {
                ...destination,
                duration: settings.duration,
                delay: settings.delay,
                ease: settings.ease,
                // repeat: -1,
                stagger: {
                    // repeat: -1,
                    from: splitFrom,
                    ...(child.dataset.aosSplitGap
                        ? { each: splitGap }
                        : { amount: splitDuration }),
                },
            },
            index * settings.staggerGap
        );
    }

    // Animación simple para elementos no divididos
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
                delay: settings.delay,
                ease: settings.ease,
            },
            index * settings.staggerGap
        );
    }

    // Iniciar animaciones para todos los elementos con atributos data-aos o data-aos-group
    document
        .querySelectorAll("[data-aos], [data-aos-group]")
        .forEach(animateElement);
}
