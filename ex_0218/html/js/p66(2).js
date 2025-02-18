var sales1 = 1200;
var sales2 = 1300;
var sales3 = 1000;

var total = (sales1 + sales2 + sales3)/3;
var sales4 = prompt("4분기 판매량은?", "0");
result = sales4 >= total ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";
document.write(result);


