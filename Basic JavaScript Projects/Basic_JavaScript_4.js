function my_Band() {
    var Band = {
        Keys: "Elten John",
        Vocals: "Forench Welch",
        Drums: "Phill Collins",
        Guitar: "Ronnie Woods",
        DJ: "Imogen Heap",
        Members: 5,
    };
    delete Band.Vocals;
    document.getElementById("Dream_Band").innerHTML = Band.Vocals;
}