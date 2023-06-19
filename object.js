// объекты
// в объекте функция это метод 
const person = {
    name: 'Zina',
    age: 37,
    isProgrammer: true,
    languages: ['ru, en'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Compuled Key',
    greet(){             
        console.log('greet from person')
    },
    info() {
        console.info('Инфо про человека по имени:', this.name)
    }
}

//мы можем обращаться к полям объекта

console.log(person.name)
//console.log(person['age'])
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()

person.age++ //увеличиваем возраст(числовое начение)
person.languages.push('by') //добавляем эл в массив
//person['key_4'] = undefined
delete person['key_4'] //удаление ненужного ключа из объекта
console.log(person)

/*const name = person.name
const age = person.age
const languages = person.languages*/
//новый синтаксис
const {name, age, languages} = person
console.log(name, age, languages)

//итерация по ключам и объекту

/*for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
}*/

//другой вариант получения ключей

Object.keys(person).forEach((key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})                  //итерация по массиву .forEach

//контекст

person.info()

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    },
    keysAndValus() {
        //"key": value
        Object.keys(this).forEach(key => {
            console.log('"${key}": ${this[key]}')
        })
    }
}
const bound = logger.keys.bind(person)    //конструкция вызов методов у методов
bound()

//аналогичный метод

logger.keys.call(person) //сразу вызывает и возвращает ф-ию
logger.keysAndValus(person)

//встроенный метод Object.keys. результатом вызова такого метода будет массив ключей переданного объекта.

const filter = {
    'Задачи на сегодня': 3,
    'Просроченные': 2,
    'Выполненные': 388,
  };
console.log(Object.keys(filter));

//метод Object.values, только на выходе получаем массив значений, а не ключей.

filter = {
    'Задачи на сегодня': 3,
    'Просроченные': 2,
    'Выполненные': 388,
  };
console.log(Object.values(filter).join(', ')); // 3, 2, 388

// метод Object.entries возвращает массив массивов с парами ключ-значение.

console.log(Object.entries(filter));

//Используем метод массивов map, чтобы преобразовать структуру [['key', value], ...] в ['key — value', ...]
console.log(Object.entries(filter).map((filterItem) => filterItem[0] + ' — ' + filterItem[1]).join(', '));
//Задачи на сегодня — 3, Просроченные — 2, Выполненные — 388

//метод Object.assign когда нам нужно объединить несколько объектов.

filter = {
    'Задачи на сегодня': 3,
    'Просроченные': 2,
    'Выполненные': 388,
  };
  
  const anotherFilter = {
    'Назначенные на меня': 9,
    'Поставленные мной': 5,
  };
  
  console.log(Object.assign({}, filter, anotherFilter)); //объединение в пустой объект является хорошим тоном, чтобы не задумываться о передаче по ссылке............
  //{Задачи на сегодня: 3, Просроченные: 2, Выполненные: 388, Назначенные на меня: 9, Поставленные мной: 5}