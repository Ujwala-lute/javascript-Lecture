//console.log(a);
//var a = 10;

var a;//all variables will be hoisted at the top of the file & they are declared with undefined value
console.log(a);
var a = 10;
console.log(a);


//let b;  // variable with let are hoisted but they are not yet defined (temporal deadzone)
// console.log(b);
// let b = 10;
// console.log(b);



{
    //let b;  //hoisted -> variable b is in temporal deadzone(memory is not allocated yet)
   // console.log(b);  // b is still in temporal deadzone
    let b = 10;   //b's temporal deadzone is completed
    console.log(b);  //b is not in temporal deadzone
}


{

    var a = undefined;//all variables will be hoisted at the top of the file & they are declared with undefined
console.log(a); //a is not in temporal deadzone
var a = 10;
console.log(a);
}
const userName = 'Ujwala';
const _userName = 'Ujwala';
const $userName = 'Ujwala';
const _= 'Ujwala';
const $ = 'Ujwala';





