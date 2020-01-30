//alert('Im Workin. Im JS');

console.log('Im working. im js');
/*
let a = 220;
let b = a-5;

const hmInfo = {
    name:"MinSu",
    age: 22,
    gender:"Male",
    isHandsome:true
}

console.log(hmInfo);
console.log(hmInfo.gender);


const hkInfo ={
    name: "MinSu",
    age: 20,
    gender:"male",
    favMovies: ["Along the gods","LOTR","OldBoy"],
    favFood:[{
        name:"kimchi",
        fatty:false
    },
    {
        name:"cheese burger",
        fatty:true
    }]
}

console.log(hkInfo.favFood[0].name);

function sayHello(name,age){
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("dd",13);


const calcuator ={
    plus:function(a,b){
        return a+b;
    }

}

const plus = calcuator.plus(4,5);
console.log(plus);


const title = document.getElementById("title");

function handleResize(){
    title.style.color = "blue";
}

title.addEventListener("click",handleResize);


const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else{
        title.style.color=BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
   title.classList.toggle(CLICKED_CLASS);

}

function init(){
    title.addEventListener("click",handleClick);
}
init();