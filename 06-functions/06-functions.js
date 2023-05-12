// Функции - блок кода, который можно выполнять многократно
let a = 5;
let b = 3;

let c;
c = a + b;
console.log(c); // 8

a = 8;
b = 12;

c = a + b;
console.log(c); // 20
console.log("--------------------------------------");

let a1 = 5;
let b1 = 3;

function sum(a1, b1) {
    const c = a1 + b1;
    console.log(c);
}

sum(a1, b1); // 8

a1 = 8;
b1 = 12;

sum(a1, b1); // 20
console.log("--------------------------------------");
// Функция может быть: именованной, присвоена переменной, анонимной, аргументом при вызове другой функции,
// значением свойства (метода) объекта
// Функция - это объект
function myFn(a2, b2) {
    let c;
    a2 = a2 + 1;
    c = a2 + b2;
    return c;
}

console.log(c);
// где myFn - имя функции, а между фигурными скобками находится тело функции. В скобках указываются параметры
// return - возвращает результат в программу для дальнейшей обработки. Без этого функция вернет undefined (не определено)
console.log("--------------------------------------");
console.log(myFn(10, 3)); // 14
// где 10, 3 - аргументы
// Самая короткая функция:
function myFn2() {
}

myFn2(); // undefined
console.log("--------------------------------------");
// Передача значения по ссылке
const personOne = {
    name: "Bob",
    age: 21,
};

function increasePersonAge(person) {
    person.age += 1;
    return person;
}

increasePersonAge(personOne); // передача объекта по ссылке
console.log(personOne.age); // 22
// Внутри функции не рекомендуется ммутировать внешние объекты
console.log("--------------------------------------");
const personOne1 = {
    name: "Bob",
    age: 21,
};

function increasePersonAge1(person) {
    const updatedPerson1 = Object.assign({}, person);
    updatedPerson1.age += 1;
    return updatedPerson1;
}

const updatedpersonOne1 = increasePersonAge1(personOne1);
console.log(personOne1.age); // 21
console.log(updatedpersonOne1.age); // 22
console.log("--------------------------------------");

// Колбэк функции
function anotherFunction() {
    //Действия
}

//В теле функции ниже вызывается колбэк функция
function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)

// Пример колбэк функции
function printMyName() {
    console.log('Bogdan')
}

setTimeout(printMyName, 1000)
// где setTimeout - встроенная функция, функция "printMyName" будет вызвана через 1000 миллисекунд
console.log("--------------------------------------");
// Правила работы с функциями:
// 1. Называть функции исходя из выполняемых задач
// 2. Одна функция должна выполнять одну задачу
// 3. Не рекомендуется изменять внешние относительно функции переменные