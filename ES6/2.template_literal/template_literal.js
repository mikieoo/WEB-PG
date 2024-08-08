/*
    템플릿 리터럴 : 
    - 문자열 표현을 ``을 이용하여 표현하는 방식
    - + 연산자를 사용하여 연결하지 않고 인터폴레이션이라는 ${}형태로 표현식을 삽입 가능
*/
const King = {
    name: '이성계',
    tombName: '태조'
}

console.log(`조선의 1대 왕 ${King.tombName}의 이름은 ${King.name}이다.`);