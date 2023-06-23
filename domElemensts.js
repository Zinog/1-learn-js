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
//элемент.classList.remove('класс');            убирает с элемента тот класс, который указан в скобках
//элемент.classList.add('класс');               добавить элементу класс
//элемент.classList.toggle('класс');            убирает у элемента указанный класс, если он есть, и добавляет, если этого класса нет
//класс.appendChild(элемент);                   добавление нового элемента, вставляет его в конец родительского элемента
//button.textContent = 'Здесь был Кекс. Мяу!';  textContent хранит в себе текстовое содержимое элемента. Свойствам можно 
//                                              присваивать новые значения
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



