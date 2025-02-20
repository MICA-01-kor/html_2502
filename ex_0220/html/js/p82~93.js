var s2 = document.getElementById("result1");
var s3 = document.getElementById("result2");
var s4 = document.getElementById("result3");
var s5 = document.getElementById("result4");
var s6 = document.getElementById("result5");
var s7 = document.getElementById("result6");
var s8 = document.getElementById("result7");
var s9 = document.getElementById("result8");
var s10 = document.getElementById("result9");
var s11 = document.getElementById("result10");
//-----------p.83
// var site = prompt("네이버, 다음, 네이트, 구글 중 \
//     즐겨 사용하는 포털 검색 사이트는?", "");
var site = "네이트";
var url;

switch (site) {
  case "구글":
    url = "https://www.google.com/";
    break;
  case "다음":
    url = "https://www.daum.net/";
    break;
  case "네이버":
    url = "https://www.naver.com/";
    break;
  case "네이트":
    url = "https://m.nate.com/";
    break;
  default:
    alert("보기 중에 없는 사이트입니다.");
}
if (url) {
  // location.href = "https://" + url;
  // window.open(url, "_blank");
}

//----------- p.84
var i = 1;
var text = "";
while (i <= 10) {
  // document.write("안녕하세요" + i, "<br />");
  text += "안녕하세요" + i + "<br>";
  i++;
}
s2.innerHTML = text;
// document.write("=== 끝 ===");
s2.innerHTML += "=== 끝 ===";

//------------ p.85
var text = "";
var i = 1;
while (i <= 30) {
  if (i % 2 == 0 && i % 6 == 0) {
    // document.write(i, "<br>");
    text += i + "<br>";
  }
  i++;
}
s3.innerHTML = text;
s3.innerHTML += "=== 끝 ===";

//---------- p.86
var text = "";
var i = 20;
while (i >= 10) {
  if (i % 2 == 0) {
    // document.write("<p class='blue'>" + i + "</p>");
    text += "<p class='red'>" + i + "</p>";
  } else {
    //  document.write("<p class='red'>" + i + "</p>");
    text += "<p class='blue'>" + i + "</p>";
  }
  i--;
}
s4.innerHTML = text;
s4.innerHTML += "=== 끝 ===";
// document.write("=== 끝 ===");

//------------ p.87
var text = "";
var i = 10;
do {
  // document.write("Hello!!!");
  text += "Hello!!" + "<br>";
} while (i < 3);
s5.innerHTML = text;
s5.innerHTML += "=== 끝 ===";
// document.write("=== 끝 ===");

//----------- p.88
var text = "";

for (var i = 1; i <= 10; i++) {
  // document.write("반복" + i, "<br>");
  text += "반복" + i + "<br>";
}
s6.innerHTML = text;
s6.innerHTML += "=== 끝 ===";
// document.write("=== 끝 ===");

//------------ p.89
var text = "";

for(var i = 1; i <= 100; i++) {
    if(i % 5 == 0 && i % 7 != 0) {
      //  document.write("<p class='red'>" + i + "</p>");
        text += "<p class='red'>" + i + "</p>";
    } else if(i % 7 == 0 && i % 5 != 0) {
      //  document.write("<p class='green'>" + i + "</p>");
        text += "<p class='green'>" + i + "</p>";
    } else if(i % 5 == 0 && i % 7 == 0) {
      //  document.write("<p class='aqua'>" + i + "</p>");
        text += "<p class='aqua'>" + i + "</p>";
    }
}
s7.innerHTML = text;
s7.innerHTML += "=== 끝 ===";
// document.write("=== 끝 ===");

//----------- p.90

var text = "";

for (var i = 1; i <= 10; i++){
    if( i == 6) break;
   // document.write(i, "<br>");
    text += i + "<br>";        
    }
    s8.innerHTML = text;
    s8.innerHTML +="=== 끝 ===";
    // document.write("=== 끝 ===");

//------------ p.91
var text = "";

for(var i = 1; i <= 10; i++) {
    if(i % 2 == 0) continue;
   // document.write(i, "<br>");
   text += i + "<br>";
}
s9.innerHTML = text;
s9.innerHTML += "=== 끝 ===";
// document.write("=== 끝 ===");

//----------- p.92
var text = "";

for( var i = 1; i <= 3; i++) {
    for(var k = 1; k <= 2; k++) {
     //   document.write(i + "행" + k + "열", "<br>");
        text += i + "행" + k + "열" + "<br> ";
    }
      //  document.write("<br>");
        text += "<br>";
}
s10.innerHTML = text;
s10.innerHTML += "=== 끝 ===";

//-------------- 구구단 만들기

var text = "";

for(var i = 3; i < 6; i++){
    for(var j = 1; j < 10; j++){
       // document.write(i*j + "<br>");
        text += i + "X" + j + "=" + i*j + "<br>";
    }
  //  document.write("<br>");
    text += "<br>";
} 
s11.innerHTML = text;
s11.innerHTML += "=== 끝 ===";
