export default {
    split: {
        origin: { opacity: 0 },
        target: { opacity: 1 },
    },
    "split-up": {
        origin: { opacity: 0, y: 25 },
        target: { opacity: 1, y: 0 },
    },
    "split-down": {
        origin: { opacity: 0, y: -25 },
        target: { opacity: 1, y: 0 },
    },
    "split-left": {
        origin: { opacity: 0, x: 25 },
        target: { opacity: 1, x: 0 },
    },
    "split-right": {
        origin: { opacity: 0, x: -25 },
        target: { opacity: 1, x: 0 },
    },
    "split-up-chromatic": {
        origin: {
            opacity: 0,
            y: 25,
            textShadow: `blue -30px 30px, turquoise -15px 15px, yellow 15px -15px, red 30px -30px`,
        },
        target: {
            opacity: 1,
            y: 0,
            textShadow: `#FFF0 0px 0px, #FFF0 0px 0px, #FFF0 0px 0px, #FFF0 0px 0px`,
        },
    },
    "split-up-clip-up": {
        origin: {
            opacity: 0,
            yPercent: 100,
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        target: {
            opacity: 1,
            yPercent: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
    },
    "split-up-clip-down": {
        origin: {
            opacity: 0,
            yPercent: 100,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        target: {
            opacity: 1,
            yPercent: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
    },
};
