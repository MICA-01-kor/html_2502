const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = " 결과 : " + element.innerHTML;
document.getElementById("demo").style.color = "red";

const element1 = document.getElementsByTagName("p");

document.getElementById("demo1").innerHTML = "결과 : " + element1[0].innerHTML;
document.getElementById("demo1").style.color = "red";

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo2").innerHTML = "결과 : " + y[0].innerHTML;
document.getElementById("demo2").style.color = "red";

const z = document.getElementsByClassName("intro1");
document.getElementById("demo3").innerHTML = "결과 : " + z[0].innerHTML;
document.getElementById("demo3").style.color = "red";

const x1 = document.querySelectorAll("p.intro2");
document.getElementById("demo4").innerHTML = "결과 : " + x1[0].innerHTML;
document.getElementById("demo4").style.color = "red";

const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo5").innerHTML = "결과 : " + text;
document.getElementById("demo5").style.color = "red";
