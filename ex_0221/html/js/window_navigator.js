var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");
var s6 = document.getElementById("result6");
var s7 = document.getElementById("result7");
var s8 = document.getElementById("result8");
var s9 = document.getElementById("result9");
var s10 = document.getElementById("result10");


// --------- 브라우저 쿠키가 활성화되어 있으면  true, 그렇지 않으면 false를 반환
document.getElementById("demo1").innerHTML = "결과 : " + navigator.cookieEnabled;

//----------- 브라우저 애플리케이션 이름
document.getElementById("demo2").innerHTML = "결과 : " + navigator.appName;

//----------- 브라우저 응용 프로그램 코드 이름
document.getElementById("demo3").innerHTML = "결과 : " + navigator.appCodeName;

//----------- 브라우저 엔진: 브라우저 엔진의 제품 이름을 반환한다.
document.getElementById("demo4").innerHTML = "결과 : " + navigator.product;

//----------- 브라우저 버전: 브라우저에 대한 버전 정보를 제공한다.
document.getElementById("demo5").innerHTML = "결과 : " + navigator.appVersion;

//----------- 브라우저 에이전트: 브라우저에서 서버로 보낸 사용자 에이전트 헤더를 반환한다.
document.getElementById("demo6").innerHTML = "결과" + navigator.userAgent;

//----------- 브라우저 플랫폼: 브라우저 플랫폼(운영체제)를 반환한다.
document.getElementById("demo7").innerHTML = "결과 : " + navigator.platform;

//----------- 브라우저 언어: 브라우저의 언어를 반환합니다.
document.getElementById("demo8").innerHTML = "결과 : " + navigator.language;

//----------- 브라우저가 온라인 상태인지 확인하는 메서드
document.getElementById("demo9").innerHTML = "결과 : " + navigator.onLine;

//----------- Java가 활성화 되있는지 확인하는 메서드
document.getElementById("demo10").innerHTML = "결과 : " + navigator.javaEnabled;