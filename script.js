var input1 = document.getElementById("label1");
var input2 = document.getElementById("label2");
var input3 = document.getElementById("label3");
var input4 = document.getElementById("label4");
var input5 = document.getElementById("label5");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");

var boolen1 = false;
var boolen2 = false;
var boolen3 = false;
var boolen4 = false;
var boolen5 = false;

input1.addEventListener("click" , function () {
    if (boolen1 == false) {
        boolen1 = true;
        text1.classList.add("activ");
    }
    else {
        text1.classList.remove("activ");
        boolen1 = false;
    }
})

input2.addEventListener("click" , function () {
    if (boolen2 == false) {
        boolen2 = true;
        text2.classList.add("activ");
    }
    else {
        text2.classList.remove("activ");
        boolen2 = false;
    }
})

input3.addEventListener("click" , function () {
    if (boolen3 == false) {
        boolen3 = true;
        text1.classList.add("activ");
    }
    else {
        text3.classList.remove("activ");
        boolen3 = false;
    }
})

input4.addEventListener("click" , function () {
    if (boolen4 == false) {
        boolen4 = true;
        text1.classList.add("activ");
    }
    else {
        text4.classList.remove("activ");
        boolen4 = false;
    }
})

input5.addEventListener("click" , function () {
    if (boolen5 == false) {
        boolen5 = true;
        text1.classList.add("activ");
    }
    else {
        text5.classList.remove("activ");
        boolen5 = false;
    }
})