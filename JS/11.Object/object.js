/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 함수를 가질 수 있음(메서드)
*/


/*
    객체 리터럴 : 자바스크립트에서 가장 일반적인 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
var emptyObj = {};

var hongGildong = {
    name: '홍길동',
    age: 23,
    address: '부산광역시',
    greeting: function () {
        console.log(`안녕 난 ${this.name}이야!`)
    }
};

console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greeting();

var name = '이형';
var age = 68;
var address = '서울특별시 운형궁';

var goJong = {
    name: name,
    age: age,
    address: address
}

console.log(goJong);

var goJong = {
    name,
    age,
    address
}

console.log(goJong);

console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체 생성
*/
var emptyObject = new Object();
console.log(emptyObj);
emptyObj.name = '이형';
console.log(emptyObj);
emptyObj.nmae = '고종'
console.log(emptyObj);


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function King (birth, name, myoName){
    this.birth = birth;
    this.name = name;
    this.myoName = myoName
}

var goJong2 = new King('1852-09-08', '이형', '고종');
console.log(goJong2);


console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 변수명일 경우에는 따옴표 생략 가능
    - 유효한 변수명이 아니면 반드시 따옴표를 사용해야함
*/

var chaemi = {
    'first name': '채원',
    'last-name': '장',
    age: 23
}

console.log(chaemi);

console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 [] 표기법으로 접근 가능
    - . 표기법은 유효한 이름일때만 사용 가능
    - [] 표기법은 모든 이름에서 사용 가능
    - 객체에 존재하지 않는 속성에 접근하려 하면 undefined를 반환
*/
console.log(chaemi.age);
console.log(chaemi['age']);
console.log(chaemi[age]);
console.log(chaemi['first name']);

var property = 'age';
console.log(chaemi[property]);

console.log('==============================');

/*
    속성 값 변경 :
    - 객체 속성에 접근하여 새로운 값을 할당하면 변경가능
    - 만약 존재하지 않는 속성에 접근하면 새로운 속성이 생성됨
*/


console.log('==============================');

/*
    속성 삭제 : 
    - delete 연산자를 사용하여 속성 제거 가능
*/
delete emptyObj.nmae;
console.log(emptyObj);

console.log('==============================');

/*
    for-in 문 : 
    - 객체 포함된 키를 순차적으로 접근할 수 있도록 함
    - 문자열로된 속성의 키가 반환됨
*/
for (var key in chaemi) {
    console.log(chaemi[key]);
}

console.log('==============================');

// var soonJong = goJong;
// soonJong.name = '이척';

// console.log(soonJong); // 얕은 복사 (주소를 복사)

soonJong = { // 깊은 복사
    name: goJong.name,
    age: goJong.age,
    address: goJong.address
}

soonJong.name = '이척';

console.log(soonJong);
console.log(goJong);