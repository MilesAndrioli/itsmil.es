import { createDebugLogger } from "./debugger";

const debug = true;
const consoleLog = createDebugLogger(debug);

/**
 * Converts hyphenated strings to UPPER_SNAKE_CASE.
 * Example: 'app-header' becomes 'APP_HEADER'.
 * @param {string} str The string to convert.
 * @return {string} The UPPER_SNAKE_CASE string.
 */
const toUpperSnakeCase = (str) => {
    return str.replace(/-/g, "_").toUpperCase();
};

/**
 * Get the specified dimensions (height, width, or both) of the selectors.
 * @param {...any} selectors Selectors of the elements to measure.
 * @param {string} dimension 'height', 'width', or 'both' to specify which dimensions to get.
 */
const getDimensions = (...selectors) => {
    const dimension = selectors.pop();

    selectors.forEach((selector) => {
        if (typeof selector !== "string") {
            consoleLog(
                `Each selector should be a string, but got ${typeof selector}: ${selector}`,
                "error"
            );
            return;
        }

        const target = document.querySelector(selector);

        if (!target) {
            consoleLog(
                `No element matches the selector %c${selector}%c.`,
                "warning"
            );
            return;
        }

        const rect = target.getBoundingClientRect();
        const targetName = toUpperSnakeCase(
            selector.replace(/[^a-zA-Z0-9 _-]/g, "")
        );

        if (dimension === "height" || dimension === "both") {
            window[`${targetName}_HEIGHT`] = rect.height;

            document.documentElement.style.setProperty(
                `--${targetName}_HEIGHT`,
                `${rect.height}px`
            );

            consoleLog(`%c${selector} height = ${rect.height}px`);
        }

        if (dimension === "width" || dimension === "both") {
            window[`${targetName}_WIDTH`] = rect.height;

            document.documentElement.style.setProperty(
                `--${targetName}_WIDTH`,
                `${rect.width}px`
            );

            consoleLog(`%c${selector} width = ${rect.width}px`);
        }
    });
};

export default getDimensions;
