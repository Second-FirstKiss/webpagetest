function account()
{
    var savedUser = '응애';
    console.log('반갑습니다. '+savedUser+'님');
}
account();
console.log(savedUser); //접근 불가능

function naver()
{
    console.log('naver 함수 진입');
    var savedUser = '응애';
    google();
    console.log('naver 함수 종료');
}

function google()
{
    console.log('google 함수 진입');
    var savedUser = '응애2';
    console.log('google 함수 종료');
}
naver();