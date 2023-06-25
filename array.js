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

// Склейка элементов массива, метод приводит все элементы массива к строке и конкатенирует
// их в одну итоговую строку, разделяя переданным символом — разделителем.
.join('. ') .join() // по умолчанию запятая

//Метод slice возвращает копию всех или части элементов исходного массива. 
//Метод не изменяет исходный массив, а возвращает новый.
.slice() //копия всего массива
.slice(0, 2) // копия в пределах указанного диапазона(элемент 2 в него не попадает, т.к до 2-х)
.slice(1) // копия с какого то индекса и до конца

//метод .includes(), который возвращает булево значение о наличии указанного элемента в массиве
.includes()

//Метод .concat() используется для склеивания двух и более массивов в один
.concat() //первый_массив.concat(второй_массив[, третий_массив])

//Метод .reverse() располагает элементы в том же массиве в обратном порядке. ссылка на расположение не меняется, 
//для избежание такого используют метод .slice()
.reverse() .slice().reverse()

//Метод .find() осуществляет поиск элемента
.find() //массив.find((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
const titles = ['Die hard', 'Terminator'];
const favoriteFilmTitle = titles.find((title) => title.includes('hard'));
console.log(favoriteFilmTitle); // 'Die hard'

//Метод .findIndex() работает как .find(), только результатом вернёт не найденный элемент, а его индекс в массиве.
массив.findIndex() //массив.findIndex((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})

//метод .reduce() массив.reduce(колбэк_функция[, начальное_значение_результата]);
// параметры колбэк-функции: (результирующее_значение, текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_сам_массив) => {};
const goods = [
  {
    title: 'Кукуруза',
    quantity: 3,
    price: 99,
  },
  {
    title: 'Корм для кота',
    quantity: 2,
    price: 113,
  },
];

const sum = goods.reduce((total, product) => total + (product.quantity * product.price), 0);

console.log(sum); // 523


Array.from({},) // метод для создания массивов на основе на основе настроек и ф-ий

//Метод .forEach() - перебор массива
/*При использовании метода .forEach() стоит помнить одну важную деталь: 
работу метода нельзя остановить. Оператор break не поможет. Поэтому если вам требуется перебрать 
только часть массива, то .forEach() следует отодвинуть в сторонку и воспользоваться циклом for.*/
массив.forEach((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
const fruits = ['banana', 'apple', 'lemon', 'orange'];

fruits.forEach((value, index, array) => {
  console.log(value);
});
// Выведет в консоль:
//   'banana'
//   'apple'
//   'lemon'
//   'orange'

//value — текущий элемент массива;
//index — порядковый номер (индекс) текущего элемента массива;
//array — ссылка на сам массив.

массив.forEach((value) => {}) // если не нужен index или как то взаимодействовать с массивом, то можно опустить

// находим индекс объекта в массиве
.findIndex()

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
.reduce()
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

.map() // метод map всегда возвращает нам новый массив
.map(value, index, array) // см метод .forEach(), только он позволяет не просто перебрать все значения массива, а получить новый массив значений.
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})                          
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

let numbers = [1, 2, 3, 4];
console.log(numbers.length); // Выведет: 4
/*С помощью обращения к length можно получить последний элемент массива, 
даже если вы не знаете, сколько элементов в нём хранится:*/
numbers[numbers.length - 1]; // выведет последний элемент массива
console.log([numbers.length - 1]) // выведет длину массива []

let usersByDay = [812, 1360, 657, 1247, 1000];

console.log(usersByDay.length); // длина массива 
console.log(usersByDay[usersByDay.length - 1]); // последний элемент массива

/*
// Первый вариант: i < usersByDay.length
// usersByDay.length == 3

Подготовка: i = 0
1 итерация: i = 0; 0 < 3? да! действия первой итерации; i = 1
2 итерация: i = 1; 1 < 3? да! действия второй итерации; i = 2
3 итерация: i = 2; 2 < 3? да! действия третьей итерации; i = 3
4 итерация: i = 3; 3 < 3? нет! Завершаем цикл!

// Второй вариант: i <= usersByDay.length - 1
// usersByDay.length - 1 == 2

Подготовка: i = 0
1 итерация: i = 0; 0 <= 2? да! действия первой итерации; i = 1
2 итерация: i = 1; 1 <= 2? да! действия второй итерации; i = 2
3 итерация: i = 2; 2 <= 2? да! действия третьей итерации; i = 3
4 итерация: i = 3; 3 <= 2? нет! Завершаем цикл!*/

/*let expectedUsers = 1000;
let usersByDay = [812, 1360, 657, 1247];
// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);
for (let i = 0; i <= usersByDay.length - 1; i++) {
  console.log(usersByDay[i]);  
}*/

numbers = [1, 2, 3];

// Теперь в swap хранится 1
let swap = numbers[0];

// Теперь numbers такой [2, 2, 3]
numbers[0] = numbers[1];

// Теперь numbers такой [2, 1, 3]
numbers[1] = swap;


//Сортировка
/*let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

// Начните цикл здесь
// Сортировка с первого элемента
for (let currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
let minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
// Завершите цикл здесь
}*/

/*Медиа́на (от лат. mediāna «середина») или серединное значение набора чисел — число, 
которое находится в середине этого набора, если его упорядочить по возрастанию, то есть такое число, 
что половина из элементов набора не меньше него, а другая половина не больше.*/
/*Медиану легко получить у массива с нечётным количеством элементов. 
Для этого нужно правильно посчитать индекс среднего элемента. Попробуем вывести формулу:
Вычитаем из длины массива единицу и делим на два, и индекс найден.*/
let userByDay = [1, 2, 3, 4, 5];
console.log(userByDay);
let median;
if (usesByDay.length % 2 !== 0) {
  let medianIndex = (userByDay.length - 1) / 2;
    console.log(medianIndex);
    median = userByDay[medianIndex];
    console.log(median)
  }

  /*Если количество элементов чётное, то медиана считается как среднее значение от двух 
  элементов: левого и правого от середины. Делим длину массива на два и вычитаем единицу — левый индекс найден.
   Делим длину массива на два — правый индекс найден. Расчёт медианы для чётного количества 
   элементов в массиве добавляем в альтернативной ветке условия.*/

    usersByDay = [1, 2, 3, 4, 5, 6];
console.log(usersByDay);
 median;

if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  console.log(medianIndex);
  median = usersByDay[medianIndex];
  console.log(median);
}
else { let leftIndex = usersByDay.length / 2 - 1;
let rightIndex = usersByDay.length / 2;
    console.log(leftIndex);
      console.log(rightIndex);
      median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
        console.log(median);
  }

//задачка

/*  let expectedUsers = 1000;

let usersByDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers); // тут под капотом какая то ф-ия

// Суммируем посещаемость
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}

// Рассчитываем среднее значение посещаемости
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

// Сортируем массив

for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay)

// Рассчитываем медиану

let median;
if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
} else {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}
console.log('Медианная посещаемость: ' + median) 

if (median / averageUsers < 0.9) {
  console.log('Есть подозрения в подтасовках!');
} else {
  console.log('Подозрений в подтасовках нет!');
}*/


/* Напиши программу, которая будет анализировать мой суточный рацион.
Оформи программу в виде функции getDiet. Она должна принимать два параметра: 
массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.
Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить 
допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.*/

let food = [10, 20, 30, 40, 90] 
let limit = 100

function getDiet(food, limit) {
  let foods = 0;
  for (let i = 0; i < food.length; i++) {
    foods += food[i];
    if (foods > limit) 
    return i
  }
}

/*Напиши программу, которая на основе одного массива c багажом создаст другой.
Изначальный массив с багажом записан в переменную luggage.
Индекс элемента, с которого нужно начинать добавлять багаж (включая этот элемент), записан в переменную startIndex.
Количество элементов, которые нужно взять с собой записано в переменную quantity.
Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему).
Выбирай определённое количество элементов из массива luggage, начиная с элемента с индексом startIndex, и добавляй их в новый массив. 
Он должен быть записан в переменную chosenLuggage.
Для добавления элементов в новый массив можешь использовать команду array.push().*/

let luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];
let startIndex = 2;
let quantity = 3;
let chosenLuggage = [];

chosenLuggage = luggage.slice(startIndex, (startIndex + quantity))
