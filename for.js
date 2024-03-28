let num = 0;
let day = "수요일";

if (num > 0) {
    console.log("양수입니다.");
} else if (num < 0) {
    console.log("음수입니다.");
} else {
    console.log("0입니다.");
}

switch (day) {
    case "월요일":
        console.log("회의가 있습니다.");
        break;
    case "화요일":
        console.log("운동을 합니다.");
        break;
    case "수요일":
        console.log("영화를 봅니다.");
        break;
    default:
        console.log("계획이 없습니다.");
}
// 배열 생성
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// for문을 이용한 배열 핸들링
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("배열의 합 (for문):", sum);

// while문을 이용한 배열 핸들링
sum = 0;
let j = 0;
while (j < numbers.length) {
    sum += numbers[j];
    j++;
}
console.log("배열의 합 (while문):", sum);

// continue문을 이용한 배열 핸들링
sum = 0;
for (let k = 0; k < numbers.length; k++) {
    if (numbers[k] % 2 === 0) {
        continue; 
    }
    sum += numbers[k];
}
console.log("홀수만 더한 배열의 합:", sum);

// break문을 이용한 배열 핸들링
let target = 3;
let isFound = false;
for (let l = 0; l < numbers.length; l++) {
    if (numbers[l] === target) {
        console.log("찾았습니다! 인덱스:", l);
        isFound = true;
        break; 
    }
}
if (!isFound) {
    console.log("해당하는 값이 배열에 없습니다.");
}

// 레이블을 이용한 break문과 continue문 사용
outerLoop: // 외부 루프에 레이블을 지정.
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] === 3) {
            console.log("배열에서 숫자 3을 찾았습니다.");
            break outerLoop; // 외부 루프를 탈출.
        }
        if (numbers[i][j] % 2 === 0) {
            continue; 
        }
        sum += numbers[i][j];
    }
}

console.log("찾은 숫자까지의 합:", sum);
