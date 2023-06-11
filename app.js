//Escape-последовательности в строках

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(myStr)

/* Техническое задание
Мяу! Длительность прогулки зависит от нескольких условий.
Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. 
А вот если дождя нет, всё зависит от температуры на улице:
Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.
Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.
В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.
В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.
Результат программы – время прогулки. Его необходимо записать в переменную minutes.
*/
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

  /* Техническое задание
Мяу! Программа должна считать сколько протеина я должен выпить за весь тренировочный период.
В чётные дни я пью 200 грамм. В нечётные 100 грамм.
Количество дней хранится в переменной days, количество протеина для приёма 
в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, 
а результат необходимо записать в переменную total, которая уже задана.
*/

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

  /* Техническое задание
Мяу! Меня утомляют диета и тренировки, поэтому я хочу узнать, сколько 
ещё дней осталось заниматься, чтобы добиться нужного веса к мероприятию.
Входные данные: вес в начале и вес в конце.
Логика работы: если я тренируюсь и сижу на диете, то теряю 5% своей 
массы в день (на сухом корме не особо пожируешь, а тренировки суровые).
Просто посчитай, сколько дней понадобится провести в таком режиме и запиши 
количество в переменную days.
*/

let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let daysi = 0;

while (initialWeight > targetWeight) {
    daysi++;
    initialWeight -= initialWeight * 0.05;
}

/* Техническое задание
Мяу! Мне нужна программа, которая от «грязной» зарплаты (зарплата 
до вычета налогов) посчитает примерную «чистую» зарплату (которая 
выдаётся на лапы).
Оформи программу в виде функции calculateSalary c одним параметром — 
величиной грязной зарплаты. Функция должна возвращать чистую зарплату.
Большая точность мне не нужна, просто считаем, что 35% величины грязной 
зарплаты составляют налоги, а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.
*/
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
    if (testString.length <=  stringLength) {
       return true;
        }
         if (testString.length > stringLength) {
          return false;
        }
    }


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

/* Техническое задание
Мяу! Напиши программу, которая будет определять возрастную группу по возрасту.
Возраст записан в переменную age.
Проверяй возраст и записывай возрастную группу в виде строки в переменную ageGroup.
Если возраст до года включительно, то возрастная группа называется 'Котята'.
Если возраст от года (не включая это значение) до трёх лет включительно — 'Молодые коты'.
Если возраст от трёх лет (не включая это значение) до семи (включительно) — 'Коты средних лет'.
А если возраст от семи лет (не включая это значение) и больше — 'Почтенные коты'.
*/

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
    