function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;

}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(22,35);
    document.getElementById("Slice").innerHTML = Section;
}

var str = "Hello World!";
var res = str.toUpperCase();
console.log(res);

var str_2 = "It was Mrs. Peacock with the Candlestick in the Kitchen."
var n = str_2.search("Peacock");
console.log(n);

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

var num = 5.56789
var n2 = num.toFixed(2);
console.log(n2);

var str_3 = "Hello Mars!"
var res_3 = str_3.valueOf();
console.log(res_3);





