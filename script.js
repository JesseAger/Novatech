//if n is divisible by x and y

function checkDiv(n, x, y){
    var n;
    if (n%x === 0 & n%y === 0)
    console.log('true')
        else console.log('false');
}
checkDiv(100, 5, 3);

function makeNegative(num){
    if (num < 0)
        console.log('negative already')
            else num*-1 & console.log(num);
}

makeNegative(11)