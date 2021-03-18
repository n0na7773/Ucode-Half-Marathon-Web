let state = { target: null }

document.body.addEventListener("mousedown", event => {
    if (event.target && event.target.classList.contains("stone") && event.target.getAttribute("value") == "on") {
        event.target.style.position = 'absolute';
        event.target.style.zIndex = 1000;
        state.target = event.target;
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;
    }
});

document.body.addEventListener("mouseup", function() {state.target = null;});

document.body.addEventListener("mousemove", event => {
    if (state.target) {
        state.target.style.left = event.pageX - state.target.offsetWidth / 2 + "px";
        state.target.style.top = event.pageY - state.target.offsetHeight / 2 + "px";
    }
});

document.body.addEventListener("dblclick", event => {
    if (event.target && event.target.classList.contains("stone")) {
        if (event.target.getAttribute("value") == "on")
            event.target.setAttribute("value", "off");
        else
            event.target.setAttribute("value", "on");
    }
});

/*document.body.addEventListener("mousedown", onMousedown);
function onMousedown(e) {
    if (e.target && e.target.classList.contains("stone") && e.target.getAttribute("value") == "on") {
    
        e.target.style.position = 'absolute';
        e.target.style.zIndex = 1000;
        document.body.append(e.target);
        
        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            e.target.style.left = pageX - e.target.offsetWidth / 2 + 'px';
            e.target.style.top = pageY - e.target.offsetHeight / 2 + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener("ondrag", event => {
            event.target.style.cursor = "default";
            state.target = null;
        });

        e.target.addEventListener("mouseup", onMouseup); 
        function onMouseup(e) {
            document.removeEventListener('mousemove', onMouseMove)
            e.target.onmouseup = null;
        }
    }    
}
document.body.addEventListener("click", event => {
    if (event.target && event.target.classList.contains("stone")) {
        if (event.target.getAttribute("value") == "on")
            event.target.setAttribute("value", "off");
        else
            event.target.setAttribute("value", "on");
    }
});*/
