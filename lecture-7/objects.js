//object constructor
const user = new Object();
user.name = 'Ujwala';
console.log(user);

//object literal
const user1 = {
    name: 'Ajay'
};
user1.age = 20
console.log(user1);

delete user1.age;
console.log('alter deleting age',user1);

const mystery = "answer";
const user2 = {
    name: 'ujwala',
    age: 24,
    0: 'hello',
    let: 10,
    "like apples": true,
    [mystery]: 10,  //dynamic/computed property syntax
    [mystery + "Gift"]: 20
};

console.log('mystery', user2.mystery);  // undefined
console.log('mystery',user2.answer);  //10
console.log('mystery',user2[mystery]); //10
console.log(user2.name);
console.log(user2.age);
console.log(user2.let);
console.log(user2["like apples"]);
console.log(user2[0]);
console.log(user2["0"]);

//delete user2["like apples"];
console.log(user2);

const key = prompt("what do you want to know about the user?","name");
console.log(user2[key]);  //=>user2['name]

function makeUser(name, age) {
    return {
        name ,    //name :name,--->shorthand property syntax
        age
    };
}

const user3 = makeUser("ujwala",21);
console.log('user3',user3);


const user4 = {};
console.log(user4.name ===undefined);
console.log("name" in user4);  //"key" in object

const user5 = {
    name: undefined
};
console.log("user5.name === undefined", user5.name === undefined);  //true
console.log('"name" in user5', "name" in user5);  // true

//for ....in ----->loop through keys/properties of the object
for(let key in user2) {
    console.log(key, user2[key]);
}