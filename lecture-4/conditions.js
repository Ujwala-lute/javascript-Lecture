if(5 < 6){
    //if condition is true ,then this block will be executed
    console.log('5 is lesser than 6');
}

if(10 > 6){
    console.log('10 is greater than 6');
}

const time= 19;
if(time < 12) {
    console.log('Good Morning!');

}else if(time >=12 && time <= 16){
    console.log('Good afternoon!');
}else if (time > 16 && time <= 22){
    console.log('Good evening!');

}else if(time > 22 && time <= 24){
    console.log('Good Night!');
}else{
    console.log('Invalid time');
}

if(false) console.log('value is true');
console.log('outside if')

let greet = '';if(time > 12){
    greet ='Good Evening';
}else{
    greet = 'Good Morning'
}
console.log(greet);

//ternary operator
//let greet = time > 12 ? 'Good evening!' : 'Good morning!';
//console.log(greet);

const num = 2;
switch (num) {
    case 1:
        console.log('Jan');
        break;
        case 2:
            console.log('Feb');
            break;
            case 3:
        console.log('Mar');
        case 4:
        console.log('Apr');
        break;
        case 5:
        console.log('May');
        break;
        case 6:
        console.log('Jun');
        break;
        default :
        console.log('Invalid month');
}
