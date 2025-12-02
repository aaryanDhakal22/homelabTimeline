
// wait for the page to load
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
