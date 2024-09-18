import { createDebugLogger } from "./debugger";
const debug = false;
const consoleLog = createDebugLogger(debug);

import toUpperSnakeCase from "./toUpperSnakeCase";

/**
 * Get the specified dimensions (height, width, or both) of the desired selector.
 * @param {string} selector - The selector of the element to measure.
 * @param {string} [dimension='both'] - 'height', 'width', or 'both' to specify which dimensions to get. Defaults to 'both'.
 */
const getDimensions = (selector, dimension = "both") => {
    if (typeof selector !== "string") {
        consoleLog(
            `Selector should be a string, but got %c${typeof selector}: ${selector}`,
            "error"
        );
        return;
    }

    const target = document.querySelector(selector);

    if (!target) {
        consoleLog(`No element matches the selector %c${selector}`, "error");
        return;
    }

    const targetRect = target.getBoundingClientRect();
    const targetName = toUpperSnakeCase(
        selector.replace(/[^a-zA-Z0-9 _-]/g, "")
    );

    if (dimension === "height" || dimension === "both") {
        // Define CSS Global Variable
        document
            .querySelector("html")
            .style.setProperty(
                `--${targetName}_HEIGHT`,
                `${targetRect.height}px`
            );

        // Define JS Global Variable
        window[`${targetName}_HEIGHT`] = targetRect.height;

        consoleLog(`${selector} %cheight = ${targetRect.height}px`);
    }

    if (dimension === "width" || dimension === "both") {
        // Define CSS Global Variable
        document
            .querySelector("html")
            .style.setProperty(
                `--${targetName}_WIDTH`,
                `${targetRect.width}px`
            );

        // Define JS Global Variable
        window[`${targetName}_WIDTH`] = targetRect.width;

        consoleLog(`${selector} %cwidth = ${targetRect.width}px`);
    }
};

export default getDimensions;
