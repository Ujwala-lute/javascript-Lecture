//<,>,<=,>=,==,!,!=
//output will always be boolean value
console.log['2 > 1', 2 > 1];
console.log['2 == 1', 2 == 1];
console.log['2 != 1', 2 != 1];

console.log['Z > A', 'Z'> 'A'];
console.log['a > A', 'a' > 'A'];
console.log['Glow > Glee', 'Glow' > 'Glee'];


console.log['2' > 1];
console.log['01' == 1];

console.log['true == 1', true == 1];
console.log['false == 0', false == 0]; // true,false vale get converted into number 8
console.log['' == false];  //true

//strict equality(===)
console.log['false === 0',false === 0];  //false
// sting non-equality(!==)
console.log['false !== 0', false !== 0];  //true

//Always use strict equality (===) operator for comparision instead of ==

console.log['null == undefined', null == undefined];  // true
console.log['null === undefined', null === undefined]; //true