var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");
var s6 = document.getElementById("result6");
var s7 = document.getElementById("result7");
var s8 = document.getElementById("result8");

//--------- window.location.href : 현재 페이지의 href(URL)을 반환한다.
document.getElementById("demo1").innerHTML = "결과 : " + window.location.href;

//--------- window.location.hostname : 현재 페이지의 이름을 반환한다.
document.getElementById("demo2").innerHTML =
  "결과 : " + window.location.hostname;

//--------- window.location.pathname : 현재 페이지의 경로명을 반환한다.
document.getElementById("demo3").innerHTML =
  "결과 : " + window.location.pathname;

//--------- window.location.protocol;
document.getElementById("demo4").innerHTML =
  "결과 : " + window.location.protocol;

//--------- window.lcoation.port;
document.getElementById("demo5").innerHTML = "결과 : " + window.location.port;

//--------- window 창 위치 조정
function newDoc() {
  window.location.assign("https://www.wschools.com");
}

//---------- history.back() : 전에 있었던 창으로 돌아가기
function goBack() {
  window.history.back()
}

//---------- history.foward()
function goForward() {
  window.history.forward()
}
