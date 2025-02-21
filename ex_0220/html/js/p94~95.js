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
 //------- p.95 연습문제 2번
 var text = "";
 var num = 1;
 var t = "<table border = 1>";
 for(var i = 1; i <= 5; i++) {
      t += "<tr>";

      for(var k = 1; k <= 5; k++){
            t += "<td>" + num + "</td>";
            num ++;
      }

      t += "</tr>";
 }

 t += "</table>";
 console.log(t);
 //document.write(t);
 text += t;

 s2.innerHTML = text;
 s2.innerHTML += "=== 끝 ===";