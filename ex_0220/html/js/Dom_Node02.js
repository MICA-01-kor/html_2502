var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");
var s5 = document.getElementById("result5");

// w3 새로운 HTML 요소(노드) 생성
const para = document.createElement("p");
const node = document.createTextNode("This is new111.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

// w3 새로운 HTML 요소 생성 - insteadBefore()
const para2 = document.createElement("p");
const node2 = document.createTextNode("This is new222.");
para2.appendChild(node2);

const element2 = document.getElementById("div2");
const child2 = document.getElementById("p3");
element2.insertBefore(para2, child2);

// w3 기존 HTML 요소 제거
function myFunction() {
  document.getElementById("p5").remove();
}

// w3 자식 노드 제거
const parent = document.getElementById("div3");
const child = document.getElementById("p7");
parent.removeChild(child);

// w3 HTML 요소 교체
const parent2 = document.getElementById("div4");
const child3 = document.getElementById("p9");
const para3 = document.createElement("p");
const node3 = document.createTextNode("This is new3333333");
para3.appendChild(node3);
parent2.replaceChild(para3,child3);
