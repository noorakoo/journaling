//mouse ready
function mouse() {
    document.getElementById("human").focus();
}

//defining the winner with if else
function tellTheWinner(human, machine) {
    if (human === machine) {
        return "Draw!";
    }
    if (human === "rock") {
        if (machine === "paper") {
            return "machine won!";
        } else {
            return "you won!";
        }
    }

    if (human === "paper") {
        if (machine === "scissors") {
            return "machine won!";
        } else {
            return "you won!";
        }
    }

    if (human === "scissors") {
        if (machine === "rock") {
            return "machine won!";
        } else {
            return "you won!";
        }
    }

    if (human === "motherload") {
        return "you won! That's suspicious... did you cheat?";
    }
}

function play() {

    //getting user input, making it lower case
    let human = document.getElementById("human").value; 
        human = human.toLowerCase();
    
    //creating 3 possible options for the machine
    let randomNumber = Math.floor(Math.random() * 3); 
    
        switch (randomNumber) {
            case 0:
                machine = "rock";
                break;
            case 1:
                machine = "paper";
                break;
            case 2:
                machine = "scissors";
                break;
        }
    
    let winner = tellTheWinner(human, machine);

    document.getElementById("printArea").innerHTML = `You: ${human.toLowerCase()}<br>Machine: ${machine}<br><br><em>${winner.toUpperCase()}</em>`;
    //clearing input field
    document.getElementById("human").value = "";
    document.getElementById("human").focus();
    }
