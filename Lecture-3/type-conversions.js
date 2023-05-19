let value = true;
console.log(typeof value);
console.log(value);

value = String(value);
console.log(typeof value);
console.log(value);

value = '' + true;  //convert using concatination
console.log(typeof value);

console.log(1, typeof 1);
console.log(1, typeof String(1));

console.log(null, typeof null);
console.log(null, typeof String(null));

console.log(undefined, typeof undefined);
console.log(undefined, String(undefined));

//Numeric Conversion
console.log("6"+ "2");  //in strings, it will automatically get convertaed to number.
console.log("6" + "2");
console.log("abc"/"2");
console.log(typeof Number("30"));
console.log("a", typeof Number("a"));
console.log(+19, typeof +"10");

console.log(true, Number(true));     //1
console.log(false, Number(false));  //0

console.log(null, Number);  //0
console.log(undefined, Number(undefined));  //new


//Boolean Conversion
console.log("------Boolean Conversion--------");
console.log(1,Boolean(1));
console.log(0,Boolean(10));
console.log("Hello",Boolean("Hello")); //false



