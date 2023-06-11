// Number

const num = 5 // integer
const float = 5.55 //float
const pow = 10e3 // 10 в третей степени = 1000

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // max integer в js
console.log('Math.pow', Math.pow(2, 53) -1) //получение max integer
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) // min integer в js
console.log('MAX_VALUE', Number.MAX_VALUE) 
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //положительная бесконечность
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)

const stringInt = '40'
const stringFloat = '40.42'
console.log(parseInt(stringInt)) // перевод строк в числа
console.log(Number.parseInt(stringInt) + 2)  // одинаковые значения с разным написанием
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(parseFloat(stringFloat) +2) // возвращает десятичное число
console.log(+stringFloat + 2)

console.log(+(0.4+0.2).toFixed(1)) // toFixed сокращает кол-во знаков после запятой
console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// BigInt

console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))

// Math

 console.log(Math.E)  // волновые экспаненты
 console.log(Math.PI) // число пи, можно вычислить радиус

 console.log(Math.sqrt(25)) //квадратный корень
 console.log(Math.pow(5 , 5)) //возводим в степень

 console.log(Math.max(5, 42, 10, 525)) //выведет max число из списка
 console.log(Math.min(5, 42, 10, 525)) //выведет min число из списка

 console.log(Math.floor(4.9)) // округление в меньшую сторону
 console.log(Math.ceil(4.9)) // округление в большую сторону
 console.log(Math.round(4.9)) // округление к билжайшему целому
 console.log(Math.trunc(4.9))  // отсекает все после запятой
 console.log(Math.random())  // рандомное число

function getRandomBetween(min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))

