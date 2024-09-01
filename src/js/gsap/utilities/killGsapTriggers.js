import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createDebugLogger } from "../../utilities/debugger";

const debug = true;
const consoleLog = createDebugLogger(debug);

export default function killGsapTriggers() {
    const triggers = ScrollTrigger.getAll();

    triggers.forEach((trigger) => trigger.kill());

    consoleLog(
        `%c${triggers.length}%c ScrollTriggers have been killed`,
        "info"
    );
}
