document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not eligible to vote":"Please submit your vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Printo", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Concert(City, Artist, Venue) {
    this.Concert_City = City;
    this.Concert_Artist = Artist;
    this.Concert_Venue = Venue;
}

var High = new Concert("Florence + The Machine", "Portland", "Moda Center");
var Love = new Concert("Marina", "Portland", "Arlene Schnitzer");
var Con = new Concert("Tegan & Sara", "Portland", "Aladin Theater");

function Advertisement() {
    document.getElementById("New_and_This").innerHTML =
    "Coming to " + High.Concert_City + "experiece the epic sounds of " + High.Concert_Artist + "at the " + High.Concert_Venue + ".";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 8;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
