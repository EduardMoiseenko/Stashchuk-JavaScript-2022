// Значения примитивных типов
const a = 10
let b = a //Копирование значения (copy by value)
b = 30
console.log(a) // Значение "а" не изменилось
console.log(b)
console.log("---------------------------------------------")

// Значения ссылочного типа
const person = {
    name: 'Bob',
    age: 21
}
// Мутация объекта, на который ссылается переменная "person"
person.age = 22
person.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true
console.log("---------------------------------------------")

// Мутирование копий
const person2 = {
    name: 'Bob',
    age: 25
}
// Копирование ссылки (copy by reference)
const person3 = person2

// Мутирование объекта, на который ссылается person3
person3.age = 26
person3.isAdult = true
// Мутация также отразилась на переменной "person2"
console.log(person2.age) // 26
console.log(person2.isAdult) // true
console.log("---------------------------------------------")

//Как избежать мутаций
// Вариант 1
const person4 = {
    name: 'Bob',
    age: 25
}

// Если у объекта есть вложенные объекты, то ссылки на них СОХРАНЯЮТСЯ
const person5 = Object.assign({}, person4)
person5.age = 26

console.log(person5.age) //26
console.log(person4.age) //25
console.log("---------------------------------------------")

// Вариант 2
const person6 = {
    name: 'Bob',
    age: 25
}

const person7 = {...person6} // где ... - оператор  разделения объекта на свойства
person7.name = 'Alice'

console.log(person7.name) // Alice
console.log(person6.name) // Bob
console.log("---------------------------------------------")

// Вариант 3
const person8 = {
    name: 'Bob',
    age: 25
}

const person9 = JSON.parse(JSON.stringify(person7))
// где parse - конвертация в объект, stringify конвертация в строук, (person7) - ссылки на вложенные объекты НЕ СОХРАНЯЮТСЯ
person7.name = 'Alice'

console.log(person9.name) // Alice
console.log(person8.name) // Bob
console.log("---------------------------------------------")