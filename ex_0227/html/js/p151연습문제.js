//-----------------------------------------
var text = "";

var phoneNum = "010-2818-4879";
var result_1 = phoneNum.substring(0, 9);
// document.write(result_1, "****<br>");
text += result_1 + "****<br>";
var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out", "over");
// document.write(result_2, "<br>");
text += result_2 + "<br>";

document.getElementById("demo1").innerHTML = text;
// ---------------------------------------------
var text = "";

var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"]; // 5개의 메뉴가 들어있는 배열 생성
var menuNum = Math.floor(Math.random() * menu.length); // Math.random() : 0 ~ 1 미만의 난수 생성 , menu.length = 5, Math.random()*menu.length : 0 ~ 5 미만의 난수 생성, Math.floor() : 소수점 이하를 버림 >> 0,1,2,3,4 의 정수를 생성
var result = menu[menuNum];
// document.write(result);
text += "오늘의 점심 메뉴는?????? :  " + result;

document.getElementById("demo2").innerHTML = text;
