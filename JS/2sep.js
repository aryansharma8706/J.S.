console.log(printName('Aryan'))

function printName(name){
    return 'My name is ${name}'
}

// console.log(sum());❌ not use 
const sum = function(a,b){
    return a+b;
}

const subs = (a,b) => {
     return b-a;
}

const greet = name => 'My name is ${name}';
console.log(greet('Aryan'));

const multiply = (a,b) => {
    const c=5;
    return b-a;
}

let user = null;
if(1){
    console.log('HELLO');
}

// const username = prompt('Enetr user Name')
// if(username === 'Aryan@8706'){
//     alert('login success');
// }
// else(username === ''); {
//     alert('Logon Unsuccess');
// }

const emoji='laugh';
switch(emoji){
    case 'laugh':
        case 'happy':
            console.log('laught and happy');
}

const test = () => 'test'
const jsArry = ['phone',0,null,undefined,true,test];

console.log(jsArry[3]);
console.log(jsArry[jsArry.length -1]());
console.log(jsArry.length);
console.log(typeof jsArry);
jsArry[1]=1;
console.log(jsArry);

const details = {
    firstName : 'TEST' ,
    age : 20 ,
    friends : ['Test1','Test2'],
};
console.log(details.firstName);
console.log(details.age);
console.log(details.friends);
console.log(details.friends[details.friends.length - 1]);

