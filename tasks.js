/**
 * @typedef {Object} Player тип игрока который функция получает на вход в массиве
 * @property {string} name
 * @property {number} goals
 * @property {number} passes
 */
/**
 * @typedef {Object} PlayerStatistic статистика которая примешивается к игроку в результате работы функции
 * Отдельный тип, потому что в JSDoc нельзя удобно расширять типы
 * @property {number} percent
 * @property {number} coefficient
 */
/**
 * @typedef {Player & PlayerStatistic} PlayerWithStatistic игрок с примешанной статистикой
 */
function getStatistics(players) {
    let sumGoals = 0; //всех игроков 
 for (let i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    sumGoals += players[i].goals; 
}
for (let i = 0; i < players.length; i++) {
    players[i].percent = Math.round(players[i].goals * 100 / sumGoals)
    
}
return players
};

// еще рабочий вариант
let getStatistics = function (players) {
    let sum = players.reduceRight((previousValue, currentValue) => previousValue += currentValue.goals,0)
    for(player of players){
      player.coefficient = player.goals * 2 + player.passes
      player.percent =  Math.round(player.goals * 100 / sum)
    }
    return players
  };

  /* Техническое задание
Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: 
rooms (количество комнат), floors (этажи), material (материал для стен), 
coefficient (средняя площадь каждой комнаты).
Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.
Добавь в объект два метода: calculateSquare, который будет возвращать площадь дома, и calculatePrice,
 который будет возвращать стоимость строительства.
Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.
Цена строительства — произведение площади и стоимости материала дома.*/

let materialPrice = {
    'wood': 1000,
    'stone': 1500,
    'brick': 2000
  };
  
  let house = {
    rooms: 10,
    floors: 5,
    material: 'wood',
    coefficient: 10.5,
  
   calculateSquare : function () { 
     return house.rooms * house.coefficient * house.floors;
   },
   
   calculatePrice : function () {
  return house.calculateSquare() * materialPrice[house.material];
   }
  }; 
  
/* Техническое задание
Напишите универсальную программу, которая находит произведение всех чётных чисел из последовательности от 1 до n.
Число, до которого идёт последовательность (включительно), записано в переменную lastNumber
Найдите произведение всех чисел и сохраните результат в переменную multiplicationResult.*/

let lastNumber = 5;
let multiplicationResult = 1;

for( let i = 1; i<= lastNumber; i++) {
  if(i%2 === 0) {
    multiplicationResult= multiplicationResult*i;
  }
}

/* Техническое задание
Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.
Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.
Найдите сумму всех чисел и сохраните результат в переменную sum.*/
lastNumber = 10;
let sum = 0;

for (let i = 1; i <= lastNumber; i++) {
sum = lastNumber * (lastNumber + 1) / 2;
    
  console.log(sum);
}

/* Техническое задание
Напиши функцию calculatePressure, которая будет считать давление на глубине и возвращать это значение из функции.
Формула расчёта такая: давление = плотность жидкости * ускорение свободного падения * глубина.
У calculatePressure должно быть два параметра: плотность жидкости и глубина. Названия параметров могут быть любыми.
Ускорение свободного падения записывать в параметры не нужно. В формуле можно использовать среднее фиксированное значение — 9.8.
Результат вычислений округляй с помощью Math.round.*/

function calculatePressure(density, 
    depth) {
       let pressure = density * depth * 9.8;
       return Math.round(pressure);
       console.log(pressure)    
    }
    calculatePressure(1030, 3)

 /* Техническое задание
Мяу! Выручай! Мне нужно посчитать, каким способом я доберусь быстрее всего.
Средняя скорость транспорта находится в переменной averageSpeed и записана в километрах в час.
Расстояние записано в переменную routeDistance и указано в милях. Поэтому сначала нужно перевести его в километры.
В одной миле содержится 1.6 километров.
Посчитай сколько времени займёт поездка и запиши результат в переменную routeTime.
Округляй результат с помощью Math.round.*/

let routeDistance = 78;
let averageSpeed = 80;

routeDistance = routeDistance * 1.6;
Math.round(routeDistance);
let routeTime =Math.round(routeDistance / averageSpeed);
console.log(routeTime)

/*Напиши программу-переводчик.
Создай функцию translate с двумя параметрами.
Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.
Второй параметр — объект с данными, в котором хранится перевод слов.
Функция должна возвращать строку вида: 'понедельник по-английски: monday'.*/

let daysOfWeek = {
    'понедельник': 'monday',
    'вторник': 'tuesday',
    'среда': 'wednesday',
    'четверг': 'thursday',
    'пятница': 'friday',
    'суббота': 'saturday',
    'воскресенье': 'sunday'
  };
  
  function translate(string,translation) {
    let key = string
    return string + ' по-английски: ' + translation[key];
  }

 

//домашка


//Имена авторов
const userName = ['Анастасия', 'Анна', 'Мария', 'Елена', 'Дарья', 'Алина', 'Ирина', 'Екатерина', 'Арина', 'Полина',
  'Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил'];

//Текст комментария
const massages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

//Описание фотографии
const descriptionFoto = ['пляж', 'go to the beach', 'океан', 'девушка на пляже', 'веселый обед', 'black car', 'detox',
  'смузи', 'дикие люди', 'обувница', 'дорога на пляж', 'whate car', 'ужин', 'суши-кот', 'тапки', 'горы', 'хор', 'ретро авто',
  'фонарики', 'урбанизация', 'было очень вкусно', 'закат', 'крабик', 'фестиваль', 'нашествие инопланетян' ];

// Генерация случайных чисел
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//генерация случайного элемента массива
const getRandomArrayElement = (elements,) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Генерация порядкого номера
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator(); // id фото по порядку
const generatePhoUrl = createIdGenerator(); // Url фото по порядку
const generateComments = createIdGenerator(); // comments под фото по порядку

const photoPostedByUser = () => {
  const photoСomments = () => {
    const arrComments = [];
    for (let i = 0; i < getRandomInteger(1, 30); i++) {
      arrComments.push({
        id: generateComments(),
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: getRandomArrayElement(massages),
        name: getRandomArrayElement(userName)
      });
    }
    return arrComments;
  };

  return {
  id: generatePhotoId(),
  url: `photos/${generatePhoUrl()}.jpg`,
  description: getRandomArrayElement(descriptionFoto),
  likes: getRandomInteger(15, 200),
  comments: photoСomments()
  }
};
console.log(Array.from({length: 25}, photoPostedByUser));

/*const createPhotoArray = Array.from({length: 25}, photoPostedByUser);
// eslint-disable-next-line no-console
console.log(createPhotoArray);*/

/*Напишите функцию, которая принимает время начала и конца рабочего дня,
 а также время старта и продолжительность встречи в минутах и возвращает true,
  если встреча не выходит за рамки рабочего дня, и false, если выходит.*/
//больше строк  
 causeTime = (startDay, endDay, startMeeting, timeMeeting) => {
  let start = startDay.replace(":", ".");
  let end = endDay.replace(":", ".");
  let meeting = startMeeting.replace(":", ".");

  let endMeeting = parseFloat(meeting) + (timeMeeting / 60);

  if (endMeeting <= parseFloat(end) && meeting >= parseFloat(start)) {
    return true
  } else {
    return false
  }
}
console.log(causeTime('08:00', '17:30', '14:00', 90));
console.log(causeTime('8:0', '10:0', '8:0', 120));
console.log(causeTime('08:00', '14:30', '14:00', 90));
console.log(causeTime('14:00', '17:30', '08:0', 90));
console.log(causeTime('8:00', '17:30', '08:00', 900))
//тоже самое, но меньше строк


/**
 * Проверка попадания встречи в рамки рабочего дня
 * @param {string} startDay — старт рабочего дня в формате"HH:MM"
 * @param {string} endDay — конец рабочего дня в формате"HH:MM"
 * @param {string} startMeeting — начало встречи в формате"HH:MM"
 * @param {number} timeMeeting - время встречи в минутах
 * @return {boolean} — true, если попадает, либо false
 */
const causeTime = (startDay, endDay, startMeeting, timeMeeting) => {
  let endMeeting = parseFloat(startMeeting) + (timeMeeting / 60);

  if (endMeeting <= parseFloat(endDay.replace(":", ".")) && startMeeting.replace(":", ".") >= parseFloat(startDay.replace(":", "."))) {
    return true
  } else {
    return false
  }
}
console.log(causeTime('08:00', '17:30', '14:00', 90));
console.log(causeTime('8:0', '10:0', '8:0', 120));
console.log(causeTime('08:00', '14:30', '14:00', 90));
console.log(causeTime('14:00', '17:30', '08:0', 90));
console.log(causeTime('8:00', '17:30', '08:00', 900))

//создание фалов js
/*
1) data.js - мы переименновываем main.js
2) пишем в начале докумета
    import {getRandomInteger} from './util.js';
    import {getRandomArrayElement} from './util.js';
    import {getIdGenerator} from './util.js';
  в конце докумета
    export {getPhotoPostedByUser};
3) удаляем 
    Генерация случайных чисел
    генерация случайного элемента массива
    Генерация порядкого номера

4) function.js добавить функцию causeTime

5) main.js создаем и подключаем в индексе с  <script src="js/main.js" type="module"></script>
6) пишем
  import {getPhotoPostedByUser} from './data.js';
  import './function.js';

  // eslint-disable-next-line no-console
  console.log(getPhotoPostedByUser());
7) util.js создаем файл 
8) переносим 
    Генерация случайных чисел
    генерация случайного элемента массива
    Генерация порядкого номера
  в конце документа пишем
    export {getRandomInteger};
    export {getRandomArrayElement};
    export {getIdGenerator};

*/