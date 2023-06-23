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
  
