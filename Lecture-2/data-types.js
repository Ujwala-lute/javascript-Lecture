//dynamic type language
let message = "Hello World";
message = 10;

//Number
let n = 10; //integer
n = 12.234;
n = Infinity;
console.log(n);
console.log(1/0);
n = -Infinity;
console.log(n);

n = NaN; // Not a Number
console.log(n);

console.log("some string"/2);

console.log('1' + 2);
console.log(1 + '2');
console.log(1 + 1 + '2'); //->2+'2->'22
console.log('1' +1 + '2'); // -> '11' + 2->'112

let x = '10';
//console.log(+x);
console.log(x + 20);
console.log(+x + 20);
console.log(Number(x) );
console.log(Number(x) + 20);

console.log(+'hello');
console.log(Number('hello'));

console.log(NaN + 1);

console.log(0.1+0.2);

//BigInt
let n1 = 10n;
console.log(typeof n);
console.log(typeof n1);

//String
const username = "Ujwala";
const str1 = 'Hello' + username;
const str2 = "Hello" + username;
console.log(str1);
console.log(str2);

//templete string
const str3 =`
<div>
    Hello ${username}
    ${4+5}
    ${Math.random()}
</div>
`;

console.log(str3);












