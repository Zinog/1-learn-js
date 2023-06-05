// String

const name = 'Zinaida'
const age = 37

const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.`
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'a' :'b'} лет.`
console.log(output)

console.log(name.length) //количество символов в слове
console.log(name.toLocaleUpperCase()) //верхний регистр
console.log(name.toLocaleLowerCase()) //ижний регистр
console.log(name.charAt(2)) // выводит нужный символ
console.log(name.indexOf('!')) //если такое значение отсутствует, выведет -1
//console.log(name.toLocaleLowerCase().startsWith(zina))
//console.log(name.startsWith(Zina))

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