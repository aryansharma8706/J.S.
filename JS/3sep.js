const details = {
    firstName : 'TEST' ,
    age : 20 ,
    friends : ['Test1','Test2'],
};
console.log(details.firstName);
console.log(details.age);
console.log(details.friends);
console.log(details.friends[details.friends.length - 1]);

const country='India';
switch(country){
    case 'India':
        console.log('INDIA');
        case 'Rajasthan':
            console.log('INDIA and RAJASTHAN');
}

for(let i=0;i<=10;i++){
    console.log(i);
}

const arr = [1,2,3,4,5,6];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let sum=0;
for (let num of arr){
    sum += num;
}
console.log('sum of arr : ',sum);

let max=0;
max = arr;
console.log('max of arr : ',max);

// for(let i=1;i<=10;i++){
//     if(i % 2 ==0){
//         console.log("it is even " + i);
//     }
//     else {
//         console.log('It is odd ' + i);
//     }


for(let i=1;i<5;i++){
            for(let j =1;j<5;j++){
                console.log('${i} -- ${j}');
            }
}

// function printTable(count,till){
//     for(let i=0;)
// }

for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<= i;j++){
        pattern += "*"
    }
    console.log(pattern);
}

console.log("reverse");

for(let i=5;i>=1;i--){
    let pattern='';
    for(let j=1;j<= i;j++){
        pattern += "*"
    }
    console.log(pattern);
}

console.log("pyramid");

for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<=5-i;j++){
        pattern += " "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*"
    }
    console.log(pattern);
}


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

console.log(" do while loop");

// let i = 0;
// const newArr = [1,2,3,4,5];
// while(i < newArr.length){
//     console.log(newArr);
//     i++;
// }

let j = 1
do{
    console.log('j : ${j}');
    j++;
}
while(j < 10)

// const product = ['mobile','tv','ac'];
// for(let product of product){
//     console.log(product)
// }
// for(let i in product){
//     console.log(i)
// }

// for(let key in car){
//     console.log(key);
//     console.log('${key : ${car[key]}')
// }

// const colors =['red','blue','green'];
// const pushOutput = Colors.push('white');
// console.log(pushOutput);


