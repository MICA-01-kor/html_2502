var text = "";
var count = 0;
myFnc();
function myFnc() {
  count++;
  // document.write("hello" + count, "<br>");
  text += "hello" + count + "<br>";
}

myFnc();

var theFnc = function () {
  count++;
  // document.write("bye" + count, "<br>");
  text += "bye" + count + "<br>";
};

theFnc();

document.getElementById("demo1").innerHTML = text;
//--------------------------------------------------------
var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }

  var bodyTag = document.getElementById("theBody");
  bodyTag.style.backgroundColor = color[i];
  // var bodyTag = document.getElementById("theBody").style.backgroundColor = "Yellow";
}
//----------------------------------------------------------
var text = "";
function myFnc2(name, area) {
  text += "안녕하세요!! 저는 " + name + "입니다." + "<br>";
  text += "현재 거주 지역은 " + area + "입니다" + "<br><br>";
  // document.write("안녕하세요!! 저는 " + name +"입니다", "<br>");
  // document.write("현재 거주 지역은 " + area + "입니다~", "<br><br>");
}

myFnc2("홍당무", "서울");
myFnc2("깍두기", "부산");

document.getElementById("demo2").innerHTML = text;
//-----------------------------------------------------------
var text = "";
var rightId = "korea";
var rightPw = "1234";
function login(id, pw) {
  if (id == rightId) {
    if (pw == rightPw) {
      // document.write(id + "님 환영합니다!");
      text += id + "님 환영합니다!";
    } else {
      // alert("잘못된 비밀번호입니다.");
      text += "잘못된 비밀번호입니다.";
    }
  } else {
    // alert("존재하지 않는 아이디입니다.");
    text += "존재하지 않는 아이디입니다.";
  }
}

var userId = "korea";
var userPw = "1234";
// var userId = prompt("아이디를 입력하세요", "");
// var userPw = prompt("비밀번호를 입력하세요", "0");

login(userId, userPw);
document.getElementById("demo3").innerHTML = text;
//-------------------------------------------------------------
var text = "";
function sum() {
  var sum = arguments[0] + arguments[1] + arguments[2];
  // document.write(sum);
  text += sum;
}

sum(10, 20, 30);
document.getElementById("demo4").innerHTML = text;
//--------------------------------------------------------------
var text = "";
function testAvg(arrData) {
  var sum = 0;
  arrData[0] = 80;
  arrData[1] = 90;
  for (var i = 0; i < arrData.length; i++) {
    // sum += Number(prompt(arrData[i] + "점수는?", "0"));
    sum += arrData[i];
  }

  var avg = sum / arrData.length;
  return avg;
}

var arrSubject = ["국어", "수학"];
var result = testAvg(arrSubject);

// document.write("평균 점수는 " + result + "점입니다.");
text += "평균 점수는 " + result + "점입니다.";
document.getElementById("demo5").innerHTML = text;
//--------------------------------------------------------------
var num = 1;
function gallery(direct) {
  if (direct) {
    if (num == 8) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "images/pic_" + num + ".jpg");
}
//--------------------------------------------------------------
var text = "";
var num = 0;
function testFnc2() {
  num++;
  // document.write(num, "<br>");
  text += num + "<br>";
  if (num == 10) return;
  testFnc2();
}

testFnc2();
document.getElementById("demo6").innerHTML = text;
//--------------------------------------------------------------
var text = "";
(function () {
  var num = 100;
  function menu() {
    num += 100;
    text += num;
  }
  menu();
})();

(function () {
  var num = 100;
  function menu() {
    alert(num);
  }
})();
document.getElementById("demo7").innerHTML = text; //마지막에 ()는 즉시 실행하라는 의미를 담고 있다.
//--------------------------------------------------------------------
var text = "";
function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function () {
    var str = "";
    str += "이름: " + this.userName + ", ";
    str += "키: " + this.userHeight + ", ";
    str += "몸무게: " + this.userWeight + "<br>";
    return str;
  };
  this.getResult = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight + (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight("장보리", "168", "62");
var park = new CheckWeight("박달재", "180", "88");
console.log(jang);
console.log(park);

text += jang.getInfo();
text += jang.getResult();
// document.write(jang.getInfo());
// document.write(jang.getResult());
document.getElementById("demo8").innerHTML = text;
//---------------------------------------------------------------------
var text = "";
function CheckWeight2(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;
}
CheckWeight2.prototype.getInfo2 = function () {
  var str2 = "";
  str2 += "이름 :" + this.userName + ",";
  str2 += "신장 :" + this.userHeight + ",";
  str2 += "체중 :" + this.userWeight + "<br>";
  return str2;
};
CheckWeight2.prototype.getResult2 = function () {
  this.minWeight = (this.userHeight - 100) * 0.9 - 5;
  this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

  if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
    return "정상 체중입니다.";
  } else if (this.userWeight < this.minWeight) {
    return "정상 체중보다 미달입니다.";
  } else {
    return "정상 체중보다 초과입니다.";
  }
};
var jang = new CheckWeight2("장태희", "170", "58");
var park = new CheckWeight2("박태수", "185", "72");

text += jang.getInfo2();
text += jang.getResult2() + "<br>";

text += jang.getResult2() === park.getResult2();

document.getElementById("demo9").innerHTML = text;
