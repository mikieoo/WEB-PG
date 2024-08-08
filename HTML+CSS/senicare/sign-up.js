var users = [
    {
        name: '이성계',
        id: 'taejo',
        password: 'qwer1234',
        telnumber: '01011111111'
    },
    {
        name: '이방과',
        id : 'jungjong',
        password: 'qwer1234',
        telnumber: '01022222222'
    },
    {
        name: '이방원',
        id: 'taejong',
        password: 'qwer1234',
        telnumber: '01033333333'
    }
];

var authNumberBoxElement = document.getElementById(('auth-number-box'));

var userNameElement = document.getElementById('user-name');
var userIdElement = document.getElementById('user-id');
var userPwElement = document.getElementById('user-password');
var userPwCheckElememt = document.getElementById('user-password-check');
var userTelnumElement = document.getElementById('user-telnumber');
var authnumElement = document.getElementById('auth-number');

var userNameMessageElement = document.getElementById('user-name-message');
var userIdMessageElement = document.getElementById('user-id-message');
var userPwMessageElement = document.getElementById('user-password-message');
var userPwCheckMessageElememt = document.getElementById('user-password-check-message');
var userTelnumMessageElement = document.getElementById('user-telnumber-message');
var userAuthnumMessageElement = document.getElementById('auth-number-message');

var userIdButtonElement = document.getElementById('user-id-button');
var userTelnumButtonElement = document.getElementById('user-telnumber-button');
var authnumButtonElement = document.getElementById('auth-number-button');
var signUpButtonElement = document.getElementById('sign-up-button');

var userName = '', userId = '', userPw = '', userPwCheck = '', userTelnumber = '', authNumber = '';
var isDuplicatedId = true, isPwMatched = false,  isEqualPw = false, isSendTel = '', isTelAuth = false;

var isPossible = false;

function checkPossible (){
    var isAllEnter = userName && userId && userPw && userPwCheck && userTelnumber && authNumber;
    var isAllCondition = !isDuplicatedId && isPwMatched && isEqualPw && isEqualPw && isSendTel && isTelAuth;
    var isPossible = isAllEnter && isAllCondition;

    if (isPossible) signUpButtonElement.className = 'button primary full-width';
    else signUpButtonElement.className = 'button disable full-width';
}


function userNameInputHandler (event) {
    userName = event.target.value;
    
    if(userName) {
        userNameMessageElement.textContent = '';
        userNameMessageElement.className = 'message';
    } else {
        userNameMessageElement.textContent = '이름을 입력해주세요.';
        userNameMessageElement.className = 'message error';
    }

    checkPossible();
}

function userIdInputHandler (event) {
    isDuplicatedId = true;
    userId = event.target.value;

    userIdMessageElement.textContent = '';
    userIdMessageElement.className = 'message';

    //if (userId) {
    //    userIdButtonElement.className = 'input-button active';
    //} else {
    //    userIdButtonElement.className = 'input-button disable';
    //}

    userIdButtonElement.className = 'input-button ' + (userId ? 'active' : 'disable');

    checkPossible();
}

function userPwInputHandler (event) {
    var pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;

    userPw = event.target.value;
    isPwMatched = pattern.test(userPw);

    userPwMessageElement.textContent = '';
    userPwMessageElement.className = 'message';

    if(!isPwMatched && userPw){ // userPw 값이 존재하면서 정규표현식에 맞지 않다면
        userPwMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.';
        userPwMessageElement.className = 'message error';
    }

    checkPossible();
}

function userPwCheckInputHandler (event) {
    userPwCheck = event.target.value;

    isEqualPw  = userPw === userPwCheck;
    if (isEqualPw || !userPwCheck) {
        userPwCheckMessageElememt.textContent = '';
        userPwCheckMessageElememt.className = 'message';
    } else {
        userPwCheckMessageElememt.textContent = '비밀번호가 일치하지 않습니다.';
        userPwCheckMessageElememt.className = 'message error';
    }

    checkPossible();
}

function userTelnumberInputHandler (event) {
    isSendTel = false;
    authNumberBoxElement.style.display = 'none';
    authnumElement.value = '';

    var pattern = /^[0-9]{11}$/;
    userTelnumber = event.target.value;

    var isMatched = pattern.test(userTelnumber);
    if (!userTelnumber) {
        userTelnumMessageElement.textContent = '';
        userTelnumMessageElement.className = 'message';
        userTelnumButtonElement.className = 'input-button disable';
    } else if(isMatched) {
        userTelnumMessageElement.textContent = '';
        userTelnumMessageElement.className = 'message';
        userTelnumButtonElement.className = 'input-button active';
    } else {
        userTelnumMessageElement.textContent = '숫자 11자 입력해주세요';
        userTelnumMessageElement.className = 'message error';
        userTelnumButtonElement.className = 'input-button disable';
    }

    checkPossible();
}

function userIdButtonClickHandler (event) {
    if (!userId) return;

    isDuplicatedId = users.some(function (item, index) {
        return item.id === userId;
    });

    if (isDuplicatedId) {
        userIdMessageElement.textContent = '이미 존재하는 아이디입니다.';
        userIdMessageElement.className = 'message error';
    } else {
        userIdMessageElement.textContent = '사용 가능한 아이디입니다.';
        userIdMessageElement.className = 'message primary';
    }

    checkPossible();
}

function userTelnumberButtonClickHandler (event) {
    var pattern = /^[0-9]{11}$/;

    var isMatched = pattern.test(userTelnumber);
    if(!isMatched) return;

    isSendTel = true;
    userTelnumMessageElement.textContent = '인증번호가 전송되었습니다.';
    userTelnumMessageElement.className = 'message primary';
    authNumberBoxElement.style.display = 'flex';

    checkPossible();
}

function authNumberInputHandler (event) {
    isTelAuth = false;
    authNumber = event.target.value;

    if (authNumber) authnumButtonElement.className = 'input-button active';
    else authnumButtonElement.className = 'input-button disable';

    checkPossible();
}

function authNumberButtonClickHandler (event) {
    if (!authNumber) return;

    isTelAuth = authNumber === '2684';

    if (isTelAuth) {
        userAuthnumMessageElement.textContent = '인증번호가 확인되었습니다.';
        userAuthnumMessageElement.className = 'message primary';
    } else {
        userAuthnumMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        userAuthnumMessageElement.className = 'message error';
    }

    checkPossible();
}

function signUpButtonClickHandler (event) {
    if (!isPossible) return;
    alert('회원가입!');
    location.href = './sign-in';
}

userNameElement.addEventListener('input', userNameInputHandler);

userIdElement.addEventListener('input', userIdInputHandler);
userIdButtonElement.addEventListener('click', userIdButtonClickHandler);

userPwElement.addEventListener('input', userPwInputHandler);
userPwCheckElememt.addEventListener('input', userPwCheckInputHandler);


userTelnumElement.addEventListener('input', userTelnumberInputHandler);
userTelnumButtonElement.addEventListener('click', userTelnumberButtonClickHandler);

authnumElement.addEventListener('input', authNumberInputHandler);
authnumButtonElement.addEventListener('click', authNumberButtonClickHandler);

signUpButtonElement.addEventListener('click', signUpButtonClickHandler);