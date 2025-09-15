// 7 type of primitives data SVGUnitTypes
// NN BB SS U
// n = null;
// N=Number;
// S= String;
// S=Symbol;
// B= Boolean;
// B=BigInt;
// U=undefined;
let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = 'Teja';
let f = Symbol("I am a nice Symbol");
let g
console.log(a,b,c,d,e,f,g);
console.log(typeof f);

// Non primitive Data types - objects in js 
const item = {
    "Ajay":true,
    "shubh":false,
    "Lovish":67,
    "Rohan":undefined
}
console.log(item["dght"])