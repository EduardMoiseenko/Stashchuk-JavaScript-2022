// Объект - это ссылочный тип. Переменная, которой присваивается ссылка на объект содержит ссылку на объект, который находится в другом месте памяти.
const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};
//где city - имя свойства, а 'New York' - значение свойства.

//Порядок свойств в объектах не принципиален. Два объекта ниже идентичны
const myCity0 = {
  city: "New York",
  popular: true,
  country: "USA",
};

const myCity01 = {
  popular: true,
  country: "USA",
  city: "New York",
};

//Как получать доступ к свойствам и их значениям
console.log(myCity.city); //Получаем свойства New York
console.log(myCity.popular); //Получаем свойства true
//Точка между именем объекта и его свойством, например myCity.popular, называется точечная запись (Dot notation)
//Изменение значений свойств
const myCity1 = {
  city: "New York",
};
myCity1.city = "Las Vegas";
console.log(myCity1); //{city = 'Las Vegas'}
