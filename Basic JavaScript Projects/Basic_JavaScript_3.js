function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math_2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_3").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math_4").innerHTML="48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math_5").innerHTML = "1 + 2, multipled by 10, divided in hal and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math_6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_7").innerHTML = -x;
}

var X = 5;
X++
document.write(X)


var X = 5.25;
X--;
document.write(X)

window.alert(Math.random());

window.alert(Math.random() * 100);

window.alert(Math.ceil(4.6))

window.alert(Math.sqrt(120))