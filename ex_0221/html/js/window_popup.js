var s1 = document.getElementById("result1");
var s2 = document.getElementById("result2");
var s3 = document.getElementById("result3");
var s4 = document.getElementById("result4");

//---------- 알림상자 : 사용자에게 정보를 전달하고 샆을 때 사용한다
function myFunction() {
    alert("I am an alert box!");
}

//---------- 확인상자 : 사용자에게 무엇을 확인하거나 수락하도록 하려는 경우에 사용한다.
function myFunction2() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo1").innerHTML = txt;
}

//---------- prompt 상자 : 사용자가 페이지에 들어가기 전에 값을 입력하도록 하려는 경우에 사용된다.
function myFunction3() {
    let text;
    let person = prompt("이름을 기입해 주세요: ", "해리포터");
    if (persoon == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello" + person + "How are you today?";
    }
    document.getElementById("demo2").innerHTML = text;
}

