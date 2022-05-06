//currency exchange----------------------------------------------------------------------------------
//
//
function eurToUsd() {
    let eurExchange = Number(document.getElementById("sum").value);
    let dollar = eurExchange * 1.19330;
    document.getElementById("printArea").innerHTML = dollar.toFixed(2) + " $";
}

function usdToEur() {
    let dolExchange = Number(document.getElementById("sum").value);
    let euro = dolExchange * 0.83801;
    document.getElementById("printArea").innerHTML = euro.toFixed(2) + " €";
}

//speed radar----------------------------------------------------------------------------------
//
//
function examine() {
    let speedLimit = Number(document.getElementById("speedLimit").value);
    let carSpeed = Number(document.getElementById("carSpeed").value);
    
    let speeding = carSpeed - speedLimit;
    
    let print = "";

    if (speedLimit <= 60) {
        if (speeding <= 0) {
            print = "Have a good journey!";
        }
        
        if (speeding >= 1 && speeding <= 10) {
            print = "Traffic penalty fee" + "<br>" + "100 euros!";
        }
        if (speeding >= 11 && speeding <= 15) {
            print = "Traffic penalty fee" + "<br>" + "170 euros!";
        }
        if (speeding >= 16 && speeding <= 20) {
            print = "Traffic penalty fee" + "<br>" + "200 euros!";
        }
        if (speeding > 20) {
            print = "Ask for income and calculate the fine!";
        }
    }

    if (speedLimit > 60) {
        if (speeding <= 0) {
            print = "Have a good journey!";
        }
        if (speeding >= 1 && speeding <= 10) {
            print = "Traffic penalty fee" + "<br>" + "70 euros!";
        }
        if (speeding >= 11 && speeding <= 15) {
            print = "Traffic penalty fee" + "<br>" + "140 euros!";
        }
        if (speeding >= 16 && speeding <= 20) {
            print = "Traffic penalty fee" + "<br>" + "170 euros!";
        }
        if (speeding > 20) {
            print = "Ask for income and calculate the fine!";
        }
    }

    document.getElementById("printAreaSpeedRadar").innerHTML = print;
}

//watched movies----------------------------------------------------------------------------------
//
//
let movies = [];

function add() {
    let watchedMovie = document.getElementById("watched").value;
    movies.push(watchedMovie);

    document.getElementById("watched").value = "";
    document.getElementById("watched").focus();
}

function print() {
    movies.sort();

    let print = "";
    for (let i = 0; i < movies.length; i++){
        print += movies[i] + "<br>";
    }

    document.getElementById("printAreaMovies").innerHTML = print;
    document.getElementById("watched").value = "";
    document.getElementById("watched").focus();
}

function search() {
    let watchedMovie = document.getElementById("watched").value;
    let print = "";
    let isWatched = false;

    for (let i = 0; i < movies.length; i++) {
        if (watchedMovie == movies[i]) { 
            isWatched = true;
        } 
    }

    if (isWatched == true) {
        print = "You've watched this movie!";
    } else {
        print = "You haven't watched this movie.";
    }

    window.alert(print);
    
    document.getElementById("watched").value = "";
    document.getElementById("watched").focus();
}

//realtor's apartment guide, constructor and method----------------------------------------------------------------------------------
//
//
let apartments = [];

class Apartment {
    constructor(idNumber, address, price, squareMetres) {
        this.idNumber = idNumber;
        this.address = address;
        this.price = price;
        this.squareMetres = squareMetres;
    }
    squareMetresPrice = function () {
        return this.price / this.squareMetres;
    }
}

function addApartment() {
    let idNumber = Number(document.getElementById("idNumber").value);
    let address = document.getElementById("address").value;
    let price = Number(document.getElementById("price").value);
    let squareMetres = Number(document.getElementById("squareMetres").value);

    let apartmentObject = new Apartment(idNumber, address, price, squareMetres);
    apartments.push(apartmentObject);

    document.getElementById("idNumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("price").value = "";
    document.getElementById("squareMetres").value = "";
}

function searchApartment() {
    let searchedIdNumber = Number(document.getElementById("searchApartment").value);
    let printApartment = "";

    for (let i = 0; i < apartments.length; i++) {
        if (apartments[i].idNumber === searchedIdNumber) {
            printApartment += "ID number: " + apartments[i].idNumber + "<br>" + "Address: " + apartments[i].address + "<br>" + "Price: " + apartments[i].price + " €" + "<br>" + "Square metres: " + apartments[i].squareMetres + " m2" + "<br>" + "Price per square metre: " + apartments[i].squareMetresPrice().toFixed(2) + " €";
        }
    }

    document.getElementById("printAreaApartment").innerHTML = printApartment;
}

