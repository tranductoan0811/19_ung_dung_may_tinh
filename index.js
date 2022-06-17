
// let myPara = document.getElementById("demo")

// myPara.innerHTML = "day la lop PF2205R1";
// myPara.style.color = "red";

function Add() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let sum = num1+num2;
  let result = "Kết quả phép tính cộng là: " + num1 + "+" + num2 + " = " + sum

  document.getElementById("result").innerHTML = result;

}

function Sub() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let sub = num1-num2;
  let result_sub = "Kết quả phép tính trừ là: " + num1 + "-" + num2 + " = " + sub

  document.getElementById("result").innerHTML = result_sub;

}

function Mul() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let mul = num1*num2;
  let result_mul = "Kết quả phép tính nhân là: " + num1 + "*" + num2 + " = " + mul

  document.getElementById("result").innerHTML = result_mul;
 
}

function Div() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let div = num1/num2;
  let result_div = "Kết quả phép tính chia là: " + num1 + "/" + num2 + " = " + div

  document.getElementById("result").innerHTML = result_div;
 
}

