var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");
var s6 = document.getElementById("result6");
var s7 = document.getElementById("result7");

// w3 " Dom Navigation "
document.getElementById("id02").innerHTML =  document.getElementById("id01").innerHTML;

// w3 "Dom Navigation 02"
document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;

// w3 "Dom Navigation 03"
document.getElementById("id06").innerHTML = document.getElementById("id05").childNodes[0].nodeValue;

// w3 "Dom Navigation 04"
document.getElementById("demo").innerHTML = document.body.innerHTML;

// w3 "Dom Navigation 05"
document.getElementById("demo1").innerHTML = document.documentElement.innerHTML;

// w3 "Dom Navigation 06"
document.getElementById("id08").innerHTML = document.getElementById("id07").nodeName;

// w3 " Dom Navigation 07"
document.getElementById("id10").innerHTML = document.getElementById("id09").nodeType;