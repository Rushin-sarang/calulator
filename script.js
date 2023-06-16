let num1 = "";
let num2 = "";
let operator = "";
let ans = "";
let eqlPressed = 0;
let isNum1Dec = 0;
let isNum2Dec = 0;
let numkeys = document.getElementsByClassName("nums");
let signkeys = document.getElementsByClassName("sign");
let equal = document.getElementById("equal");
let abv = document.getElementById("abv");
let bel = document.getElementById("bel");
let clear = document.getElementById("clear");
let bks = document.getElementById("backspace");
let dec = document.getElementById("decimal");

for(let i = 0;i<numkeys.length; i++){
    numkeys[i].onclick = (e) => {numericInp(e);}
    numkeys[i].onmouseenter = (e) => {hovereff(e)};
    numkeys[i].onmouseleave = (e) => {hovereff(e)};
}
for(let i = 0;i<signkeys.length; i++){
    signkeys[i].onclick = (e) => {signInp(e);}
    signkeys[i].onmouseenter = (e) => {hovereff(e)};
    signkeys[i].onmouseleave = (e) => {hovereff(e)}; 
}

bks.onclick = () => {bksp();}
bks.onmouseenter = (e) => {hovereff(e);}
bks.onmouseleave = (e) => {e.target.style.backgroundColor = null;}
dec.onclick = () => {decimal();}
dec.onmouseenter = (e) => {hovereff(e);}
dec.onmouseleave = (e) => {e.target.style.backgroundColor = null;}
clear.onclick = () => {clr();}
clear.onmouseenter = (e) => {hovereff(e);}
clear.onmouseleave = (e) => {e.target.style.backgroundColor = null;}
equal.onclick = () => {equaling();}
equal.onmouseenter = (e) => {hovereff(e);}
equal.onmouseleave = (e) => {e.target.style.backgroundColor = null;}

function decimal(){
    if(num2 == "" && operator == "" && isNum1Dec == 0){
        num1 += '.';
        isNum1Dec = 1;
        display();
    }else if(operator != "" && isNum2Dec == 0){
        num2 += '.';
        isNum2Dec = 1;
        display();
    }
}
function display(){
    if(eqlPressed == 0){
        if(operator == "" && num2 == "" && num1 == ""){
            abv.innerText = "";
            bel.innerText = "";
        }else if(operator == "" && num2 == ""){
            bel.innerText = num1;
        }else{
            abv.innerText = num1 + " " + operator;
            if(num2 == ""){
                bel.innerText = num1; 
            }else{
                bel.innerText = num2;
            }
        }
    }else{
        abv.innerText = num1 + " " + operator + " " + num2 + " =";
        bel.innerText = ans;
    }
}
function bksp(){
    if(operator == "" && num2 == ""){
        let temp = num1.slice(-1);
        if(temp == '.'){
            isNum1Dec = 0;
        }
        num1 = num1.slice(0, -1);
        display();
    }else if(num2 == ""){
        operator = "";
        display();
    }else {
        let temp = num2.slice(-1);
        if(temp == '.'){
            isNum2Dec = 0;
        }
        num2 = num2.slice(0 , -1);
        display();
    }
}
function clr(){
    num1 = "";
    num2 = "";
    operator = "";
    ans = "";
    isNum1Dec = 0;
    isNum2Dec = 0;
    display();
}
function hovereff(e){
    if(e.target.style.backgroundColor == 'rgb(0, 255, 255)'){
        e.target.style.backgroundColor = null;
    }else {
        e.target.style.backgroundColor = 'rgb(0, 255, 255)';
    }
}
function equaling(){
    if(num1 != "" && num2 != "" && operator != ""){
        ans = operate(parseFloat(num1), operator, parseFloat(num2));
        eqlPressed = 1;
        console.log(ans);
        display();
        eqlPressed = 0;
        isNum1Dec = 0;
        isNum2Dec = 0;
        num1 = "";
        num2 = "";
        operator = "";
    }else {
        console.log(0);
    }
}
function numericInp(e){
    if (operator == "" && num2 == ""){
        num1 += e.target.id;
        display();
    }else if (operator != "" && num1 != ""){
        num2 += e.target.id;
        display();
    }
}
function signInp(e){
    if(num1 != "" && num2 == ""){
        if(e.target.id == 'add'){
            operator = '+';
            display();
        }else if(e.target.id == 'sub'){
            operator = '-';
            display();
        }else if(e.target.id == 'multiply'){
            operator = '*';
            display();
        }else if(e.target.id == 'divide'){
            operator = '/';
            display();
        }else if(e.target.id == 'exp'){
            operator = '^';
            display();
        }
    }
}
function operate(num1, operator, num2){
    if(operator == '+'){
       return num1 + num2;
    }else if(operator == '-'){
        return num1 - num2;
    }else if(operator == '*'){
        return num1 * num2;
    }else if(operator == '/'){
        return num1 / num2;
    }else if(operator == '^'){
        return Math.pow(num1, num2);
    }
}