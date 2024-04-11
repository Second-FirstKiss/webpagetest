let plus = (a, b) =>{
    return a + b;
}

let result = plus(10, 20);
console.log('result:', result) // result: 30

let plus2 = (a, b) => a + b;

let result2 = plus2(10, 20);
console.log('result2:', result2) // result2: 30

let plus3 = a => a + 10;

let result3 = plus3(10);
console.log('result3:', result3) // result3: 20

let plus4 = () => 'No parameter';

let result4 = plus4();
console.log('result4:', result4) // result4: No parameter

