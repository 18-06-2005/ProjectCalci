const output=document.querySelector(".output");
const answer=document.querySelector(".answer");
const plus=document.getElementById("+");
const minus=document.getElementById("-");
const mul=document.getElementById("*");
const div=document.getElementById("/");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const zero=document.getElementById("0");
const decimal=document.getElementById(".");
const equal=document.getElementById("=");
const ac=document.getElementById("c");
const btn=document.querySelector("button");
const body=document.querySelector("body");

plus.addEventListener("click",()=>{
    output.innerText= output.innerText+'+';
});
minus.addEventListener("click",()=>{
    output.innerText= output.innerText+'-';
});
mul.addEventListener("click",()=>{
    output.innerText= output.innerText+'*';
});
div.addEventListener("click",()=>{
    output.innerText= output.innerText+'/';
});
seven.addEventListener("click",()=>{
    output.innerText= output.innerText+"7";
});
eight.addEventListener("click",()=>{
    output.innerText= output.innerText+"8";
});
nine.addEventListener("click",()=>{
    output.innerText= output.innerText+"9";
});
four.addEventListener("click",()=>{
    output.innerText= output.innerText+"4";
});
five.addEventListener("click",()=>{
    output.innerText= output.innerText+"5";
});
six.addEventListener("click",()=>{
    output.innerText= output.innerText+"6";
});
one.addEventListener("click",()=>{
    output.innerText= output.innerText+"1";
});
two.addEventListener("click",()=>{
    output.innerText= output.innerText+"2";
});
three.addEventListener("click",()=>{
    output.innerText= output.innerText+"3";
});
zero.addEventListener("click",()=>{
    output.innerText= output.innerText+"0";
});
decimal.addEventListener("click",()=>{
    output.innerText= output.innerText+'.';
});
equal.addEventListener("click",()=>{
    try{
    output.innerText=eval(output.innerText)
    }catch (e) {
        alert(e.message);
      }
});
ac.addEventListener("click",()=>{
    output.innerText=" ";
});

let theme="light";
btn.addEventListener("click",()=>{
    if(theme==="light"){
        theme="dark"
        body.style.backgroundColor="black"
    }else{
        theme="light";
        body.style.backgroundColor="white"
    }
})
