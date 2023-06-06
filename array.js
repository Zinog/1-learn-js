// Массивы array

const cars = ['мазда', 'форд', 'бмв', 'мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

console.log(cars)

//metod

cars.push('рено') //добавление в конец массива
cars.unshift('волга') // добавление в начало списка массива

const firstCar = cars.shift() //удаляет первый эл из массива
const lastCar = cars.pop() // удаляет последний эл массива
console.log(firstCar)
console.log(lastCar)

console.log(cars.reverse()) // мутирует массив с конца в начало

const index = cars.indexOf('бмв') // программно находим индекс
cars[index] = 'porshe' // заменили индекс в массиве

// находим индекс объекта в массиве

const people = [
    {name: 'Zina', budget: 4200},
    {name: 'Lissa', budget: 3500},
    {name: 'Sima', budget: 1700}
]
/*const budget = people.findIndex(function(person) {
    return person.budget === 3500
})
console.log(budget)*/

const person = people.find(function(person) {
    return person.budget === 3500
})
console.log(person)

// самое простое решение этой ф-ии

const person1 = people.find(person => person.budget === 3500) 
console.log(person1)

/*let findedPerson
for (const person of people) {
    if (person.budget === 3500) {
        findedPerson = person
    }
}
console.log(findedPerson)*/ //если нет нужного условия, то переменная будет неопределенна

// метод reduce используется для вычисления на основе массива какого-либо единого значения

const allBudget = people.reduce((acc,person) => {
    acc += person.budget
    return acc
},0)  //считаем общую сумму бюджета

console.log(allBudget)

/*const allBudget1 = people.reduce((acc,person) => {
    if (person.budget > 2000) {
    acc += person.budget
    }
    return acc
},0)*/  //считаем сумму бюджета, у кого больше 2000, более старый метод

const allBudget1 = people
.filter(person => person.budget > 2000)
.reduce((acc,person) => {
    acc += person.budget
    return acc
},0)  //считаем сумму бюджета, у кого больше 2000

console.log(allBudget1)

console.log(cars.includes('мазда')) // проверяем наличие эл в массиве


// Задача 1

const text = 'привет, я тут учусь'
const reverseText = text.split('').reverse().join('') // делаем все буквы эл массива, меняем положение и удаляем все запятые и пробелы самого массива
console.log(text) // метот join соединяет в строчку через символ, по умолчанию запятая
console.log(reverseText)

//методы высокого порядка

const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})                          // метод map всегда возвращает нам новый массив
console.log(upperCaseCars)

const pow2Fib = fib.map(num => num ** 2) //возводим в корень второй степени
console.log(pow2Fib)
//равнозначные записи
const pow2 = num => num ** 2
const pow2Fib2 = fib.map(pow2)
console.log(pow2Fib2)

const sqrt= num => Math.sqrt(num)   //  возвращает квадратный корень числа
const pow2Fib3 = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib3)

//метод фильтрация масива, также создает новый массив

pow2Fib.filter(num => num > 20) //чтобы увидеть в консоле задаем const