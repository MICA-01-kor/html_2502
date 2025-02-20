var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");

//------- p.94 연습문제 1번
var i = 1;
var text = "";
while (i < 10) {
//    document.write("5X" + i + "=" + i*5 + "<br>");
      text += "5X" + i + "=" + 5*i + "<br>"
      i++;    
}
s1.innerHTML = text;
s1.innerHTML += "=== The End ===";