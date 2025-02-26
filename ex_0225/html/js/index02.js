// addListener()는 기존 이벤트 핸들러를 덮어쓰지 않는다.
document.getElementById("myBtn1").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo1").innerHTML = Date();
}
//-------------------------------------------------------------------------------
document.getElementById("myBtn2").addEventListener("click", function () {
  alert("Hello World!");
});
//-------------------------------------------------------------------------------
document.getElementById("myBtn3").addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!!");
}
//-------------------------------------------------------------------------------
document.getElementById("myBtn4").addEventListener("click", myFunction2);
function myFunction2() {
  alert("Hello World!!");
}
document.getElementById("myBtn4").addEventListener("click", someOtherFunction);
function someOtherFunction() {
  alert("This function was also executed!");
}
//-------------------------------------------------------------------------------
var x = document.getElementById("myBtn5");
x.addEventListener("mouseover", myFunction3);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction3() {
  document.getElementById("demo2").innerHTML += "Mouse Over!!<br>";
}
function mySecondFunction() {
  document.getElementById("demo2").innerHTML += "Click!!<br>";
}
function myThirdFunction() {
  document.getElementById("demo2").innerHTML += "Mouse Out!!<br>";
}
//-------------------------------------------------------------------------------
window.addEventListener("resize", function () {
  document.getElementById("demo3").innerHTML = Math.random();
});
//-------------------------------------------------------------------------------
let p1 = 5;
let p2 = 7;
document.getElementById("myBtn6").addEventListener("click", function () {
  myFunction3(p1, p2);
});

function myFunction3(a, b) {
  document.getElementById("demo4").innerHTML = a * b;
}
//--------------------------------------------------------------------------------
document.getElementById("myP1").addEventListener(
  "click",
  function () {
    alert("You clicked the white element!");
  },
  false
);

document.getElementById("myDiv1").addEventListener(
  "click",
  function () {
    alert("You clicked the orange element!");
  },
  false
);

document.getElementById("myP2").addEventListener(
  "click",
  function () {
    alert("You clicked the white elemen!");
  },
  true
);

document.getElementById("myDiv2").addEventListener(
  "click",
  function () {
    alert("You clicked the orange element!");
  },
  true
);
//------------------------------------------------------------------------------
document.getElementById("myDiv3").addEventListener("mousemove", myFunction3);

function myFunction3() {
  document.getElementById("demo5").innerHTML = Math.random();
}

function removeHandler() {
  document
    .getElementById("myDiv3")
    .removeEventListener("mousemove", myFunction3);
}
