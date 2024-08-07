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

var userNameElement = document.getElementById('user-name');
var userIdElement = document.getElementById('user-id');
var userPwElement = document.getElementById('user-password');
var userPwCheckElememt = document.getElementById('user-password-check');
var userTelnumElement = document.getElementById('user-telnumber');
var authnumElement = document.getElementById('user-auth-number');

var userNameMessageElement = document.getElementById('user-name-message');
var userIdMessageElement = document.getElementById('user-id-message');
var userPwMessageElement = document.getElementById('user-password-message');
var userPwCheckMessageElememt = document.getElementById('user-password-check-message');
var userTelnumMessageElement = document.getElementById('user-telnumber-message');
var userAuthnumMessageElement = document.getElementById('user-auth-number-message');

var userIdButtonElement = document.getElementById('user-id-button');
var userTelnumButtonElement = document.getElementById('user-telnumber-button');
var authnumButtonElement = document.getElementById('user-auth-number-button');
var signUpButtonElement = document.getElementById('sign-up-button');


function userIdInputHandler (event) {
    var userId = event.target.value;

    userIdMessageElement.textContent = '';
    userIdMessageElement.className = 'message';

    //if (userId) {
    //    userIdButtonElement.className = 'input-button active';
    //} else {
    //    userIdButtonElement.className = 'input-button disable';
    //}

    userIdButtonElement.className = 'input-button ' + (userId ? 'active' : 'disable');
}

function userIdButtonHandler (event) {
    var userId = userIdElement.value;
    if (!userId) return;

    var existedId = users.some(function (item, index) {
        return item.id === userId;
    });

    if (existedId) {
        userIdMessageElement.textContent = '이미 존재하는 아이디입니다.';
        userIdMessageElement.className = 'message error';
    } else {
        userIdMessageElement.textContent = '사용 가능한 아이디입니다.';
        userIdMessageElement.className = 'message primary';
    }
}

userIdElement.addEventListener('input', userIdInputHandler);
userIdButtonElement.addEventListener('click', userIdButtonHandler);