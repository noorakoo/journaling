let img = document.getElementById("coin");

function throwCoin() {
    document.getElementById("printArea").innerHTML = "";

    let randomNumber = Math.floor((Math.random()*2)+1);

    if (randomNumber == 1) {
        img.src = "heads.png";
    }
    if (randomNumber == 2) {
        img.src = "tails.png";
    }
}