// ||, &&, !
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 

console.log(true && true); 
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 

//OR operator returns first truthy value
console.log(1 || 0);  //1 , since 1 is truthly value
let a =10;
console.log(2 || (a = 20)); 
console.log('a', a); 

console.log('h' || 10) ; 
console.log('' || 10); 

console.log('null || 10',null || 10); 
console.log(null || undefined || 10); 
console.log(nul || undefined || 10); 
console.log(null || undefined || 0); 
console.log(null || 0 || undefined) ; 
