const s1 = document.getElementById("result1");
const s2 = document.getElementById("result2");
const s3 = document.getElementById("result3");
const s4 = document.getElementById("result4");
const s5 = document.getElementById("result5");

//========= p.100 =========
var text = "";
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  // document.write("tv 색상: " + this.color, "<br>");
  text += "tv 색상 : " + this.color + "<br>";
  // document.write("tv 가격: " + this.price, "<br>");
  text += "tv 가격 : " + this.price + "<br>";
};

var car = {
  color: "black",
  price: "5000000",
  info: function () {
    // document.write("car 색상 : " + this.color, "<br>");
    text += "car 색상 : " + this.color + "<br>";
    // document.write("car 가격 : " + this.price, "<br>");
    text += "car 가격 : " + this.price + "<br>";
  },
};

// document.write("<h1>tv 객체 메서드 호출</h1>");
text += "<h1>tv 객체 메서드 호출</h1>";
tv.info();
// document.write("<h1>car 객체 메서드 호출</h1>");ss
text += "<h1>car 객체 메서드 호출</h1>";
car.info();

s1.innerHTML = text;
s1.innerHTML += "=== 끝 ===";

//========== p.103 ==========
var text = "";
var today = new Date();
var nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDay = today.getDay();

// document.write("<h1>오늘 날짜 정보</h1>");
text += "<h1>오늘 날짜 정보</h1>";
// document.write("현재 월 : " + nowMonth, "<br>");
text += "현재 월 : " + nowMonth + "<br>";
// document.write("현재 일 : " + nowDate, "<br>");
text += "현재 일 :" + nowDate + "<br>";
// document.write("현재 요일 : " + nowDay, "<br>");
text += "현재 요일 : " + nowDay + "<br>";

var worldcup = new Date(2002, 4, 31);
var theMonth = worldcup.getMonth(),
  theDate = worldcup.getDate(),
  theDay = worldcup.getDay();

// document.write("<h1>월드컵 날짜 정보</h1>");
text += "<h1>월드컵 날짜 정보</h1>";
// document.write("2002 월드컵 몇 월 : ");
text += "2002 월드컵 몇 월 : " + theMonth + "<br>";
// document.write("2002 월드컵 몇 일 : ");
text += "2002 월드컵 몇 일: " + theDate + "<br>";
// document.write("2002 월드컵 무슨 요일 : ");
text += "2002 월드컵 무슨 요일 : " + theDay + "<br>";

s2.innerHTML = text;
s2.innerHTML += "=== 끝 ===";

//========= p.104 ==========
var text = "";
var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime() - today.getTime();

var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
// document.write("<h1>오늘부터 올해 연말까지 남은 날짜</h1>");
text += "<h1>오늘부터 올해 연말까지 남은 날짜</h1>";
// document.write("연말 D-day: " + result + "일 남았습니다. ");
text += "연말 D-day : " + result + "일 남았습니다. " + "<br>";

s3.innerHTML = text;
s3.innerHTML += "=== 끝 ===";

//========= p.105 ==========
var text = "";
var num = 2.1234;

var maxNum = Math.max(10, 5, 8, 30),
  minNum = Math.min(10, 5, 8, 30),
  roundNum = Math.round(num),
  floorNum = Math.floor(num),
  ceilNum = Math.ceil(num),
  rndNum = Math.random(),
  piNum = Math.PI;

// document.write(maxNum, "<br>");
text += maxNum + "<br>";
// document.write(minNum, "<br>");
text += minNum + "<br>";
// document.write(roundNum, "<br>");
text += roundNum + "<br>";
// document.write(floorNum, "<br>");
text += floorNum + "<br>";
// document.write(ceilNum, "<br>");
text += ceilNum + "<br>";
// document.write(rndNum, "<br>");
text += rndNum + "<br>";
// document.write(piNum, "<br>");
text += piNum + "<br>";

s4.innerHTML = text;
s4.innerHTML += "=== 끝 ===";

//========== p.107 ===========
var text = "";
// document.write("<h1>컴퓨터 가위, 바위, 보 맞추기</h1>");
text += "<h1>컴퓨터 가위, 바위, 보 맞추기</h1>";
var game = "가위";
// var game = prompt("가위, 바위, 보 중 선택하세요?", "가위");
var gameNum;
switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gamemNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성했습니다.");
    location.reload();
}
var com = Math.ceil(Math.random() * 3);

// document.write("<img src=\"images/math_img_" + com + ".jpg\">");
text += '<img src="images/math_img_' + com + '.jpg">';
if (gameNum == com) {
  // document.write("<img src=\"images/game_1.jpg\">");
  text += '<img src="images/game_1.jpg">';
} else {
  // document.write("<img src=\"images/game_2.jpg\">");
  text += '<img src="images/game_2.jpg">';
}

s5.innerHTML = text;
s5.innerHTML += "=== 끝 ===";
