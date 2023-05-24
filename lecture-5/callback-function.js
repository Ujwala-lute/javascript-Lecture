function fun1(){
    console.log('fun1');
}

//cb is called as callback function
// callback function is passsed as 
function fun2(cb) {
    console.log('fun2');
    cb();
}

fun2(fun1);

functionask(question, yes, no) ;
    const answer = confirm(question);
    if(answer) {
        yes();
    }else{
        no();
    }


function showOk() {
    console.log('Ok');
}

function showCancel() {
    console.log('Cancelled');
}

ask('Do you want to delete this user?',showOk,showCancel);

ask(
    'Do you agree to the terms & condition?',
    function() { console.log('yes, I agree!'); },
    function() { console.log('No, I don\'t agree!');}
        
)
