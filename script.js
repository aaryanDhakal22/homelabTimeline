const items = document.querySelectorAll('.focus-item');

function updateActiveItem() {
    const viewportCenter = window.innerHeight / 2;
    let closest = null;
    let closestDistance = Infinity;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closest = item;
        }
    });

    items.forEach(item => {
        if (item === closest) {
            item.dataset.active = "true";
        } else {
            item.dataset.active = "false";
        }
    });
}

// Run on scroll / resize / first load
window.addEventListener('scroll', updateActiveItem, { passive: true });
window.addEventListener('resize', updateActiveItem);
window.addEventListener('load', updateActiveItem);
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    document.querySelectorAll('.hscroll').forEach(el => {
        el.addEventListener('wheel', e => {
            console.log("The event is", e);
            e.preventDefault();
            el.scrollLeft += e.deltaY;
            console.log("The scrollLeft is", el.scrollLeft);
        });
    });
});
