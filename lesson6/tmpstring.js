const name = 'John';
const age = 25;
const height = 180;

console.log(`My name is ${name}, I am ${age} years old and ${height}cm tall.`); // My name is John, I am 25 years old and 180cm tall.

console.log('My name is ${name}, I am ${age} years old and ${height}cm tall.'); // My name is John, I am 25 years old and 180cm tall.

console.log('My name is ' + name + '\n' + 'My age is ' + age + '\n' + 'My height is ' + height + 'cm.'); // My name is John 

console.log(`My name is ${name}
My age is ${age}
My height is ${height}cm.`); // ` is a template literal, it allows you to write multi-line strings and to use string interpolation features to create strings.

const say = 'Hello';
const intro = `${say}! My name is ${name}.`;

console.log(intro); // Hello! My name is John.