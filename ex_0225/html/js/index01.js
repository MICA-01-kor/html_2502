// -----------------------------------------
function changeText(id) {
  id.innerHTML = "Oooops!!";
}

//-------------------------------------------
function displayDate1() {
  document.getElementById("demo1").innerHTML = Date();
}

//-------------------------------------------
document.getElementById("myBtn").onclick = displayDate2;

function displayDate2() {
  document.getElementById("demo2").innerHTML = Date();
}

//--------------------------------------------
function checkCookies() {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo3").innerHTML = text;
}

//-------------------------------------------
function UpperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

// ------------------------------------------
function UpperCase2() {
    const y = document.getElementById("fname2");    
    y.value = y.value.toUpperCase();

}

//--------------------------------------------
function mOver(obj) {
        obj.innerHTML = "Thank You~"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Ove Me!"
}
//-------------------------------------------
function mDown(obj) {
    obj.style.backgroundcolor = "1ec5e5"
    obj.innerHTML = "Release me";
}
function mUp(obj) {
    obj.stylebackgroundcolor="#d84a385";
    obj.innerHTML="Thank you!"
}