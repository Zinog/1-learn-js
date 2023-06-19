//Escape-последовательности в строках

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(myStr)

/* Длительность прогулки зависит от нескольких условий.
Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. 
А вот если дождя нет, всё зависит от температуры на улице:
Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.
Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.
В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.
В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.
Результат программы – время прогулки. Его необходимо записать в переменную minutes.*/
let temperature = 40;
let isRaining = false;
let minutes = 0;

if (isRaining) {
  console.log(minutes = 0);
}
if (!isRaining && temperature >= 10 && temperature < 15) {
    console.log(minutes = 30);
  }
if (!isRaining && temperature >= 15 && temperature < 25) {
    console.log(minutes = 40);
  }
if (!isRaining && temperature >= 25 && temperature <= 35) {
    console.log(minutes = 20);
  }
  if (!isRaining && temperature < 10 ) {
     console.log(minutes = 0); 
  }
    if (!isRaining && temperature > 36) {
     console.log(minutes = 0); 
  }

//или 

if (isRaining) minutes = 0;
if (!isRaining && temperature >= 10 && temperature < 15) minutes = 30;
if (!isRaining && temperature >= 15 && temperature < 25) minutes = 40;
if (!isRaining && temperature >= 25 && temperature <= 35) minutes = 20;
if (!isRaining && temperature < 10 ) minutes = 0;
if (!isRaining && temperature > 36) minutes = 0;

/*Программа должна считать сколько протеина я должен выпить за весь тренировочный период.
В чётные дни я пью 200 грамм. В нечётные 100 грамм.
Количество дней хранится в переменной days, количество протеина для приёма 
в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, 
а результат необходимо записать в переменную total, которая уже задана.*/

let days = 9; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина

for (let day = 2 ; day <= days ; day +=2) {
  total += evenDayAmount;
}

for (let day = 1 ; day <= days ; day +=2) {
  total += oddDayAmount;
}
  console.log(total)

/* Меня утомляют диета и тренировки, поэтому я хочу узнать, сколько 
ещё дней осталось заниматься, чтобы добиться нужного веса к мероприятию.
Входные данные: вес в начале и вес в конце.
Логика работы: если я тренируюсь и сижу на диете, то теряю 5% своей 
массы в день (на сухом корме не особо пожируешь, а тренировки суровые).
Просто посчитай, сколько дней понадобится провести в таком режиме и запиши 
количество в переменную days.*/

let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let daysi = 0;

while (initialWeight > targetWeight) {
    daysi++;
    initialWeight -= initialWeight * 0.05;
}

/* Мне нужна программа, которая от «грязной» зарплаты (зарплата 
до вычета налогов) посчитает примерную «чистую» зарплату (которая 
выдаётся на лапы).
Оформи программу в виде функции calculateSalary c одним параметром — 
величиной грязной зарплаты. Функция должна возвращать чистую зарплату.
Большая точность мне не нужна, просто считаем, что 35% величины грязной 
зарплаты составляют налоги, а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.*/
let calculateSalary = function (dirtySalary) {
  let tax = 0.35;
  if (dirtySalary >= 100000) {
    tax = 0.45;
    }
    let salaryTax = Math.round(dirtySalary * tax)
    salary = dirtySalary - salaryTax
    return salary;
  };
  calculateSalary (50000)

/** Функция для проверки длины строки.
* true, если строка меньше или равна указанной длине
* false, если строка длиннее.
*/
const GET_STRING_LENGHT = (testString, stringLength) => {
  if (testString.length > stringLength) {
    return false;
  }
  return true;
};

/** Функция для проверки, является ли строка палиндромом.
* true, если cтрока является палиндромом несмотря на разный регистр
* false, если это не палиндром.
* приводим к одному регистру, удалям пробеллы в строке
* делаем все буквы эл массива, меняем положение и удаляем все запятые и пробелы самого массива
*/
const CHECK_PALINDROM = (palindrome) => {
  if (palindrome.toUpperCase().replaceAll(' ', '') === palindrome.toUpperCase().replaceAll(' ', '').split('').reverse().join('')) {
    return true;
  }
  return false;
};

CHECK_PALINDROM('привет');
CHECK_PALINDROM('Лёша на полке клопа нашёл');

//или 

function isPalindrome(string) {
  string = string.toLowerCase().replaceAll(' ','');
  let newString = '';
  for (let i = string.length - 1; i >= 0; --i) {
    newString += string[i];
  } if (newString === string) {
    return true;
  }
  return false;
}
isPalindrome('Лёша на полке клопа нашёл ');

//или 

const checkPalindrome = function (palindrome) {
  const textClean = palindrome.toLowerCase().replaceAll(' ', '');
  const lastIndex = textClean.length - 1;

  for (let i = 0; i <= textClean.length / 2; i++) {
    if (textClean[i] !== textClean[lastIndex - i]) {
      return 'Не палиндром!';
    }
    return 'Палиндром!';
  }
};

console.log(checkPalindrome('У тени или мафии фамилии нетУ'));

/* Напиши программу, которая будет определять возрастную группу по возрасту.
Возраст записан в переменную age.
Проверяй возраст и записывай возрастную группу в виде строки в переменную ageGroup.
Если возраст до года включительно, то возрастная группа называется 'Котята'.
Если возраст от года (не включая это значение) до трёх лет включительно — 'Молодые коты'.
Если возраст от трёх лет (не включая это значение) до семи (включительно) — 'Коты средних лет'.
А если возраст от семи лет (не включая это значение) и больше — 'Почтенные коты'.*/

let age = 5;
let ageGroup;

if (age > 0 == age <= 1)  ageGroup = 'Котята';
if (age > 1 == age <= 3) ageGroup = 'Молодые коты';
if (age > 3 == age <= 7) ageGroup = 'Коты средних лет';
if (age > 7 == age <= 15) ageGroup = 'Почтенные коты';

 //или
if (age > 0 && age <= 1) ageGroup = 'Котята'
if (age > 1 && age <= 3) ageGroup = 'Молодые коты'
if (age > 3 && age <= 7) ageGroup = 'Коты средних лет'
if (age > 7) ageGroup = 'Почтенные коты'

//или 
function getAgeGroup(age) {
  if (age <= 1) return 'Котята'
  if (age <= 3) return 'Молодые коты'
  if (age <= 7) return 'Коты средних лет'
  return 'Почтенные коты'
}

/* Запрограммируй умные весы, чтобы они давали рекомендации в зависимости от веса.
Вес записан в переменную weight.
Рекомендацию записывай строкой в переменную recommendation.
Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.
Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
Если вес больше 5.5 кг – 'Пора на тренировку'.*/
let weight = 5;
let recommendation;

if (weight > 0 && weight < 4) recommendation = 'Пора перекусить'
if (weight >= 4 && weight <= 5.5) recommendation = 'Вес в норме'
if (weight > 5.5 ) recommendation = 'Пора на тренировку'

//или 
function getRecommendation(weight) {
  if (age < 4) return 'Пора перекусить'
  if (age <= 5.5) return 'Вес в норме'
   return 'Пора на тренировку'
}

/* Программа должна анализировать числа.
Если число делится на 3, результат работы программы — строка 'Fizz'.
Если число делится на 5 — строка 'Buzz'.
Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.
В остальных случаях результат работы программы — изначальное число.
Число записано в переменную number.
Результат работы программы записывайте в переменную taskResult.*/

let number = 15;
let taskResult;


if (number % 3 === 0) {
  taskResult = 'Fizz';
}  else {
  taskResult = number; 
  }
if (number % 5 === 0) {
  taskResult = 'Buzz';
}
if ((number % 3 === 0) && (number % 5 === 0)) { taskResult = 'FizzBuzz';
}

/* Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.
Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.
Найдите сумму всех чисел и сохраните результат в переменную sum.*/

let lastNumber = 10;
let sum = 0;

for (let i = 1; i <= lastNumber; i++) {
sum = lastNumber * (lastNumber + 1) / 2;
    
  console.log(sum);
}

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает 
их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:*/

function getNumber(str) { // бурум строку
  let newNum = ''; // создаем переменную троку
  for (let i = 0; i< str.length; i++) { //перебираем строку
      let num = parseInt(str[i]); // приводим каждый символ к числу
      if (Number.isNaN(num) === false ) { // проверяем на NaN
          newNum += num; // вписываем переменную если это число
      } 
  }
  return !newNum ? NaN : +newNum;  // возвращаем переменную 
}
console.log(getNumber('ECMAScript 2022'))

/* Напиши программу для определения типа транспорта на велосипедной парковке.
Оформи решение в виде функции checkVehicle с двумя параметрами: количество колёс 
у транспорта и вес этого транспорта. Названия параметров могут быть любыми.
Если колеса два и вес транспорта меньше 100 кг, это велосипед. Функция должна 
возвращать строку 'Парковка разрешена'.
В остальных случаях функция должна возвращать строку 'Вам здесь не место! Мяу!'.*/

let checkVehicle = (quantity, weight) => {
  if (quantity === 2 && weight < 100) {
    return 'Парковка разрешена';
    }     return 'Вам здесь не место! Мяу!';
  }

/* Я научился шифровать и мне нужна программа расшифровки.
Есть массив symbols, в котором хранится алфавит (буквы и другие символы).
Есть массив encodedSymbols, в котором хранится зашифрованное сообщение. 
Каждый элемент этого массива — это индекс символа из массива symbols.
Программа дешифровки должна переводить элементы из массива с шифровкой 
(encodedSymbols) в символы из массива алфавита (symbols) и склеивать из них расшифрованную строку. 
Эту строку запиши в переменную decodedMessage.*/
// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let decodedMessage = '';

for (let i = 0; i < encodedSymbols.length; i++) {
decodedMessage += symbols[encodedSymbols[i]];
};

/*  Я провожу тренировки и хочу понять, пройду ли квалификацию.
В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.
Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков
 и записать его в переменную averageBest. Квалификационное значение хранится в переменной qualificationDistance.
Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию 
и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.*/

let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

// сортируем массив по возрастанию
for (let i = 0; i <= attempts.length - 2; i++) {
  let minValue = attempts[i];
  
    for (let j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] < minValue) {
            minValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = minValue;
      attempts[j] = swap;
      } 
  }
}
console.log(attempts);

//берем среденее трех последних чисел из массива
averageBest = (attempts[attempts.length - 1] + attempts[attempts.length - 2] + attempts[attempts.length - 3]) / 3;

//средняя длина прыжков < или > квалификации 
if (averageBest > qualificationDistance) {
  qualified = true;
  } else {
      qualified = false;
    }


/* Напиши программу для расчёта стоимости проекта.
Назови функцию getPrice. У неё должно быть два параметра:
- время (в часах), которое нужно потратить на проект;
- булево значение, которое указывает на срочность проекта — true для срочного заказа и false для обычного.
Названия параметров могу быть любыми.
Для каждого проекта есть фиксированная ставка — 1500 рублей в час. Расчёт стоимости проектов выглядит так: 
время * ставка в час.
Есть несколько нюансов. Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.
А если время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.
В первую очередь проверяй срочность. Функция должна возвращать стоимость проекта.*/

let getPrice = function (hour, isRushOrder) {
  let fixedRate = 1500;
if (isRushOrder){
      fixedRate *= 2.5;
      hour /=2;
  }
  if (hour > 150) {
    fixedRate -= 250;
  }
  return hour * fixedRate;
    } 

//Расчитываем мили полета и вычислям как нам лучше накопить на отпуск

/*let calculateMiles = function (distance, isBusinessClass) {
  let percent = 0.18;
  if (isBusinessClass) {
    percent += 0.04;
  }
  if (distance > 3500) {
    percent += 0.15;
  }
  return distance * percent;
};

let calculateFlights = function (distance, isBusinessClass, milesTarget) {
  let miles = calculateMiles(distance, isBusinessClass);
  let flights = Math.ceil(milesTarget / miles);
  return flights;
};

// Добавляйте массив и цикл сюда
let targets = [3000, 7500, 15000];
for (let i = 0; i < targets.length; i++) { 
  let flightsVariantFirst = calculateFlights(3118, true, targets[i]);
  let flightsVariantSecond = calculateFlights(3617, false, targets[i]);
  
  console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' + flightsVariantFirst);
  console.log('Необходимое количество полётов в экономе до Лиссабона: ' + flightsVariantSecond);
  
  if (flightsVariantFirst > flightsVariantSecond) {
    console.log('Быстрей накопишь полётами в экономе до Лиссабона! Количество полётов: ' + flightsVariantSecond);
    } else {
      console.log('Быстрей накопишь полётами в бизнесе до Валенсии! Количество полётов: ' + flightsVariantFirst);
      }  
  }*/

/* Напишите программу, которая будет находить последний индекс элемента в массиве.
Массив записан в переменную numbers.
Элемент, последний индекс которого надо найти, записан в переменную number.
Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.*/

let numbers = [2, 4, 7, 4, 7, 2];
number = 4;

let lastIndex = numbers.lastIndexOf(number)

/* Мяу! Напиши программу, которая на основе одного массива с книгами создаст другой.
Массив книг записан в переменную books.
В переменную minNumber записано минимальное количество букв в названии книги (включительно), а в переменную maxNumber записано максимальное число букв (включительно). Чтобы найти количество букв в названии, используй команду строка.length.
Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему).
Результат запиши в переменную filteredBooks.
Для добавления элементов в новый массив используй команду array.push().*/

let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];

for (let i = 0; i < books.length; i++) {
    if (books[i].length >= minNumber && books[i].length <= maxNumber)
    filteredBooks.push(books[i]);
}

/*В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.*/
//1
getRepeats = function (arr) {
let word = {}
    for (let i=0; i< arr.length; i++) {
 word[arr[i]] =  arr.filter(x => arr[i] === x).length;
  }
 return word
 }
//2
let obj = {};
let getRepeats = function (array) {
  for (let i = 0; i <= array.length-1; i++){
    if (!(array[i] in obj)) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
        }
      }  
  return obj;
  }

/*Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей
 соответствует элемент из массива значений.*/

let getZippedArrays = function (keys, values) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}