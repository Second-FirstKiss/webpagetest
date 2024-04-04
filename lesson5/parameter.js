function account(userID)
{
    var savedUser = '응애';
    if(userID == savedUser){
        console.log('반갑습니다. '+userID+'님');
    } else {
        console.log('로그인 실패');
    }
}

account('응애');