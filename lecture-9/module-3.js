const a = 10;

 function sayHi() {
    console.log('Hi');
}

 function sayHello(){
    console.log('Hello');
}

 const PI = Math.PI;

export{sayHi, sayHello, PI};

export default class User {
    constructor(name){
        this.name = name;
    }
}