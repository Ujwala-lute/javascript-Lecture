let fruits = [];
fruits[12] ="Orange";
console.log(fruits.length); //length in js is highest index + 1
console.log(fruits);

const arr = [1,2,3];
console.log(arr.length);
arr.length = 6;  //if you incrase the length ,the array will increase making rest of the value empty
console.log(arr);
arr.length = 2; //if you decrase the length ,the array will truncate 
console.log(arr);