function power(x, n){
    let pow = 1;
    for(let i = 0; i < n; i++ ){
        pow = pow * x;
    }

    return pow;
}
let x = 4;
let n = 3;

let result = power(x, n);
console.log(result);