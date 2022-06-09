
let res = document.getElementById("result");

function display(num){
    res.value += num;
}

function dispinto(){
    
    res.value +="*";
}

function Clearscreen(){
    res.value = "";
}

function delet(){
    res.value = res.value.slice(0, -1);
}


function Calc(){
    try{
        var result=eval(res.value);
        res.value=result;

    }
    catch(err){
        alert("Invalid");

    }
}

document.getElementById("result").onkeypress = function typing(event){
    let show = document.getElementById("result");
    if(event.key==="Enter"){
        (show.value==="") ? alert("Please Enter The Value First"): Calc();
   }
    else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
        alert("Please Enter Number Only :)");
       event.preventDefault();
   }
}
document.querySelector('#clearscreen').Calc();
var one = document.getElementById('1');
var two = document.getElementById('2');
var add = document.getElementById('add');
var result = document.getElementById('result');
one.click();
add.click();
two.click();
document.getElementById('result').Calc();
