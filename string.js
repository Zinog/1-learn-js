// String

const name = 'Zinaida'
const age = 37

const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.`
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'a' :'b'} лет.`
console.log(output)

console.log(name.length) //количество символов в слове
console.log(name.toLocaleUpperCase()) //верхний регистр
console.log(name.toLocaleLowerCase()) //нижний регистр
console.log(name.charAt(2)) // выводит нужный символ
console.log(name.indexOf('!')) //если такое значение отсутствует, выведет -1
//console.log(name.toLocaleLowerCase().startsWith(zina))
//console.log(name.startsWith(Zina))

const strin = 'Кекс';

console.log(strin.at(0));
console.log(strin.at(1.5));
console.log(strin.at(-2));
console.log(strin.at(-1));


const string = '    password    '
console.log(string.trim()) // удаляет все пробелы
console.log(string.trimStart()) //удаляем пробелы в начале
console.log(string.trimEnd()) // в конце строки

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const name2 = 'Лисса'
const age2 = -10

const output1 = logPerson`имя: ${name}, возраст: ${age}!`
const output2 = logPerson`имя: ${name2}, возраст: ${age2}!`

console.log(output1)
console.log(output2)

/*Перебирать символы по одному может быть не слишком удобно. 
К счастью, есть и другой способ получить часть строки — метод slice().
Если вызвать его без аргументов, он вернёт строку целиком. Если передать один 
аргумент, то вернётся строка, начиная с того символа, чей порядковый номер был 
передан. А если передать два аргумента, то метод вернёт часть строки из указанного
 диапазона (не включая верхнюю границу).
Нумерация начинается с нуля. Можно использовать отрицательные числа.*/

const stri = 'Кекс';

console.log(stri.slice());
console.log(stri.slice(1));
console.log(stri.slice(0, 3));
console.log(stri.slice(1, -1));

// Исходная строка не изменилась!
console.log(stri);

/*Мы можем менять не только регистр, но и символы.
Метод replace() принимает два аргумента. Первый — часть строки, которую нужно 
найти. Второй — строка, на которую нужно заменить найденное. Метод возвращает 
изменённую копию исходной строки, сама она не меняется.
Этот метод изменяет только первую найденную подстроку.*/

const string1 = 'Кот кекс нашёл кекс с изюмом.';

console.log(string1.replace('кекс', 'Кекс'));

//Если нужно заменить каждую найденную подстроку, используем метод replaceAll().

const string2 = 'кекс с изюмом радует кота кекса.';

console.log(string2.replaceAll('кекс', 'Кекс'));

/*Если в методы replace() или replaceAll() вторым аргументом передать пустую 
строку, то найденная подстрока будет вырезана.
Это можно использовать, например, чтобы удалить из строки все пробелы.*/

/*Если требуется удалить пробелы в начале и/или в конце строки, 
то удобно использовать методы trim(), trimStart() и trimEnd().
«Внутренние» пробелы при этом останутся на месте.*/

const string3 = '    Кекс    на    пробеле  уснул.    ';

// Удалит пробелы в начале и в конце строки
console.log(string3.trim());

// Удалит пробелы в начале строки
console.log(string3.trimStart());

// Удалит пробелы в конце строки
console.log(string3.trimEnd());

/*Строки можно не только уменьшать, но и увеличивать. Методы padStart() и padEnd()
позволяют «нарастить» строку с начала или с конца до указанной длины.*/

/*Наконец, с помощью метода repeat() можно повторить строку указанное число раз. 
Метод принимает целые положительные числа.*/