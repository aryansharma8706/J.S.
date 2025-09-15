//Q.1 variable of type string and try to add a number to it. 
let a = "Arjun "
let b = 6
console.log(a+b)

// Q.2 typeof operation to find the datatype of the string in last question
console.log(typeof (a+b))

//Q.3 a const object in js can your change it to hold a number later
const a1 = {
    name: "Aryan",
    section: 1,
    isPrincipal:false
}
// a1=54
//Q.3 Ans.NO(nhi kr skte )
//Q.4 to add a new key to the const object in Q.3 
a1['Friend'] = 'Shubham'
a1["name"] = 'Lovish';
console.log(a1)

//Q.5 WAP to create a word-meaning dictionary of 5 words
const dict = {
    appreciate : "recognize the full worth if.",
    ataraxia : "a state of freedom from emotional and anxiety",
    yakka : "work especially hard work",
}
console.log(dict["yakka"])
console.log(dict.yakka)