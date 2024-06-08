const context = require.context(".", false, /\.js$/);

const barbaAnimations = context
    .keys()
    .filter((file) => file !== "./animationsIndex.js")
    .reduce((acc, file) => {
        return { ...acc, ...context(file).default };
    }, {});

export default barbaAnimations;
