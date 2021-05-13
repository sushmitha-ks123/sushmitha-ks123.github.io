var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.onclick = function() {
    debugger;
    slide.style.transform = "transformX(0px)";
}

btn2.onclick = function() {
    debugger;
    slide.style.transform = "transformX(-100%)";
}

btn3.onclick = function() {
    slide.style.transform = "transformX(-200%)";
}
btn3.onclick = function() {
    slide.style.transform = "transformX(-300%)";
}