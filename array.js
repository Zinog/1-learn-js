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

let numbers = [1, 2, 3, 4];
console.log(numbers.length); // Выведет: 4
/*С помощью обращения к length можно получить последний элемент массива, 
даже если вы не знаете, сколько элементов в нём хранится:*/
numbers[numbers.length - 1];
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
keks.plot(usersByDay, expectedUsers);

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

