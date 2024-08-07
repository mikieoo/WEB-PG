var userIdElement = document.getElementById('user-id');
var userPwElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler (event) {
    var userId = userIdElement.value;
    var userPw = userPwElement.value;

    if (userId !== 'qwer1234' || userPw !== '1234') {
        messageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        return;
    } 

    alert('로그인 성공!');
    messageElement.textContent = '';
     // alert(userId + ", " + userPw); 아이디랑 비밀번호가 잘들어갔는지 확인용
}

function userIdKeyPressHandler (event) {
    if (event.key === 'Enter') {
        userPwElement.focus();
    }
}

function userPwKeyPressHandler (event) {
    if (event.key === 'Enter'){
        onSignInButtonClickHandler();
    }
}

signInButton.addEventListener('click', onSignInButtonClickHandler);
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPwElement.addEventListener('keypress', userPwKeyPressHandler);
