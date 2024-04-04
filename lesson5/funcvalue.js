var userName = 'John'; // 전역 변수
var userPW = '1234'; // 전역 변수

function account(userID, userPW)
{
    console.log(userID);
    console.log(userPW);
    var savedName = 'John'; 
    var savedPW = '1234';

    userPW = userPW || '0000'; // userPW가 undefined이면 '0000'으로 초기화

    if(userID == savedName && userPW == savedPW){
        console.log('반갑습니다. '+userID+'님');
    }
}

account(userName, userPW);

account(userName); //undefined