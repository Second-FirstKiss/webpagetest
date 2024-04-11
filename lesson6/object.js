let dic = new Object();

dic.boy = "John";
dic.girl = "Jane";
dic.friend = "freind";

console.log(dic.boy); // John
console.log(dic.girl); // Jane
console.log(dic.friend); // friend

let dic2 = {
    boy: "John",
    girl: "Jane",
    friend: "friend"
};

console.log(dic2.boy); // John
console.log(dic2.girl); // Jane
console.log(dic2.friend); // friend

dic2.apple = "apple";
dic2.ten = 10;
console.log(dic2.apple); // apple
console.log(dic2.ten); // 10

delete dic2.apple;

console.log(dic2.apple); // undefined

let dic3 = {
    present : "current",
};

console.log(dic3.present); // current
dic3.present = "gift";
console.log(dic3.present); // gift

const dic4 = {
    present : "current",
};

console.log(dic4.present); // current
dic4.present = "gift";
console.log(dic4.present); // gift

//object's constant value can be changed

const dic5 = {
    present : "current",
};

dic5 = {}; // TypeError: Assignment to constant variable.
dic5.present = "gift";
console.log(dic5.present); // gift

//object's components are property, value

const unit = {
    attack : function(weapon)
    {
        return `Attack with ${weapon}`;
    }
}

console.log(unit.attack("sword")); // Attack with sword
console.log(unit.attack("bow")); // Attack with bow

let dic6 = {
    boy : "John",
    girl : "Jane",
    friend : "friend",
};

console.log(dic6['boy']); // John
console.log(dic6['girl']); // Jane
console.log(dic6['friend']); // friend

const { count } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dic7 = {
    boy : "John",
    girl : "Jane",
    friend : "friend",
};


rl.question('enter the product you want to buy', function(obj) {
    let basket = {
        [obj] : '10$',
    }
    console.log(basket[obj]);

    rl.close();
});

let id = 'james';
let pw = '1234';

let user = {
    id : id,
    pw : pw,
}

console.log(user.id); // james
console.log(user.pw); // 1234

let user2 = {
    id : 'james',
    pw : '1234',
    name : 'James',
    mobile : '010-1234-5678',
    country : 'Korea',
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}