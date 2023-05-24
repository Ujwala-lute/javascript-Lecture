const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2]);
arr[3] = 40;
console.log(arr);

const arr1 = [1, 'Hello', true, [2,3],{key: 'vall'}];
console.log(arr1);

//arr = [20.30]; //not allowed, because we are changing the referance of arr

console.log(arr.length);
console.log('toString',arr);
console.log('toString',arr.toString());
console.log('join',arr.join(':'));

const arr2 = [1,2,3,4,5];
console.log('arr2', arr2);
arr2.push(6);
console.log('after push', arr2);
arr2.push(7,8);
console.log('after push', arr2);
arr2.pop();
console.log('after pop',arr2);

arr2.shift();
console.log('after shift',arr2);
arr2.unshift(-1, 0);
console.log('after unshift',arr2,);

const fruits = ['Apple', 'Mango', 'Banana','Orange'];
console.log('fruits', fruits);
fruits.splice(2, 0, 'Chikoo');
console.log('after splice add', fruits);
fruits.splice(3,1);
console.log('after splice delete',fruits);

console.log('slice method', fruits.slice(1,2));
console.log('after slice',fruits);

//merge arrays
const a = [1,2,3];
const b = [4,5];
const newArr = a.concat(b);
console.log(newArr);

const c= [6,7];
 newArr = a.concat(b, c);
console.log(newArr);

const multiDArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log('flat', multiDArr.flat());  //flaten the array



