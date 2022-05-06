document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    // Ball 1
    if (keyName === 'ArrowRight') {
        move(document.getElementById("ball1"), 15, 0);
    }
    if (keyName === 'ArrowLeft') {
        move(document.getElementById("ball1"), -15, 0);
    }
    if (keyName === 'ArrowUp') {
        move(document.getElementById("ball1"), 0, -15);
    }
    if (keyName === 'ArrowDown') {
        move(document.getElementById("ball1"), 0, 15);
    }
    
    // Ball 2
    if (keyName === 'd') {
        move(document.getElementById("ball2"), 15, 0);
    }
    if (keyName === 'a') {
        move(document.getElementById("ball2"), -15, 0);
    }
    if (keyName === 'w') {
        move(document.getElementById("ball2"), 0, -15);
    }
    if (keyName === 'z') {
        move(document.getElementById("ball2"), 0, 15);
    }
    
    // check if they touch
    reset(document.getElementById("ball1"), document.getElementById("ball2"));

}, false);

function move(ball, x, y) {

    if (parseInt(ball.style.marginLeft, 10) + x > -15 && parseInt(ball.style.marginLeft, 10) + x < 585) {
        ball.style.marginLeft = (parseInt(ball.style.marginLeft, 10) + x).toString(10) + "px";
    }
    if (parseInt(ball.style.marginTop, 10) + y > -15 && parseInt(ball.style.marginTop, 10) + y < 585) {
        ball.style.marginTop = (parseInt(ball.style.marginTop, 10) + y).toString(10) + "px";
    }
}

// when the two balls come into contact
function reset(ball1, ball2) {
    // coordinates
    x1 = parseInt(ball1.style.marginLeft, 10);
    y1 = parseInt(ball1.style.marginTop, 10);
    x2 = parseInt(ball2.style.marginLeft, 10);
    y2 = parseInt(ball2.style.marginTop, 10);

    if (Math.abs(x1 - x2) === 0 && Math.abs(y1 - y2) === 15 || Math.abs(x1 - x2) === 15 && Math.abs(y1 - y2) === 0 || Math.abs(x1 - x2) === 15 && Math.abs(y1 - y2) === 15) {
        ball1.style.marginLeft = "0px";
        ball1.style.marginTop = "0px";
        ball2.style.marginLeft = "570px";
        ball2.style.marginTop = "570px";
    }
}

