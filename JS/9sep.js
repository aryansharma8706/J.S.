var course = 'mern';
let product = 'phone';
console.log(window);

console.log(this.course);

function test(){
    console.log(this);
}
test();

const car = {
    brand : 'BMW',
    color : 'black',
    getDetails : function(){
        console.log(this);
        console.log(this.brand);
    }
}
car.getDetails();

const cars = {
    brand : 'BMW',
    color : 'white',
    getDetails : () =>{
        console.log(this.course);
        
    }
}
cars.getDetails();

console.log(b);
var b ;

test2();
function test2(){
    console.log('test2 function');
}

// console.log(c);
let c = 4;
console.log(c);
// window ,this keyword ,hoisting(concept)^


// DOM(Document Object Model)
console.log(document);
console.log(document.body);

// NOTE DOM manipulation (Selection,Update,remove,add)
// *1 SELECT(1)
const heading = document.getElementsByTagName('h1');
// console.log(heading);
console.log(heading[0]);
console.log(heading[1]);
console.log(heading);

const newHeadingDate = [...heading];
console.log(newHeadingDate);
// console.log([1,2,3,4,5]);

// (2)method
const para = document.getElementsByClassName('para');
console.log(para);

// queryselector
const newpara = document.querySelector('.para');
console.log(newpara);

