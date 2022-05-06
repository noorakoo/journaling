function mouse() {
    document.getElementById("question").focus();
}

function foretell() {

    document.getElementById("question").value = "";

    let randomNumber = Math.floor(Math.random() * 8);

    let eightball = '';

    switch (randomNumber) {
        case 0:
            eightball = "most likely";
        break;
        case 1:
            eightball = "I believe it is so";
        break;
        case 2:
            eightball = "ask me again tomorrow";
        break;
        case 3:
            eightball = "cannot foretell at this moment";
        break;
        case 4:
            eightball = "don't put all your eggs in one basket";
        break;
        case 5:
            eightball = "my sources say it is so";
        break;
        case 6:
            eightball = "looks likely";
        break;
        case 7:
            eightball = "the signs say yes";
    }

    document.getElementById("printArea").innerHTML = eightball;
    document.getElementById("question").focus();
}
