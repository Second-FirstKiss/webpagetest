const color = ['red', 'green', 'blue'];

let r = color[0];
let g = color[1];
let b = color[2];

console.log(r, g, b); // red green blue

let user = {
    id : 'james',
    pw : '1234',
    name : 'James',
    age : 25,
};

let id = user.id;
let pw = user.pw;
let name = user.name;
let age = user.age;
console.log(id, pw, name, age); // james 1234 James 25

let [r2, g2, b2] = color;
console.log(r2, g2, b2); // red green blue

[b2, g2, r2] = [r2, g2, b2];
console.log(r2, g2, b2); // blue green red

[b2, g2, r2] = ['red', 'green', 'blue'];
console.log(r2, g2, b2); // red green blue

const [A,B,C] = ['c#', 'javascript'];
console.log(A, B, C); // c# javascript undefined

const [A2, B2, C2 = 'C'] = ['c#', 'javascript'];
console.log(A2, B2, C2); // c# javascript C

const [A3, ,C3, D3] = ['c#', 'javascript', 'python', 'java'];
console.log(A3, C3, D3); // c# python java

const [A4, ...rest] = ['c#', 'javascript', 'python', 'java'];
console.log(A4, rest); // c# [ 'javascript', 'python', 'java' ]
console.log(rest); // [ 'javascript', 'python', 'java' ]
console.log(rest[0]); // javascript
console.log(rest.length); // 3

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

let user3 = {
    id : 'james',
    pw : '1234',
    name : 'James',
    age : 25,
};

let {id2, pw2, name2, age2} = user;
console.log(id, pw, name, age); // james 1234 James 25

let {id3, pw3, name3, age3} = {id3 : 'james', pw3 : '1234', name3 : 'James', age3 : 25};
console.log(id3, pw3, name3, age3); // james 1234 James 25

let user4 = {
    name : 'James',
    age : 25,
};

let {id4 = 'james', pw4 = '1234', name4, age4} = user4;

console.log(id4, pw4, name4, age4); // james 1234 James 25

let user5 = {
    id5 : 'james',
    pw5 : '1234',
    name5 : 'James',
    age5 : 25,
};

let {id5, ...rest2} = user5;

console.log(id5, rest2); // james { pw5: '1234', name5: 'James', age5: 25 }