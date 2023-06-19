/* ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов.*/

function createIdGenerator () {
    let lastGeneratedId = 0;
  
    return function () {
      lastGeneratedId += 1;
      return lastGeneratedId;
    };
  }
  
  const generatePhotoId = createIdGenerator();
  const generateCommentId = createIdGenerator();
  
  console.log(generatePhotoId()); // 1
  console.log(generatePhotoId()); // 2
  console.log(generateCommentId()); // 1
  console.log(generatePhotoId()); // 3
/* Универсальность такого подхода в том, что мы можем создавать столько генераторов, сколько нам нужно. 
И они не будут мешать друг другу, у каждого генератора будет своя переменная lastGeneratedId со значением.
Поэтому идентификаторы, созданные generateCommentId(), начинаются с единицы и не сбивают счёт generatePhotoId().*/


/* Напишите функцию-генератор для получения случайных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.*/

function getRandomInteger (min, max) {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;
  
    return Math.floor(result);
  }  //опишем функцию получения целого числа из переданного диапазона. Она нам потребуется для генератора.
  
  function createRandomIdFromRangeGenerator (min, max) {
    const previousValues = [];

    return function () {
        let currentValue = getRandomInteger(min, max); // 1. Получить случайное целое положительное число
        if (previousValues.length >= (max - min + 1)) {
            console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max); 
            return null;
        }  // условие, что делать, если перебраны все числа из диапазона.
            while (previousValues.includes(currentValue)) { 
                currentValue = getRandomInteger(min, max);
            }  // 2. Проверить на уникальность. Повторить шаг 1, пока не получим уникальное число
        previousValues.push(currentValue); // 3. Запомнить полученное число
        return currentValue; // 4. Вернуть результат
    };
  }

  //генерация случайного элемента массива
  const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

 