// Функции

// function declaretion // ф-ия работает из любого положения

function greet(name) {
    console.log('hello - ', name)
}

// function expression

//greet2('Zina') // при таком синтаксе expression не будет работать, значение должно идти после ф-ии

const greet2 = function greet2(name) {
    console.log('hello 2 - ', name)
}

greet('Zina')
greet2('Zina')

// Анонимные ф-ии

let counter = 0
/*setInterval(function() {
    console.log(++counter)
}, 1000)*/ //выводит числа с интервалом в 1 секунду

const interval = setInterval(function() {
    if (counter === 5){
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000) //завершаем интервал

// Стрелочные функции

const arrow = (name) => {
    console.log('hello - ', name)
}

const arrow2 = name => console.log('hello - ', name)

arrow('Lissa')
arrow2('Lissa')

const pow2 = num => {
    return num **2
}

const pow22 = num => num ** 2 //одинаковые ф-ии разный синтаксис

console.log(pow2(5))
console.log(pow2(5))

// Параметры по умолчанию

const sum = (a = 1, b = 1) => a + b // стрелочная ф-ия //(a = 1, b = 1) парметр по умолчанию
                                                    // (a = 5, b = a * 2)
console.log(sum(5, 5))
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// Замыкания

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Zinaida')
console.log(logWithLastName('Antipova'))
console.log(logWithLastName('Svetlichnay'))