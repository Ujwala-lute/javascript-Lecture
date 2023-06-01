let user1 ={
    address:{
        city:'Mumbai'
    }
};

/*let user2 = {
    address:{
        city:'Delhi'
    }
}*/
//let user2 ={};
console.log(user1.address.city);
let user2 = undefined;
//let user2 =null;

//console.log(user2.address);
//console.log(user2.address ? user2.address.city: '');
//console.log(user2.address && user2.address.city);

//?, => if the value before ?, is undefined/null is not undefined or null

console.log(user1.address?.city);
console.log(user2?.address?.city);



//?, => dosen't work on left hand side of assignment
//document.getElementById('header')?.innerHTML = 'My application';
const headerValue = document.getElementById('header')?.innerHTML;
console.log(headerValue);