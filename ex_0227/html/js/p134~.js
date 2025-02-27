
//----------------------------------------------------------
var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function () {
  addNum++;
  console.log("addNum: " + addNum);
}, 3000);

var auto_2 = setInterval(function () {
  subNum--;
  console.log("subNum: " + subNum);
}, 3000);
//-----------------------------------------------------------
var addNum1 = 0;
var auto = setTimeout(function () {
  addNum1++;
  console.log(addNum1);
}, 5000);
//------------------------------------------------------------
let info = "";
info += "화면 전체 너비 : " + screen.width + "px<br>";
info += "화면 전체 높이 : " + screen.height + "px<br>";
info += "작업 표시줄 제외된 너비 : " + screen.availWidth + "px<br>";
info += "작업 표시줄 제외된 높이 : " + screen.availHeight + "px<br>";
info += "색상 심도 : " + screen.colorDepth + "px<br>";
info += "픽셀 심도 : " + screen.pixelDepth + "px<br>";

document.getElementById("demo1").innerHTML = info;
//-------------------------------------------------------------
var s4 = document.getElementById("demo2");
var text = "";

text += "현재 페이지 경로명 : " + location.pathname + "<br>";
text += "현재 도메인 : " + location.hostname + "<br>";

s4.innerHTML = text;
//---------------------------------------------------------------
var s5 = document.getElementById("demo3");

var text = "";
var info1 = navigator.userAgent.toLocaleLowerCase();
var osImg = null;

if(info1.indexOf('windows') >= 0) {
    osImg = "windows.png";
} else if(info1.indexOf('macintosh') >= 0) {
    osImg = "macintosh.png";
} else if(info1.indexOf('iphone') >= 0) {
    osImg = "iphone.png";
} else if(info1.indexOf('android') >= 0) {
    osImg = "android.png";
}

// document.write("<img src=\"images/" + osImg + "\">", "<br>");
text += "<img src=\"images/" + osImg + "\">" + "<br>";
var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

// document.write("모니터 해상도 너비 : " + sc_w + "px", "<br>");
// document.write("모니터 해상도 높이 : " + sc_h + "px", "<br>");
text += "모니터 해상도 너비 : " + sc_w + "px" + "<br>";
text += "모티터 해상도 높이 : " + sc_h + "px" + "<br>";
s5.innerHTML = text;