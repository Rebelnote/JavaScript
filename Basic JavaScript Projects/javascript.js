var family = "The Belchers", Dad="Bob", Mom="Linda", Daughter_1="Tina", Son="Gene", Daughter_2="Louise";
var Daughter_2 = Daughter_2.fontcolor("hotpink");
var Daughter_1 = Daughter_1.fontcolor("blue");
var Son = Son.fontcolor("Purple");
var Dad = Dad.fontcolor("Grey");
var Mom = Mom.fontcolor("Red");
var family = family.fontcolor("yellow");
document.write(family);

function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("Green");
    document.getElementById("Green_Text") .innerHTML = result;
}