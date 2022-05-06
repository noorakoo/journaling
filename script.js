function mouse() {
    document.getElementById("name").focus();
}

//personalized greeting
function greetings() {
    let name = document.getElementById("name").value;
    document.getElementById("printAreaGreetings").innerHTML = "<em>" + "Hey " + name + ", lovely to see you here!" + "</em>";

    document.getElementById("name").value = "";
    document.getElementById("name").focus();
}

//aphorisms
function good() {
    document.getElementById("printAreaAphorism").innerHTML = "<em>" + "The world is filled with wonderful things, and you are one of them!" + "</em>";
}

function excellent() {
    document.getElementById("printAreaAphorism").innerHTML = "<em>" + "It's better to enjoy today, and to save the worries for tomorrow." + "</em>";
}

function neutral() {
    document.getElementById("printAreaAphorism").innerHTML = "<em>" + "What a wonderful thought it is that so many of the best times of your life are still ahead of you!" + "</em>";
}

function bad() {
    document.getElementById("printAreaAphorism").innerHTML = "<em>" + "Do not grief for what you're missing, but be happy for what you have." + "</em>";
}

