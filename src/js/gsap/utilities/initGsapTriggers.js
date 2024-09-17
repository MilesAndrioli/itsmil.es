import initGsapScrollState from "../triggers/gsapScrollState";
import initGsapAos from "../triggers/gsapAos";
import initGsapUnveil from "../triggers/gsapUnveil";

export default function initGsapTriggers() {
    initGsapScrollState();
    initGsapAos();
    initGsapUnveil();
}
