//------ 배열 객체를 생성하는 방법 3가지 ------

// var d = new Array();
// d[0]=30;
// d[1]="따르릉";
// d[2]=true;

// var d = new Array(30, "따르릉", true);

// var d = [30, "따르릉", true];

// ---- p.110 ----

//  var arr = [30, "따르릉", true];

//  document.write("<h3>배열값 가져오기 1</h3>");
//  document.write(arr[0], "<br>");
//  document.write(arr[1], "<br>");
//  document.write(arr[2], "<br>");

//  document.write("<h3>배열값 가져오기 2</h3>");
//  for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], "<br>");
//  }

//  document.write("<h3>배열값 가져오기 3</h3>");
//  for (i in arr) {
//     document.write(arr[i], "<br>");
//  }

//----- p.112 -----

// var arr_1 = ["사당", "교대", "방배", "강남"];
// var arr_2 = ["신사", "압구정", "옥수"];

// var result = arr_1.join("-");
// console.log(result);
// console.log("------------------");

// var result2 = result.split("-");
// console.log(result2);

// console.log("------------------");

// result = arr_1.concat(arr_2);
// console.log(result);

// result = arr_1.slice(1, 3);
// console.log(result);

// arr_1.sort();
// console.log(arr_1);

// arr_2.reverse();
// console.log(arr_2);

//----- p.113 -----

// var greenArr = ["교대", "방배", "강남"];
// var yellowArr = ["미금", "정자", "수서"];

// greenArr.splice(2, 1, "서초", "역삼");
// console.log(greenArr);

// var data1 = yellowArr.pop(); // yellowArr 배열 마지막 인덱스의 데이터를 data1에 저장
// var data2 = yellowArr.shift(); // yellowArr 배열 가장 앞쪽의 인덱스의 데이터를 data2에 저장

// yellowArr.push(data2); // data2에 저장된 데이터를 yellowArr 끝에 밀어 넣는다
// console.log(yellowArr);

// yellowArr.unshift(data1); // data1에 저장된 데이터를 yellowArr 맨 앞에 밀어넣는다
// console.log(yellowArr);

// ----- p.116 -----

var t = "Hello Thank you good luck to you";
// charAt(index)
document.write(t.charAt(16), "<br />");
document.write("============================", "<br>");
document.write(t.indexOf("you"), "<br />");
document.write("============================", "<br>");

document.write(t.indexOf("you", 16), "<br />");
document.write("============================", "<br>");

document.write(t.lastIndexOf("you"), "<br />");
document.write("============================", "<br>");

document.write(t.lastIndexOf("you", 25), "<br />");
document.write("============================", "<br>");

document.write(t.match("luck"), "<br />");
document.write("============================", "<br>");

document.write(t.search("you"), "<br />");
document.write("============================", "<br>");

document.write(t.substr(21, 4), "<br />");
document.write("============================", "<br>");

document.write(t.substring(6, 12), "<br />");
document.write("============================", "<br>");

document.write(t.replace("you", "me"), "<br />");
document.write("============================", "<br>");

document.write(t.toLowerCase(), "<br />");
document.write("============================", "<br>");

document.write(t.toUpperCase(), "<br />");
document.write("============================", "<br>");

document.write(t.length, "<br />");
document.write("============================", "<br>");

var s = t.split(" ");

document.write(s[0], "<br />");
document.write(s[4], "<br />");

var str = "A";
var tt = str.charCodeAt(0);

document.write(tt, "<br />");
document.write(String.fromCharCode(65), "<br />");
