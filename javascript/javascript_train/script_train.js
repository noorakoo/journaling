document.getElementById("buy").addEventListener('click',calcPrice);

function calcPrice() {
    let journey = "";

    oneWay2 = 86.10;
    return2 = 86.10 * 2;

    oneWay1 = 140.61;
    return1 = 140.61 * 2;
           
    if (document.getElementById("class2").checked && document.getElementById("oneWay").checked) {
        journey = oneWay2;
    }
    if (document.getElementById("class2").checked && document.getElementById("return").checked) {
        journey = return2;
    }
    if (document.getElementById("class1").checked && document.getElementById("oneWay").checked) {
        journey = oneWay1;
    } 
    if (document.getElementById("class1").checked && document.getElementById("return").checked) {
        journey = return1;
    } 
    if (document.getElementById("class2").checked && document.getElementById("oneWay").checked && document.getElementById("discount").checked) {
        journey = oneWay2 / 2;
    }
    if (document.getElementById("class2").checked && document.getElementById("return").checked && document.getElementById("discount").checked) {
        journey = return2 / 2;
    }
    if (document.getElementById("class1").checked && document.getElementById("oneWay").checked && document.getElementById("discount").checked) {
        alert("No discount available for 1st class tickets.");
    }
    if (document.getElementById("class1").checked && document.getElementById("return").checked && document.getElementById("discount").checked) {
        alert("No discount available for 1st class tickets.");
    }

    let pcs = document.getElementById("pcs").value;

    let fullPrice = journey * pcs;
    
    document.getElementById("printArea").innerHTML = "Price: " + fullPrice.toFixed(2) + " €";
}