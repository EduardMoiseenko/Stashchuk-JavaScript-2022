/* PascalCase - КэмелКейс для типов и классов
DB_PASSWORD - с подчеркиванием именуются константы, которые не меняются на протяжении жизни приложения. Значения известны до запуска приложения и они не меняются
camelCase - все остальные переменные. Используется такое написание чаще всего
Названия переменных должны быть осмысленные,не короткие,понятные

Объявление переменных:
let - изменяемая переменная на протяжении работы всего приложения. Появилась в ECMAScript 6
const - неизменяемая перменная на протяжении работы приложения. Появилась в ECMAScript 6
var - старый формат объявления переменных. Был до ECMAScript 6. Лучше не использовать
*/

/* //Объвление переменных через let
let a; //объявление переменной
const c = 10; //объявление и присваивание переменной
a = true; //присваивание переменной

//Объвление переменных через const
const c = 110; //новое значение нельзя присвоить
c = 20; //TypeError:Assignment to constant variable.

//объявление и присваивание
console.log(a); //переменная неопределена. Будет ошибка,если до не объявили данную переменную
let a; //объявление
console.log(a);
a = true; //присваивание
console.log(a);

let myName;
console.log(myName);

myName = "Bogdan";
console.log(myName);
console.log(console.log(10));

const myName = "Bogdan"; //обязательно нужно присвоить что-то при задании переменных через const. Просто объявить перменную нельзя
myName = ""; //нельзя переприсваивать значения const
console.log(myName);

//Типы
const a = 10; //число
const b = "abc"; //строка, можно использовать "" или ''
//Примитивные типы: string (строка), boolean (логический), number (число), null, undefined (неопределено), symbol (символ)
//Ссылочный тип: object (объект)
const objectA = {
  a: 10,
  b: true,
};

const copyOfA = objectA;
copyOfA.a = 20; //objectA.a ->20
copyOfA.c = "abc";

let d = 20;
console.log(d);*/

/* //Статическая типизация
String a = 'abc'
int b = 10
b = 'xyz' //Error. Это не JavaScript

//Динамическая типизация
a = "abc";
a = 10;

function a() {
  console.log("Hey there");
}

a(); //'Hey there'
a = 10;
a(); // Uncaught TypeError: a is not a function */

//Стрелочная функция
const a = () => {
  console.log("Hey there");
};

a(); //'Hey there'
a = 10; //TypeError: Assignment to constant variable. Нельзя присвоить новое значение

a();
