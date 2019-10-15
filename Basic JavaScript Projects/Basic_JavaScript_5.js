document.write(typeof 3);

function My_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function My_Function_2() {
    document.getElementById("Test_2").innerHTML = isNaN('007');
}

function My_Function_3() {
    document.getElementById("Test_3").innerHTML = isNaN('This is a string');
}

function My_Function_4() {
    document.getElementById("Test_4").innerHTML = 2E310;
}

function My_Function_5() {
    document.getElementById("Test_5").innerHTML = -3E310;
}

document.write(10>2);

document.write(10<2);

console.log(2+2);

document.write("10" + 5)

console.log(10>12);

document.write(10 == 10);

document.write(3 == 11);

x = 10;
y = 10;
document.write(x === y);

x = 82;
y = 10;
document.write(x === y);

x = 10;
y = "ten";
document.write(x === y);

document.write(5 > 10 && 10 < 4);

document.write(5 > 10 || 10 < 4);


function not_Function() {
    document.getElementById("Not").innerHTML= !(5>10);
}

function not_Function_2() {
    document.getElementById("Not_2").innerHTML= !(20 > 10);
}


