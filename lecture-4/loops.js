let i = 2;
while(i <= 10) {
    console.log(i * 2);
    i++;
}

const j = 1;
do{
    console.log(j * 2);
    j++;
}while(j <= 20);

for(let k = 1; k <= 10; k++){
    console.log('k', k*2);
}

for(let i = 1, j = 5; i < 5; i++){
    console.log('i',i);
    console.log('j', j * i);
}

let a = 1;
for( ; a<5;a++ ){
    console.log('a',a);
}

let b= 1;
for( ; b<5; ){
    console.log('b',b);
    b++;
}

//infinite loop
//for( ; ;){

//}

// infinite loop
//while(true){

//}

let sum = 8;
while(true){
    const val = prompt('Enter some number');

    if(!val) break;
    // sum = !val ? break : sum +
}