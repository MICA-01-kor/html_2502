var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");
var s6 = document.getElementById("result6");

//--------- w3 자바스크립트 창 크기
document.getElementById("demo1").innerHTML = 
"Browser inner window width: " + window.innerWidth + "px<br>" + 
"Browser inner window height: " + window.innerHeight + "px";

//--------- w3 window screen width
document.getElementById("demo2").innerHTML =
"Screen Width is " + screen.width;

//--------- w3 window screen height
document.getElementById("demo3").innerHTML =
"Screen height is " + screen.height;

//--------- w3 window screen available width
document.getElementById("demo4").innerHTML =
"Available screen width is " + screen.availWidth;

//--------- w3 window screen color depth
document.getElementById("demo5").innerHTML = 
"Screen Color Depth is " + screen.colorDepth;

//--------- w3 window screen pixel depth
document.getElementById("demo6").innerHTML =
"Screen Pixel Depth is " + screen.pixelDepth;