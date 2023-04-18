// Объект - это ссылочный тип. Переменная, которой присваивается ссылка на объект содержит ссылку на объект, который находится в другом месте памяти.
const myCity = {
	city: "New York",
	popular: true,
	country: "USA",
};
//где city - имя свойства, а 'New York' - значение свойства.
console.log(
	"-------------------------------------------------------------------"
);
//Порядок свойств в объектах не принципиален. Два объекта ниже идентичны
const myCity0 = {
	city: "New York",
	popular: true,
	country: "USA",
};
console.log(
	"-------------------------------------------------------------------"
);
const myCity01 = {
	popular: true,
	country: "USA",
	city: "New York",
};
console.log(
	"-------------------------------------------------------------------"
);
//Как получать доступ к свойствам и их значениям
console.log(myCity.city); //Получаем свойства New York
console.log(myCity.popular); //Получаем свойства true
console.log(
	"-------------------------------------------------------------------"
);
//Точка между именем объекта и его свойством, например myCity.popular, называется точечная запись (Dot notation)
//Изменение значений свойств
const myCity1 = {
	city: "New York",
};
myCity1.city = "Las Vegas";
console.log(myCity1); //{city = 'Las Vegas'}
console.log(
	"-------------------------------------------------------------------"
);
//Добавление новых свойств в объект
const myCity2 = {
	city: "New York",
};
myCity2.popular = true;
console.log(myCity2); //{ city: 'New York', popular: true }
myCity2.country = "USA";
console.log(myCity2); //{ city: 'New York', popular: true, country: 'USA' }
console.log(
	"-------------------------------------------------------------------"
);
//Удаление свойств в объектах
const myCity3 = {
	city: "New York",
	popular: true,
	country: "USA",
};
delete myCity3.country;
console.log(myCity3); //{ city: 'New York', popular: true }
console.log(
	"-------------------------------------------------------------------"
);
//Доступ к значению свойства с использованием скобок
const myCity4 = {
	city: "New York",
};
myCity4["popular"] = true;
console.log(myCity4); //{ city: 'New York', popular: true }
const countryPropertyName = "country";
myCity4[countryPropertyName] = "USA";
console.log(myCity4); //{ city: 'New York', popular: true, country: 'USA' }
console.log(
	"-------------------------------------------------------------------"
);
//Вложенные свойства объектов
const myCity5 = {
	city: "New York",
	info: {
		isPopular: true,
		country: "USA",
	},
};
//где info - это вложенный объект
console.log(myCity5.info.isPopular); // True
delete myCity5.info["isPopular"];
console.log(myCity5); //{ city: 'New York', info: { country: 'USA' } }
console.log(
	"-------------------------------------------------------------------"
);
// Использование переменных
const name = "Bogdan";
const postsQty = 23;
const userProfile = {
	name: name,
	postsQty: postsQty,
	hasSignedAgreement: false,
};
// Если названия переменных совпадают с названиями свойств, то сокращенно можно писать так:
const name1 = "Bogdan";
const postsQty1 = 23;
const userProfile1 = {
	name1,
	postsQty1,
	hasSignedAgreement: false,
};
console.log(userProfile1);
// Сокращенные свойства рекомендуется размещать в начале объекта
console.log(
	"-------------------------------------------------------------------"
);
// Глобавльные объекты: window - веб-браузер, global - node.js. globalThis - унифицированный глобальный объект.
// Свойства глобальных объектов: console, window.console, global.condole
console.log(10);
//window.console.log(10); - работает в веб-браузере
globalThis.console.log(10);
global.console.log(10); // работает в node JS
console.log(
	"-------------------------------------------------------------------"
);
// Методы объекта - свойства объекта, которые содержат функции
const myCity6 = {
	city: "New York",
	cityGreeting: function() {
		console.log("Greetings!!!");
	},
};

myCity6.cityGreeting(); // Выведет Greetings!!! - это вызов метода
// где cityGreeting - это метод объекта myCity6

// Сокращенный формат записи методов:
const myCity7 = {
	city: "New York",
	cityGreeting() {
		console.log("Greetings!!!");
	},
};

myCity7.cityGreeting(); // Выведет Greetings!!!

console.log(
	"-------------------------------------------------------------------"
);
/* JSON - JavaScript object notation
 {
  "userId": 1,
  "id": 1,
  "title": "Test title",
  "status": {
	"completed": false
  }
}
JSON.parse() - позволяет распарсить и конверитровать JSON в объект
JSON.stringify() - переводит объект в JSON
*/
const post = {
	title: "My post",
	likesQty: 5,
};
console.log(post); // { title: 'My post', likesQty: 5 }
JSON.stringify(post);
const postStringified = JSON.stringify(post);
JSON.parse(postStringified);
console.log(JSON.parse(postStringified));
