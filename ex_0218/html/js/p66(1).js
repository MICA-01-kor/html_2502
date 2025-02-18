var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var normal_e = 10000;

var daily_e = price1 + price2 + price3;
var extra_e = daily_e - normal_e;
var result = normal_e > daily_e;
result = result ? "돈 관리 참 잘했어요!" : ` "진영이는 하루 지출 비용을 ${extra_e}원 만큼 초과했어요" `;
document.write(result);
