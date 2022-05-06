function mouse() {
    document.getElementById("seatNumber").focus();
}

document.getElementById("book").addEventListener('click',bookSeat);

let seats = [];

function bookSeat() {
    let seatToBook = Number(document.getElementById("seatNumber").value - 1);
    let result = "";

    if (seats.includes(seatToBook)) {
        result = "This seat has already been booked!";
    } else { 
        seats.push(seatToBook);
        x = document.getElementById("tbody").getElementsByTagName("td");
        x[seatToBook].style.backgroundColor = "red";
    }

    document.getElementById("printArea").innerHTML = result;
    document.getElementById("seatNumber").value = "";
    document.getElementById("seatNumber").focus();
}