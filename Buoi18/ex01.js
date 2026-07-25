
// function doSomething() {
//     console.log('do st')''
// }

// cach viet ham kieu 2

const doSomething = () => {
    console.log('do st');
}

//lambda function
const doSomething2 = () => console.log('do st2');


doSomething();
doSomething2();

//=================================================

// function sum(a, b) {
//     return a + b;
// }
// const c = sum(32, 45);
// console.log(c);
//

const sum = (a, b) => a + b;

const sum2 = sum(45, 15);
console.log(sum2);

//===================================================

//Call back function

const doSt = (prev, next) => {
    prev();
    next();
}

const goToStore = () => {
    console.log('di den cua hang');
}

const buyThePhone = () => {
    console.log('mu DT');
}

const goHome = () => {
    console.log('ve nha');
}

// doSt(goToStore, buyThePhone);
doSt(() => goToStore(), () => buyThePhone());
