var name = prompt("당신의 이름은?", "");
var height = prompt("당신의 신장은?", "");
var weight = prompt("당신의 체중은?", "");

var normal_w = (height - 100) * 0.9;
var result = weight >= normal_w - 5 && weight <= normal_w + 5;
result = result ? "적정체중입니다." : "적정 체중이 아닙니다.";
document.write(name + "님은 " + result);