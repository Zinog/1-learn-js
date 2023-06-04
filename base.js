// Мутирование

const name = 'Zinaida'
const age = 37
// const lastName = 'Antipova'

//  console.log('Имя человека: ' + name + ', а возраст: ' + age)

// const lastName = prompt('Введите фамилию')
//alert(name + ' ' + lastName)

// Операторы

let currentYear = 2023
const birthYear = 1985

const myAge = currentYear - birthYear

console.log(myAge)
console.log(currentYear++)
console.log(currentYear)

const a = 10
const b = 5
let c = 32
//c=c+a
//c +=a
c -=a

console.log(c)

// типы данных

const isProgrammer = true

console.log(typeof isProgrammer) //выводит тип данных 
console.log(typeof name)
console.log(typeof age)

// Приоретет операторов

const fullAge = 37

const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge) 

// Условные операторы

const courseStatus = 'pending' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('курс готов')
} else if (courseStatus === 'pending') {
    console.log('курс в разработке')
} else {
    console.log('курс не получился')
}

// Функции

function calculateAge(year) {
    return 2023 - year
}

console.log(calculateAge(1985))
console.log(calculateAge(2016))
console.log(calculateAge(1960))

function logInfoAbout (name, year) {
    const age = calculateAge(year)

    console.log ('Человек по имени ' + name + 'в возрасте ' + age + ' лет')
}

logInfoAbout ('Зинаида ', 1985)
logInfoAbout ('Алисия ', 2016)

// Массивы

 const cars = ['мазда', 'мерседес', 'форд']

 console.log(cars.length) //посмотреть сколько эл в массиве
 console.log(cars[1])
 console.log(cars[0])
 console.log(cars[2])

 cars[0] = 'порш' // меняем значение в массиве
 cars[3] = 'бмв'// добавляем значение в массив
 cars[cars.length] = 'мазда' //добавит в конец новый эл массива, запись в конце

 console.log(cars)

// Циклы

    //начинаем с нулевого эл и до конца списка, увеличивая на еденицу
 /*for (let i = 0; i < cars.length; i ++) {
    const car = cars[i]
    console.log(car)
 }*/

    // cинтаксис for of
 for ( let car of cars) {
    console.log(car)
 }

 // Объекты

 const person = {
    firstName: 'Zina',
    lastName: 'Antipova',
    year: 1985,
    languages: ['ru', 'en']
 }

 console.log(person.firstName)
 console.log(person['lastName'])
 const key = 'year'
 console.log(person[key])