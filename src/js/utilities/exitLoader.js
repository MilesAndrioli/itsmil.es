import { createDebugLogger } from "./debugger";
const debug = true;
const consoleLog = createDebugLogger(debug);

/**
 * Execute in windowLoad() so the loader
 * goes away as soon as the page is loaded.
 * Remove it from the DOM after X seconds, just in case.
 */
export default function exitLoader(target) {
    const loaderElement = document.querySelector(target);

    if (loaderElement) {
        document.body.classList.add("page--is-ready");
        consoleLog("Loader has been %cdismissed", "success");

        setTimeout(() => {
            loaderElement.remove();
            consoleLog("Loader has been %cdestroyed", "info");
        }, 7000);
    }
}
