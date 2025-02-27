const s2 = document.getElementById("r2");
const s3 = document.getElementById("r3");
const s4 = document.getElementById("r4");
const s6 = document.getElementById("r6");

const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const myMap = new Map();

var fixedScore = {
    "영어":[85, 90],
    "중국어":[80, 75]
};

for (let i = 0; i < contry.length; i++) {
  myMap.set(contry[i], fixedScore[contry[i]]);
//   for (let k = 0; k < subjects.length; k++) {
//    const score = prompt(`${contry}에 ${subjects} 점수는?`);
//     myMap.get(contry[i]).push(score);
//   }
}
const scoresDiv = document.getElementById("scores");

scoresDiv.innerHTML += `<h2>${contry[0]}점수</h2>`;
scoresDiv.innerHTML += `<p>쓰기: ${myMap.get("영어")[0]}</p>`;
scoresDiv.innerHTML += `<p>말하기: ${myMap.get("영어")[1]}</p>`;

scoresDiv.innerHTML += `<h2>${contry[1]} 점수</h2>`;
scoresDiv.innerHTML += `<p>쓰기: ${myMap.get("중국어")[0]}</p>`;
scoresDiv.innerHTML += `<p>말하기: ${myMap.get("중국어")[1]}</p>`;
//------------------------------------------------------------
var text = "";
const users = {
  userA: [50, 60, 100],
  userB: [80, 90, 70],
  userC: [75, 80, 90],
};
const { userA, userB } = users;
const arr = [...userA, ...userB];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// document.write(`userA와 userB의 점수 합계는 ${sum}점.`);
text += "userA와 userB의 점수 합계는 : " + sum + "점!";
s2.innerHTML = text;
//------------------------------------------------------------
const arr1 = [10, 20, 30];
const arr2 = arr1.map((item) => item / 10);
console.log(arr2);

const arr3 = ["홍길동", "김갑중", "박상무"];
const arr4 = arr3.map((item, idx) => {
  let obj = {};
  obj["no"] = idx + 1;
  obj["userName"] = item;
  return obj;
});
console.log(arr4);
//-------------------------------------------------------------
const subject1 = ["쓰기", "듣기", "말하기"];

const arr5 = subject1.map((item) => {
  return prompt(`영어 ${item}의 점수는?`, "0");
});

let result = arr5.some((item) => item < 60);

result = result ? "불합격" : "합격";
document.write(result);


//--------------------------------------------------------------
const subject2 = ["쓰기", "듣기", "말하기"];
const arr6 = subject2.map((item) => {
  return prompt(`${item}의 점수는?`, "0");
});
let result2 = arr6.every((item) => (item >= 60));

result2 = result2 ? "합격" : "불합격";
document.write(result2);
//---------------------------------------------------------------
var text = "";
const fruit_1 = ["딸기", "바나나", "파인애플"];
const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
let fruit_3 = [];

fruit_3 = [...fruit_1];
fruit_2.map((item) => {
  if (!fruit_3.includes(item)) {
    fruit_3.push(item)
  }
});

// document.write(fruit_3);
text += fruit_3;
s6.innerHTML = text;
//----------------------------------------------------------
const subject3 = ["쓰기", "듣기", "말하기"];
const arr7 = [];
for(let item of subject3) {
    arr7.push(prompt(`${item}의 점수는?`, "0"));
}

let result3 = arr7.every((item) => ( item >= 60));

result3 = result3 ? "합격" : "불합격";
document.write(result3);

