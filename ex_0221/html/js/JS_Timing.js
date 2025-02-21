var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");

//--------- setTimeout()
function myFunction() {
  alert("Hello!");
}

//--------- clearTimeout()
function myFunction2() {
  alert("Hello!");
}

//----------  setInterval()
setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
}

//--------- clearInteval()
let myVar2 = setInterval(myTimer2, 1000);
function myTimer2() {
    const e = new Date();
    document.getElementById("demo2").innerHTML = e.toLocaleTimeString();
}