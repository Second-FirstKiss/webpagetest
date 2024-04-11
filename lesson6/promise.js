const pro1 = pid =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`pro1: ${pid}`);
        }, 1000);
    });
}

const pro2 = ppw =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`pro2: ${ppw}`);
        }, 1000);
    });
}

const id = 'james';
const pw = '1234';

pro1(id).
then((result) => {
    console.log(result);
    return pro2(pw);
}).
then((result) => {
    console.log(result);
}).
catch(err=>{
    console.log('err',err);
    return Promise.reject(err);
})
