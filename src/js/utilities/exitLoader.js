import { createDebugLogger } from "./debugger";
const debug = false;
const consoleLog = createDebugLogger(debug);

/**
 * Recommended to execute in the window.load native JS event.
 * Adds a class to the body to signal that the page has loaded and is ready to be shown without layout shifts.
 * @param {string} [target='#app-loader'] - CSS selector for the loader element. Defaults to '#app-loader'.
 */
export default function exitLoader(target = "#app-loader") {
    const loader = document.querySelector(target);

    if (loader) {
        document.querySelector("body").classList.add("page--is-ready");
        consoleLog(
            "The page is ready, the Loader has been %cdismissed",
            "success"
        );
    } else {
        consoleLog("Loader element %cnot found", "error");
    }
}
