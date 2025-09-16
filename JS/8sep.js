const arrNum = [1,2,3,4,5,6];
const reduceOutput = arrNum.reduce((acc,el)=>{
    console.log(acc, 'iterating el',el)
    return acc * el
},0)

//Count the number of vowels in a string.
function Vowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(Vowels("Hello World")); 

//Write a function to chech if a string is a palindrame;

//From a string like "1,2,3,4"; return the sum of numbers;
function sumFromString(str) {
  return str
    .split(",")
    .map(Number)          
    .reduce((a,b) => a + b, 0);
}
console.log(sumFromString("1,2,3,4"));



console.log([] + []);
console.log({} + {});
console.log([] + {});
console.log({} + []);
console.log(undefined + undefined);
console.log(0 === false);
console.log('s' *2);
console.log('4'/2);


//Convert a snake_case string to camelcase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}
console.log(snakeToCamel("hello_world"));
console.log(snakeToCamel("this_is_a_test"));

const arr = [1,2,3,4,5];
arr.map((el,index)=>{
    console.log(el,index)
})


// const details = {

// }
// // const {age,firstname} = details;
// const {age : agee , firstname: fname,city='jaipur'} = details;
// console.log(agee,fname,city);

// const {address : {city}} = details;
// console.log(city);

const numbers = {
    a : 15,
    b : 18,
}
const sum = ({a,b})=> a + b;
console.log(sum(numbers));

const getRoles = ([role1,role2]) =>    
    console.log(role1,role2);
getRoles(['admin','user']) 


const number = [1,2,3,4,5];
console.log(...number);

//Note: USES CASES
const evenNumber = [2,4,6,8];
const evNumber = evenNumber;
console.log(evNumber,evenNumber)
evNumber[0] = 10;
console.log(evNumber,evenNumber)

const oddNumber = [1,3,5,7];
const odNO =[...oddNumber];
console.log(odNO,oddNumber);
odNO[0] = 19;
console.log(odNO,oddNumber);

//concat;
const frontend = ['HTML','CSS'];
const backend =['NODE','express']
const mernStack = [...frontend,...backend]
console.log(mernStack);
const updatedFrontend = ['FIGMA',...frontend,'Reactjs'];
console.log(updatedFrontend);

const product =['AC','TV','FRIDGE','MOBILE'];
const [a,...rest] = product;
console.log(a,rest);

function test(a,...rest){
    console.log(a,rest)
    rest.forEach((el)=>console.log(el));
}
test (1,2,3,4,5,6);

//Note: OBJECT METHODE
const course={
    name : 'javaScript',
    price : 100
}
//OBJECT.keys();
const keyOutput = Object.keys(course);
keyOutput.forEach((key)=>{

})
//OBJECT.values ;
Object.values(course).forEach(value=>console.log(value));


const entriesOutput = Object.entries(course);
console.log(entriesOutput);
entriesOutput.forEach(([key,value])=>{
    console.log(key,value);
})


//Object.freeze ;
const userDetails   = {
    email : 'user@gmail.com' ,
    password : 'user@123'
}
Object.freeze(userDetails); //completely freeze the object neither add new proptery nor update existing one 
userDetails.age = '34';
userDetails.email = 'user2@gmail.com'
console.log(userDetails);

//NOTE OBJECT.ASSIGN OOPS :
//check if any property exist on the object or not
console.log(userDetails.hasOwnProperty('email'))

//NOTE MATH OBJECT ;
//round up to the nearest integeer
console.log(Math.round(3.5));
//remove only decimal
console.log(Math.trunc(8.6));
console.log(Math.floor(4.8)); //lower integer
console.log(Math.ceil(4.8)); //upper integer
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))
//note generate the random number between 1 to 10;
console.log(Math.floor((Math.random()*10)+1));


//NOTE DATE METHODS :
const DATE = new Date();
console.log(DATE);


const getMonth = DATE.getMonth();
console.log(getMonth +1);
console.log(DATE.getDate());
console.log(DATE.getMinutes());
console.log(DATE.getFullYear());
console.log(DATE.getHours());
console.log(DATE.getSeconds());


//manually generate data and time ;
const newDate = new Date(2027,8,8,5,30,20) ;
console.log(newDate) ;
//formatting 
console.log(newDate.toDateString());
console.log(newDate.toTimeString());

//NOTE TIMESTAMP 
const timeStamp = Date.now() ;
console.log(timeStamp) ; //epoch timestamp
//conversion of the epoch timestamp to the normal date and time string ;
const timeAndDate = new Date(timeStamp);
console.log(timeAndDate);
console.log(timeAndDate.setMonth(4));
//try set function for all the minutes , year , sec , day 
console.log(timeAndDate);

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a,b,c)
}

function greet() {
  const firstNamee = 'test';
  let lastNamee = 'test2';
  var agee = 34;
}
greet();
console.log(agee);