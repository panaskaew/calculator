const body = document.querySelector('body')
const display = document.querySelector('.display')
const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const ac = document.querySelector('.ac')
const decimal = document.querySelector('.decimal')
const inverse = document.querySelector('.inverse')
const percent = document.querySelector('.percent')
const del = document.querySelector('.del')
const equal = document.querySelector('.equal')
const calc = document.querySelectorAll('.calc')
let addStatus = false;
let subtractStatus = false;
let multiplyStatus = false;
let divideStatus = false;
let currentNumber = [0];
let oldNumber = [0];
let resultNumber = [0];

calc.forEach(function (calc) {
    calc.addEventListener('click', function () {
        this.style.backgroundColor = 'white'
        this.style.color = 'rgba(255,159,10,255)'
    }) 
})

display.textContent = currentNumber
// number returned IS an array
decimal.addEventListener('click', function () { //terrible with zeroes fix later
    if (currentNumber == 0) {                   // deicimals and zeroes got a ton of bugs
    currentNumber.push('.')
    display.textContent = (currentNumber.join(''))
    } else if (currentNumber.join('') % 1 == 0 && currentNumber.slice(-1) != '.') { 
    currentNumber.push('.')
    display.textContent = Number(currentNumber.join('')) + '.'
    } else if (currentNumber.join('') % 1 == 0) {
    display.textContent = (Number(currentNumber.join(''))) + '.'
    } else {
    display.textContent = (Number(currentNumber.join('')))
    }
})
zero.addEventListener('click', function () { //maybe fix zeroes in decimals later
    if (currentNumber != 0) {
    currentNumber.push(0)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
ac.addEventListener('click', function () {
    add.style.backgroundColor = 'rgba(255,159,10,255)'
    add.style.color = 'white'

    subtract.style.backgroundColor = 'rgba(255,159,10,255)'
    subtract.style.color = 'white'

    multiply.style.backgroundColor = 'rgba(255,159,10,255)'
    multiply.style.color = 'white'

    divide.style.backgroundColor = 'rgba(255,159,10,255)'
    divide.style.color = 'white'
    currentNumber = [0]
    oldNumber = [0]
    addStatus = false;
    subtractStatus = false;
    multiplyStatus = false;
    divideStatus = false;
    display.textContent = Number(currentNumber)
})
inverse.addEventListener('click', function () {
    if (Number(currentNumber.join('')) > 0) {
        currentNumber.unshift('-')
        display.textContent = Number(currentNumber.join(''))
    } else if (Number(currentNumber.join('')) < 0) {
        currentNumber.shift()
        display.textContent = Number(currentNumber.join(''))
    } else {
        display.textContent = Number(currentNumber.join(''))
    }
})
percent.addEventListener('click', function () {
    currentNumber = Number(currentNumber.join('')) / 100
    display.textContent = currentNumber
    currentNumber = String(currentNumber).split('')
})
del.addEventListener('click', function () {
    if (currentNumber.slice(-1) == '.') {
    currentNumber.pop()
    currentNumber.pop()
    display.textContent = Number(currentNumber.join(''))
    } else {
    currentNumber.pop()
    display.textContent = Number(currentNumber.join(''))
    }
})
equal.addEventListener('click', function () {
    if (addStatus == true) {
        currentNumber = String(Number(oldNumber.join('')) + Number(currentNumber.join(''))).split('')
        currentNumber.map(function (currentNumber) {
            if (currentNumber == '-') { // so -3 doesnt break it
                return currentNumber
            }   else {
                return Number(currentNumber)
            }
        })
        display.textContent = Number(currentNumber.join(''))
        addStatus = false
    } else if (subtractStatus == true) {
        currentNumber = String(Number(oldNumber.join('')) - Number(currentNumber.join(''))).split('')
        currentNumber.map(function (currentNumber) {
            if (currentNumber == '-') {
                return currentNumber
            }   else {
                return Number(currentNumber)
            }
        })
        display.textContent = currentNumber.join('')
        subtractStatus = false
    } else if (multiplyStatus == true) {
        currentNumber = String(Number(oldNumber.join('')) * Number(currentNumber.join(''))).split('')
        currentNumber.map(function (currentNumber) {
            if (currentNumber == '-') {
                return currentNumber
            }   else {
                return Number(currentNumber)
            }
        })
        display.textContent = Number(currentNumber.join(''))
        multiplyStatus = false
    } else if (divideStatus == true) {
        currentNumber = String(Number(oldNumber.join('')) / Number(currentNumber.join(''))).split('')
        currentNumber.map(function (currentNumber) {
            if (currentNumber == '-') {
                return currentNumber
            }   else {
                return Number(currentNumber)
            }
        })
        display.textContent = Number(currentNumber.join(''))
        divideStatus = false
    } else {
        display.textContent = Number(currentNumber.join(''))
    }
})
add.addEventListener('click', function () {
    addStatus = true
    if (subtractStatus == false && multiplyStatus == false && divideStatus == false) {
        oldNumber = currentNumber
        currentNumber = [0]
        console.log('add top ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    } else {
        subtractStatus = false
        multiplyStatus = false
        divideStatus = false

        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'

        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'

        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        currentNumber = [0]
        console.log('add bot ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    }
})
subtract.addEventListener('click', function () {
    subtractStatus = true
    if (addStatus == false && multiplyStatus == false && divideStatus == false) {
        oldNumber = currentNumber
        currentNumber = [0]
        console.log('sub top ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    } else {
        addStatus = false
        multiplyStatus = false
        divideStatus = false
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'

        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'

        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        currentNumber = [0]
        console.log('sub bot ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    }
})
multiply.addEventListener('click', function () {
    multiplyStatus = true
    if (addStatus == false && subtractStatus == false && divideStatus == false) {
        oldNumber = currentNumber
        currentNumber = [0]
        console.log('mul top ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    } else {
        addStatus = false
        subtractStatus = false
        divideStatus = false
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'

        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'

        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        currentNumber = [0]
        console.log('mul bot ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    }
})
divide.addEventListener('click', function () {
    divideStatus = true
    if (addStatus == false && subtractStatus == false && multiplyStatus == false) {
        oldNumber = currentNumber
        currentNumber = [0]
        console.log('mul top ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    } else {
        addStatus = false
        subtractStatus = false
        multiplyStatus = false
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'

        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'

        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'
        currentNumber = [0]
        console.log('mul bot ' + addStatus + subtractStatus + multiplyStatus + divideStatus);
    }
})
function numFunc() {
    add.style.backgroundColor = 'rgba(255,159,10,255)'
    add.style.color = 'white'

    subtract.style.backgroundColor = 'rgba(255,159,10,255)'
    subtract.style.color = 'white'

    multiply.style.backgroundColor = 'rgba(255,159,10,255)'
    multiply.style.color = 'white'

    divide.style.backgroundColor = 'rgba(255,159,10,255)'
    divide.style.color = 'white'
}
one.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(1)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(1)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
two.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(2)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(2)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
three.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(3)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(3)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
four.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(4)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(4)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
five.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(5)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(5)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
six.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(6)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(6)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
seven.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(7)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(7)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
eight.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(8)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(8)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
nine.addEventListener('click', function () {
    numFunc()
    if (currentNumber[0] == 0) {
    currentNumber.shift()
    currentNumber.push(9)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    } else {
    currentNumber.push(9)
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + ' ' + currentNumber);
    }
})
