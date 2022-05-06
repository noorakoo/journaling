function mouse() {
    document.getElementById("number").focus();
}

function playIt() {
    let number = Number(document.getElementById("number").value);
    number++;
    Number(document.getElementById("printArea").innerHTML = number + "<br><br> You lost!<br> Better luck next time. ;)");

    document.getElementById("number").focus();
}