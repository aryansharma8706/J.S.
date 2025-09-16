const arrNum = [1,2,3,4,5,6];
const reduceOutput = arrNum.reduce((acc,el)=>{
    console.log(acc, 'iterating el',el)
    return acc * el
},0)


const cart = [{name: 'shirt',quantity: 3,price: 100},
    {name: 'jeans',quantity:2,price:1550}];
    console.log(cart);
   

    const arr = [1,2,3,4,5];
    // console.log(arr.toReverse());
    console.log(arr.reverse());
    // console.log(arr);


    const evenNumber = [2,4,6,8];
    const someOutput = evenNumber.some((ele)=>{
        return ele > 2;
    })
    console.log(someOutput);


    const randomArray =[1,2,3,40,5,6];
    console.log(randomArray.sort((a,b)=>{
        return a-b;
    }))


    const language = 'Javascript';
    console.log(language[0]);
    language[0] = 'z';
    console.log(language.length);
    console.log(language.charAt(7));
    console.log(language.toUpperCase());
    console.log(language.toLowerCase());
    console.log(language.slice(1,6));
    console.log(language.includes('j'));
    console.log(language.indexOf());


    const str = 'my name is Aryan';
    console.log(str.split(' '));


    const course = 'MERNSTACK';
    console.log(course.startsWith('MEZ'));
    console.log(course.endsWith('ACK'));


    const stack = '     MERNSTACK';
    console.log(stack.trimEnd());
    console.log(stack.trimStart());


    const frontend ='REACTION ARE ARE a LIBRARY';
    console.log(frontend.replace('ARE','CDGH'));


    const ccNumber ='1234';
    console.log(ccNumber.padStart(16,"*"));
    console.log(ccNumber.padEnd(16,"*"));


    const newstr = 'hello,this is js';
    console.log(newstr.search('hello'));


    const numbers = [1,2,3,4,5];
    const a = numbers[0];
    const b = numbers[1];
    console.log(a,b);


    const userInfo = ['teat@123','test@1223'];
    const [username,password] = userInfo;
    console.log(username,password);


    const evenNumbers = [2,4,6,8];
    const [x, ,y] = evenNumbers;
    console.log(x,y);


    const nestedArray = [1,2,[3,4,[5,6]]];
    const [k,m,[n,o,[p,q]]] = nestedArray;
    console.log(k,m,n,o,p,q);

    
    const courses = ['JS','REACT','DJANGO'];
    const [languages,library,framework = 'angular'] = courses;
    console.log(library);


    const gadget = {
        name : 'PSS',
        prize : '40000',
    }
    const {name,prize} = gadget;
    console.log(prize,name);


    const user =[{name : "test",email : "test@gmail.com", role : ['admin','user']},
    {name : "test2",email : "test2@gmail.com", role : ['Superadmin','admin']},];
    user.forEach((el)=>{
    const {email,role} = el;
    console.log(email)
    const [firstRole , secondRole] = role;
    console.log(firstRole,secondRole);
});
    