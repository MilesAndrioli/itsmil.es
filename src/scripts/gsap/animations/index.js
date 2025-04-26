const gsapAnimations = {};

const modules = import.meta.glob("./!(index).js", { eager: true });

Object.values(modules).forEach((module) => {
    Object.assign(gsapAnimations, module.default);
});

export default gsapAnimations;
