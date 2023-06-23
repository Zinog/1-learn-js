/**
 * Проверка длины строки
 * @param {string} testString  — исходная строка
 * @param {number} stringLength - максимальное кол-во символов
 * @returns {boolean} — false, если является, либо true
 */

const getStringLenght = (testString, stringLength) => {
  if (testString.length > stringLength) {
    return false;
  }
  return true;
};

getStringLenght('хочется как можно меньше работать и больше веселиться', 35);

/**
 * Проверка строки на палиндром
 * @param {string} palindrome — исходная строка
 * @return {boolean} — true, если является, либо false
 */

const checkPalindrom = (palindrome) => {
  if (palindrome.toUpperCase().replaceAll(' ', '') === palindrome.toUpperCase().replaceAll(' ', '').split('').reverse().join('')) {
    return true;
  }
  return false;
};

checkPalindrom('привет');
checkPalindrom('Лёша на полке клопа нашёл');

/**
 * Проверка попадания встречи в рамки рабочего дня
 * @param {string} startDay — старт рабочего дня
 * @param {string} endDay — конец рабочего дня
 * @param {string} startMeeting — начало встречи
 * @param {number} timeMeeting - время встречи
 * @return {boolean} — true, если попадает, либо false
 */

const causeTime = (startDay, endDay, startMeeting, timeMeeting) => {
  if (parseFloat(startMeeting) + (timeMeeting / 60) <= parseFloat(endDay.replace(':', '.')) && startMeeting.replace(':', '.') >= parseFloat(startDay.replace(':', '.'))) {
    return true;
  } else {
    return false;
  }
};

(causeTime('08:00', '17:30', '14:00', 90));
(causeTime('8:0', '10:0', '8:0', 120));
(causeTime('08:00', '14:30', '14:00', 90));
(causeTime('14:00', '17:30', '08:0', 90));
(causeTime('8:00', '17:30', '08:00', 900));


//4-я домашка Первый вариант 

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

  const photoСomments = () => {//комент под фото, случайное кол-во 0 до 30
    const arrComments = [];
    const getListComments = getRandomInteger(0, 30); // Получаем количество коментариев

    for (let i = 0; i <= getListComments; i++) {

      const addMasseges = () => { // Функция добавления Masseges
        let stringMasseges = '';
        for(let j = 0; j < getRandomInteger(1, 2); j++) {
          const getMessage = massages[getRandomInteger(0, massages.length - 1)]; // Cлучайный коментарий из массива
          stringMasseges = `${stringMasseges + getMessage } `;
        }
        return stringMasseges.slice(0, -1);
      };

      arrComments.push({
        id: generateComments(), // id коментария по порядку
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, //строка - рандомный аватар
        massage: addMasseges(), // ф-ия по взятию случайных кометов
        name: userName[getRandomInteger(0, userName.length - 1)], // Имя рандомного автора.
      });
    }
    return arrComments;
  };

  return {
    id: generatePhotoId(), //число — id фото по порядку.
    url: `photos/${generatePhoUrl()}.jpg`, //строка — url фото по порядку
    description: descriptionFoto[getRandomInteger(0, descriptionFoto.length - 1)], //строка — описание фотографии взятое из массива.
    likes: getRandomInteger(15, 200), // число — рандомное количество лайков
    comments: photoСomments() // массив к которому пишем ф-ю отдельно
  };
};

// eslint-disable-next-line no-console
console.log(Array.from({length: 25}, photoPostedByUser));


/*второй вариант, мне нравится больше

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
    for (let i = 0; i < getRandomPositiveInteger(1, 30); i++) {
      arrComments.push({
        id: createIdGenerator(),
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
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
  likes: getRandomPositiveInteger(15, 200),
  comments: photoСomments()
  }
};

const numberOfUploadedPhotos = 25;
const getPhotoPostedByUser = () => Array.from({length: numberOfUploadedPhotos}, photoPostedByUser);
// eslint-disable-next-line no-console
console.log(getPhotoPostedByUser);
//console.log(Array.from({length: 25}, photoPostedByUser));*/