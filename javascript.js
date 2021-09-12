var operation ;
operation = window.prompt("choose opeartion ( + , - , * , / ) : ");
if(operation == "+")
{
  var usernum1 = document.getElementById("num1") ;
  var usernum2 = document.getElementById("num2") ;
  var button = document.getElementById("button");
  var result1 = document.getElementById("list");
  var list = document.getElementById("list1");
  list.innerHTML = " + ";

  button.addEventListener("click" , function(){
    var unum1 = usernum1.value;
    var unum2 = usernum2.value;
    unum1 = parseFloat(unum1) ;
    unum2 = parseFloat(unum2);
    var result ;
    result = unum1 + unum2 ;
    result1.innerHTML = result ;
  });
}
else if(operation == "-")
{
  var usernum1 = document.getElementById("num1") ;
  var usernum2 = document.getElementById("num2") ;
  var button = document.getElementById("button");
  var result1 = document.getElementById("list");
  var list = document.getElementById("list1");
  list.innerHTML = " - ";

  button.addEventListener("click" , function(){
    var unum1 = usernum1.value;
    var unum2 = usernum2.value;
    unum1 = parseFloat(unum1) ;
    unum2 = parseFloat(unum2);
    var result ;
    result = ((unum1)-(unum2)) ;
    result1.innerHTML = result ;
  });
}

else if(operation == "*")
{
  var usernum1 = document.getElementById("num1") ;
  var usernum2 = document.getElementById("num2") ;
  var button = document.getElementById("button");
  var result1 = document.getElementById("list");
  var list = document.getElementById("list1");
  list.innerHTML = " * ";

  button.addEventListener("click" , function(){
    var unum1 = usernum1.value;
    var unum2 = usernum2.value;
    unum1 = parseFloat(unum1) ;
    unum2 = parseFloat(unum2);
    var result ;
    result = unum1 * unum2 ;
    result1.innerHTML = result ;
  });
}
else if(operation == "/")
{
  var usernum1 = document.getElementById("num1") ;
  var usernum2 = document.getElementById("num2") ;
  var button = document.getElementById("button");
  var result1 = document.getElementById("list");
  var list = document.getElementById("list1");
  list.innerHTML = " / ";

  button.addEventListener("click" , function(){
    var unum1 = usernum1.value;
    var unum2 = usernum2.value;
    unum1 = parseFloat(unum1) ;
    unum2 = parseFloat(unum2);
    var result ;
    result = unum1 / unum2 ;
    result1.innerHTML = result ;
  });
}
else
{
  alert("invalid input!!");
  alert("page will reload..");
  location.reload();
}
