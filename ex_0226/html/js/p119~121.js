const s1 = document.getElementById("result1");
const s2 = document.getElementById("result2");

var text ="";
var userName = "byeon-ho-young";
// var userName = prompt("당신의 영문 이름은?", "");

var upperName = userName.toUpperCase();
// document.write(upperName, "<br>");
text += upperName + "<br>";

var userNum = "010-2818-4879";
// var userNum = prompt("당신의 연락처는?", "");
var result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result, "<br>");
text += result + "<br>";

s1.innerHTML = text;

//-------------------------------------------------------------------
var text = "";
var userEmail = "hysydaddy@naver.com";
// var userEmail = prompt("당신의 이메일 주소는?", "");
var arrUrl = [".co.kr", "com", "net", ".or.kr", ".go.kr"];

var check1 = false;
var check2 = false;

if (userEmail.indexOf("@") > 0) {check1 = true;}

for (var i = 0; i < arrUrl.length; i++) {
    if (userEmail.indexOf(arrUrl[i]) > 0) {
        check2 = true;
    }
}

if (check1 && check2) {
    // document.write(userEmail);
    text += userEmail;
} else {
    // alert("이메일 형식이 잘못되었습니다.");
    text += "이메일 형식이 잘못되었습니다."
}
s2.innerHTML = text;

//-----------------------------------------------------------
var d = document;
var s1_result = d.querySelector(".s1")