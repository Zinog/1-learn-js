var cardList = document.querySelector('.products'); //класс списка элементов <ul class="products">
console.log(cardList.children); // выведет всех детей списка

/**
 * Функция для создания элементов
 * @param {string} tagName имя тега
 * @param {string} className имя класса
 * @param {string} text текстовое содержимое элемента
 * @returns получившийся элемент
 */
let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;  
  };
  
  let button = document.querySelector('.button');
  //Функция addEventListener() говорит о том, что мы добавляем обработчик события на элемент.
  button.addEventListener('click', function (evt) {
    // Инструкции
    // Отменяем действие по умолчанию
  evt.preventDefault();
  evt.keyCode
  });
//Объект event — параметр функции-обработчика event = evt, содержит метод, который отменяет действие по умолчанию: preventDefault()
//                                                                         код клавиши которую нажал пользователь содержит keyCode
//'click' клик мышью
//'keydown' клик клавиатурой

//document.querySelector('.класс');             чтобы найти на странице элемент, нужно использовать этот метод
//document.querySelectorAll('селектор');        поиск всех элементов, подходящих по селектору, его можно перебирать с помощью цикла for.
//document.createElement('селектор');           создаём новый элемент
let card = document.createElement('li');
card.classList.add('card');
list.appendChild(card);
//элемент.classList.contains('класс');          проверяем наличие класса, метод вернёт true, если класс у элемента есть, и false, если класса нет.
//элемент.classList.remove('класс');            убирает с элемента тот класс, который указан в скобках
//элемент.classList.add('класс');               добавить элементу класс
//элемент.classList.toggle('класс');            убирает у элемента указанный класс, если он есть, и добавляет, если этого класса нет
//класс.appendChild(элемент);                   добавление нового элемента, вставляет его в конец родительского элемента
//button.textContent = 'Здесь был Кекс. Мяу!';  textContent хранит в себе текстовое содержимое элемента. Свойствам можно 
//                                              присваивать новые значения
//свойство dataset
//элемент.dataset.имяАтрибутаБезПрефикса
<div data-cat-name="Кекс"></div>
let element = document.querySelector('div');
console.log(element.dataset.catName);           // Выведет: Кекс
//onclick                                       Инструкции, которые должны будут выполниться, когда событие произойдёт, 
//                                              располагают между фигурных скобок
button = document.querySelector('button');
button.onclick = function() {
  console.log('Кнопка нажата!');
};
//onsubmit                                      отвечает за обработку отправки формы  
let form = document.querySelector('form');
form.onsubmit = function() {
  console.log('Форма отправлена!');
};
//свойство value.
let input = document.querySelector('input');
let paragraph = document.querySelector('p');
// Записываем данные из поля ввода в текстовое содержимое элемента
paragraph.textContent = input.value;
//Очищаем поле ввода
input.value = '';
//oninput oбработчик событий                      мы можем получить текст комментария ещё до того, как пользователь его отправит.
let textarea = document.querySelector('textarea');// Найдём поле ввода
textarea.oninput = function () {                  // Добавим обработчик событий
    console.log(textarea.value);                  // Выведем данные из поля ввода
};

//задача 
var popup = document.querySelector('.popup'); //находим класс
var openPopupButton = document.querySelector('.button-show'); //находим класс
var closePopupButton = popup.querySelector('.button-hide'); //находим класс

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--open'); //добавляем класс на открытие при взаимодеийдствии с кнопкой
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('popup--open'); //удаляем класс на открытие при взаимодеийдствии с кнопкой мышью
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('popup--open'); //удаляем класс на открытие при взаимодеийдствии с кнопкой клавиатурой
  }
});

/* Нужно оживить галерею с фотографиями товаров.
В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').
После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же,
 как и в миниатюре, только большего размера.
Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же,
 как и порядок миниатюр в разметке.*/
var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addThumbnailClickHandler = function (thumbnail, photo) {  //создаем функцию с замыканием
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]); //используем замыкание
}




let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  
  let newlist = document.createElement('li');
  newlist.textContent = input.value;
  
  if (priority.classList.contains('is-important')) {
    newlist.classList.add('is-important')
    list.append(newlist);
  } else {
    list.append(newlist);
    }
  
  form.value = '';
  };
  
/*Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.
При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.
Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

for (let key of keys) {
  key.onclick = function () {
  display.textContent = display.textContent + key.textContent;
  }
};

clear.onclick = function () {
  display.textContent = '';
};
