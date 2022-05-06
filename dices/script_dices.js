let dices = [];
let i = 0;

dices[0] = "dice1.jpg";
dices[1] = "dice2.jpg";
dices[2] = "dice3.jpg";
dices[3] = "dice4.jpg";
dices[4] = "dice5.jpg";
dices[5] = "dice6.jpg";

function dice1() {
    let img1 = document.getElementById("picOne");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img1.src = "dice1.jpg";
    }
    if (i == 1) {
        img1.src = "dice2.jpg";
    }
    if (i == 2) {
        img1.src = "dice3.jpg";
    }
    if (i == 3) {
        img1.src = "dice4.jpg";
    }
    if (i == 4) {
        img1.src = "dice5.jpg";
    }
    if (i == 5) {
        img1.src = "dice6.jpg";
    }

    document.getElementById("picOne").src = dices[i];
}

function dice2() {
    let img2 = document.getElementById("picTwo");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img2.src = "dice1.jpg";
    }
    if (i == 1) {
        img2.src = "dice2.jpg";
    }
    if (i == 2) {
        img2.src = "dice3.jpg";
    }
    if (i == 3) {
        img2.src = "dice4.jpg";
    }
    if (i == 4) {
        img2.src = "dice5.jpg";
    }
    if (i == 5) {
        img2.src = "dice6.jpg";
    }

    document.getElementById("picTwo").src = dices[i];
}

function dice3() {
    let img3 = document.getElementById("picThree");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img3.src = "dice1.jpg";
    }
    if (i == 1) {
        img3.src = "dice2.jpg";
    }
    if (i == 2) {
        img3.src = "dice3.jpg";
    }
    if (i == 3) {
        img3.src = "dice4.jpg";
    }
    if (i == 4) {
        img3.src = "dice5.jpg";
    }
    if (i == 5) {
        img3.src = "dice6.jpg";
    }

    document.getElementById("picThree").src = dices[i];
}

function dice4() {
    let img4 = document.getElementById("picFour");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img4.src = "dice1.jpg";
    }
    if (i == 1) {
        img4.src = "dice2.jpg";
    }
    if (i == 2) {
        img4.src = "dice3.jpg";
    }
    if (i == 3) {
        img4.src = "dice4.jpg";
    }
    if (i == 4) {
        img4.src = "dice5.jpg";
    }
    if (i == 5) {
        img4.src = "dice6.jpg";
    }

    document.getElementById("picFour").src = dices[i];
}

function dice5() {
    let img5 = document.getElementById("picFive");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img5.src = "dice1.jpg";
    }
    if (i == 1) {
        img5.src = "dice2.jpg";
    }
    if (i == 2) {
        img5.src = "dice3.jpg";
    }
    if (i == 3) {
        img5.src = "dice4.jpg";
    }
    if (i == 4) {
        img5.src = "dice5.jpg";
    }
    if (i == 5) {
        img5.src = "dice6.jpg";
    }

    document.getElementById("picFive").src = dices[i];
}

function dice6() {
    let img6 = document.getElementById("picSix");
    let i = Math.floor(Math.random() * 5 + 1);

    if (i == 0) {
        img6.src = "dice1.jpg";
    }
    if (i == 1) {
        img6.src = "dice2.jpg";
    }
    if (i == 2) {
        img6.src = "dice3.jpg";
    }
    if (i == 3) {
        img6.src = "dice4.jpg";
    }
    if (i == 4) {
        img6.src = "dice5.jpg";
    }
    if (i == 5) {
        img6.src = "dice6.jpg";
    }

    document.getElementById("picSix").src = dices[i];
}