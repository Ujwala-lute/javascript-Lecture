console.log(Math);
//const PI =Math.PI;
//const E =Math.E;
//const sqrt =Math.sqrt;


//object destructuring
const { PI, E, sqrt} =Math;
console.log(PI);
console.log(E);
console.log(sqrt(9));

/*const testUser ={
    id:1,
    name:'paranit',
    age:21,
   sayHi: function() {
    console.log('Hi' + this.name);
   }
    };

    const {id,name,age,sayHi} =testUser;
    console.log(name);
    console.log(age);
    console.log(id);

    sayHi();*/
    const  testUser1={
        id:1,
        name:'pranit',
        age:21,
        marks: 90
    };
    const testUser2 ={
        id:2,
        name:'sanjay',
        age:20,
       
        };

    const { name, age,marks = 0} = testUser1;
    console.log(name);
    console.log(age);
    console.log(marks);

    const circle1 = {
        name:'CircleX',
        radius:2
    };

    const circle2 = {
        name:'CircleY',
        radius:4
    };

    //const { radius, name} = circle1;
    const circleArea = (radius, name, precision = 2) =>{
        return `${name}: ${(PI * radius * radius).toFixed(precision)}`;
    };

    
    console.log(
        circleArea(circle1.radius,circle1.name)
    );
    console.log(
        circleArea(circle2.radius,circle2.name)
    );

    console.log('----------------Array destructuring--------');
    const arr = [1,2,3,4];
    //const first = arr[0];
    //const second = arr[1];

    //const [first, second] = arr;
    //console.log(first,second) ;
    //console.log(arr);

    const[first,second,fourth] = arr;
    console.log(first, second, fourth);
    
       