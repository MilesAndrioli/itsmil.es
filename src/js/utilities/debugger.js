const baseStyle = "padding: 0.25rem 0.5rem; border-radius: 0.3125rem;";

const debugStyles = {
    warning: `background-color: #ffc107; color: #282828; ${baseStyle}`,
    success: `background-color: #06d6a0; color: #282828; ${baseStyle}`,
    error: `background-color: #ef476f; color: #fff; ${baseStyle}`,
    info: `background-color: #000; color: #fff; ${baseStyle}`,
    default: `border: 1px solid; color: #fff; ${baseStyle}`,
};

console.log("TESTING COMMITW");
console.log("TESTING COMMITW");

/**
 * Creates a conditional debug logger with support for styled console message.
 *
 * @param {boolean} debugEnabled - If true, enables the logging of messages; otherwise, no output is produced.
 * @returns {Function} A function that logs a styled message to the console.
 * It accepts a message string, containing a "%c" placeholder for styling, and a styleKey
 * indicating the CSS style to apply. Styles are predefined above.
 *
 * Example:
 *
 * import { createDebugLogger } from "./debugger";
 * const debug = true;
 * const consoleLog = createDebugLogger(debug);
 *
 * consoleLog("%cThis is styled.", "warning");
 * consoleLog("This is not styled, %cthis is (using default).");
 * consoleLog("This is not styled.");
 */
const createDebugLogger = (debugEnabled) => {
    return (message, styleKey) => {
        if (!debugEnabled) return;

        if (message.includes("%c")) {
            const style = debugStyles[styleKey] || debugStyles.default;
            console.log(message, style);
        } else {
            console.log(message);
        }
    };
};

export { createDebugLogger };
