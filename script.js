var inberat;
var intinggi;
var bmi;
var result;

var inberat = parseFloat(document.getElementById("inputberat").value);
var intinggi = parseFloat(document.getElementById("inputtinggi").value);


function Submitvalue(){

    var inberat = parseFloat(document.getElementById("inputberat").value);
    var intinggi = parseFloat(document.getElementById("inputtinggi").value);

    var bmi = (inberat / (intinggi * intinggi));

    // document.getElementById("berat").innerHTML = inberat + "kg";
    // document.getElementById("tinggi").innerHTML = intinggi + "m";
    // document.getElementById("resbmi").innerHTML = bmi.toFixed(2);

    if (bmi < 18.5 ){
        document.getElementById("result").innerHTML = "KURUS";
        document.getElementById("result").style.color = "red";
    } else if ((bmi > 18.5 ) && (bmi < 24.9)) {
        document.getElementById("result").innerHTML = "NORMAL";
        document.getElementById("background").style.color = "green";
    } else if ((bmi > 25 ) && (bmi < 29.9)) {
        document.getElementById("result").innerHTML = "GEMUK";
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").innerHTML = "OBESITI";
        document.getElementById("result").style.color = "red";
    }

}

function resetbmi(){
    document.getElementById("inputberat").value = "";
    document.getElementById("inputtinggi").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("background").style.color = "";
}