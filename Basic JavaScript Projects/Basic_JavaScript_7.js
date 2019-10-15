function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
    Vote = "You are old enough to Vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("Click_me").innerHTML = Vote;
}