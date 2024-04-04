function plus(a,b)
{
    return a+b;
}

var result = plus(2,3);
console.log(result);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkAge(age)
{
    if(age>=20)
    {
        return true;
    }
    else
    {
        return false;
    }
}

rl.question('나이를 입력하세요 : ', function(answer){
    var age = parseInt(answer);
    if(checkAge(age))
    {
        console.log('성인입니다.');
    }
    else
    {
        console.log('미성년자입니다.');
    }
    rl.close();
});

function Week()
{
    console.log('Mon');
    console.log('Tue');
    console.log('Wed');
    return;
    console.log('Thu');
    console.log('Fri');
    console.log('Sat');
    console.log('Sun');
}

console.log(Week() === undefined); //true