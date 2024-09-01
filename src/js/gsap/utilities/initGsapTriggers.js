import initGsapAos from "../triggers/gsapAos";
import initGsapCurtain from "../triggers/gsapCurtain";

export default function initGsapTriggers() {
    if (MNK) {
        initGsapAos();
        initGsapCurtain();
    }
}
