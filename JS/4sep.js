console.log(" reverse pyramid");

for(let i=5;i>=1;i--){
    let pattern='';
    for(let j=1;j<=5-i;j++){
        pattern += " "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*"
    }
    console.log(pattern);
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const sliceOutput = numbers.slice(2,6);
console.log(numbers.slice(1));
console.log(numbers.slice(-1));
console.log(sliceOutput);
console.log(numbers);

const evennumbers = [2,4,6,8,10,12];
const spliceOutput = evennumbers.splice(4,1);
console.log('return by splice',spliceOutput);
console.log('original array',evennumbers);

// arr=[2,3,4,5,75,65,4,4,5,6,7,54,4,4]
// const numbers = [2,3,4,5,75,]

const intro = ['My','Name','is','Aryan'];
console.log(intro.join(' '));

const frondend = [
    'html',
    'css',
    'js'
]
const backend = ['node','express'];
const output = frondend.concat(backend);
console.log(output)
console.log(frondend,backend);

const nestedArray = [1,2[3,4,[6,7],8],10];
console.log(nestedArray.flat(2));


function sayHi(){
    console.log('hi');
}
function greet(callback){
    console.log('callback fn sayHi',callback);
    callback()
}
greet(sayHi)


const add = [1,3,5,7,9];
const forEachOutput = add.forEach((el)=>{
    console.log(el);
})


const nm = [2,4,6,8,10];
const mappedOutput = nm.map((el)=>{
    return el * 2;
})
console.log(mappedOutput);


const product = [
    {name:'FRIDGE',category:'electronics'},
    {name:'iphone',category:'mobile'},
    {name:'s25 ultra',category:'mobile'},
];
    const filterOutput = product.filter(el=>el.category === 'mobile')
    console.log(filterOutput);
    const findOutput = product.find(el => el.category === 'mobile')
    console.log(findOutput);


    const oddNumberss = [3,5,7,9];
    const findIndexOutput = oddNumberss.findIndex((el)=>{
        return el > 5;
    })
    console.log(findIndexOutput);


const arrNum = [1,2,3,4,5,6];
const reduceOutput = arrNum.reduce((acc,el)=>{
    console.log(acc, 'iterating el',el)
    return acc * el
},0)