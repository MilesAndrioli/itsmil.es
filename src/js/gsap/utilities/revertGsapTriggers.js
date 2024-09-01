import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createDebugLogger } from "../../utilities/debugger";

const debug = true;
const consoleLog = createDebugLogger(debug);

export default function revertGsapTriggers() {
    const triggers = ScrollTrigger.getAll();

    triggers.forEach((trigger) => trigger.revert());

    consoleLog(
        `%c${triggers.length}%c ScrollTriggers have been reverted`,
        "info"
    );
}
