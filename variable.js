var anything = 'any';
console.log(anything);
var result = anything=='any'? 'any are you okay': 'are you okay any';
//자바스크립트는 c++에서 파생되어 삼항연산자도 사용가능하다.

//자바스크립트 엔진은 콜스택과 메모리힙으로 구성되어있다.
//콜스택은 원시형의 데이터가 저장되는 메모리 공간이다.
//메모리힙은 참조형 데이터가 저장되는 메모리 공간이다.
//배열또는 컬렉션도 오브젝트형인데, call by reference 방식을 사용한다.

// 객체의 선언과 데이터 할당
let person = {
    name: 'Kendrick lamar',
    age: 30,
    city: 'Compton'
};

// 객체의 내용 출력
console.log(person);

// 객체의 데이터 수정
person.age = 35;
person.city = 'Los Angeles';

// 수정된 객체의 내용 출력
console.log(person);

// 생성자 함수를 정의
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// new 연산자를 사용하여 객체를 생성
let person1 = new Person('Kendrick', 30, 'Compton');
let person2 = new Person('Kanye', 40, 'Chicago');

// 생성된 객체의 내용을 출력
console.log(person1);
console.log(person2);

