/*setTimeout(() => {
    console.log('After 2 seconds');
},2000);

/*function fun1(){
    console.log('fun1');
}

fun1();*/
//console.log('Done!');

console.time('timer1');
setTimeout(() => {
    console.log('After 2 seconds');
},500);

//Do Not ever write such blocking codes in main thread

for(let i = 0; i < 1e7;i++){}
console.log('Done!');