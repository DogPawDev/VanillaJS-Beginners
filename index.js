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
*/

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
