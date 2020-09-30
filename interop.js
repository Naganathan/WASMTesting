


function onMouseDown(elem, component, interval) {
    elem.addEventListener('mousedown', _.throttle(e => {
        component.invokeMethodAsync('HandleMouseDown', e.offsetX, e.offsetY);
    }, interval));
};

function onMouseMove(elem, component, interval) {
    elem.addEventListener('mousemove', _.throttle(e => {
        component.invokeMethodAsync('HandleMouseMove', e.clientX, e.clientY);
    }, interval));
};

function onMouseUp(elem, component, interval) {
    elem.addEventListener('mouseup', _.throttle(e => {
        component.invokeMethodAsync('HandleMouseUp', e.offsetX, e.offsetY);
    }, interval));
};
