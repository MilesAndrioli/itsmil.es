import initGsapAos from "../triggers/gsapAos";
import initGsapUnveil from "../triggers/gsapUnveil";

export default function initGsapTriggers() {
    if (MNK) {
        initGsapAos();
        initGsapUnveil();
    }
}
