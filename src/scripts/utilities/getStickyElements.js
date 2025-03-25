export default function getStickyElements() {
    const stickyElements = document.querySelectorAll(".sticky");

    if (!stickyElements.length) return;

    stickyElements.forEach((el) => {
        el.style.setProperty("--height", `${el.offsetHeight}px`);
    });
}
