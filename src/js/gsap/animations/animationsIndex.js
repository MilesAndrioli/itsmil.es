/**
 * Dynamically imports all JavaScript modules in the current directory (excluding 'animationsIndex.js')
 * and combines their default exports into a single object.
 */

const context = require.context(".", false, /\.js$/);
const gsapAnimations = {};

context.keys().forEach((file) => {
    if (file !== "./animationsIndex.js") {
        try {
            Object.assign(gsapAnimations, context(file).default);
        } catch (error) {
            console.error(`Failed to load ${file}:`, error);
        }
    }
});

export default gsapAnimations;
