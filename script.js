//not too proud of this one. couldve done a better job
// 6/10
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
let afterEqual = false
let falseDecimal = false
let decimalStatus = false
let addStatus = false
let subtractStatus = false
let multiplyStatus = false
let divideStatus = false
let currentNumber = [0];
let oldNumber = [0]; 
let resultNumber = [0];
display.textContent = currentNumber
// bug questboard

// fix 5+5- (i dont know how to do this without rewriting the entire logic system)
// maybe make the calc on BOTH symbols and numbers?
// do it later me
// and 0 is a bit broken

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
calc.forEach(function (calc) {
    calc.addEventListener('click', function () {
        this.style.backgroundColor = 'white'
        this.style.color = 'rgba(255,159,10,255)'
    }) 
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
    display.textContent = Number(currentNumber)
})
inverse.addEventListener('click', function () {
    console.log('+/-');
    if (Number(currentNumber.join('')) > 0) { //adds - if pos cur
        currentNumber.unshift('-')
    } else if (Number(currentNumber.join('')) < 0) { //removes - if neg cur
        currentNumber.shift()
    }
    display.textContent = Number(currentNumber.join(''))
    console.log(oldNumber + '      ' + currentNumber)
})
percent.addEventListener('click', function () {
    currentNumber = Number(currentNumber.join('')) / 100
    display.textContent = currentNumber
    currentNumber = String(currentNumber).split('')
})
del.addEventListener('click', function () { // del -2 bugged
    if (currentNumber.slice(-1) == '.') {// huh??
        currentNumber.pop()
    } else if (currentNumber.slice(0, 1) == '-' && currentNumber.length == 2) {
        currentNumber = [0]
    }
    currentNumber.pop()
    display.textContent = Number(currentNumber.join(''))
})
equal.addEventListener('click', function () {
    afterEqual = true
    if (addStatus == true) {
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'
        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'
        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'
        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        console.log('= +');
        currentNumber = String(Number(oldNumber.join('')) + Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)

        oldNumber = [0]
        console.log(oldNumber + '      ' + currentNumber)

        display.textContent = Number(currentNumber.join(''))
        addStatus = false
    } else if (subtractStatus == true) {
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'
        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'
        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'
        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        console.log('= -');
        currentNumber = String(Number(oldNumber.join('')) - Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)

        oldNumber = [0]
        console.log(oldNumber + '      ' + currentNumber)

        display.textContent = Number(currentNumber.join(''))
        subtractStatus = false
    } else if (multiplyStatus == true) {
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'
        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'
        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'
        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        console.log('= *');
        currentNumber = String(Number(oldNumber.join('')) * Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)

        oldNumber = [0]
        console.log(oldNumber + '      ' + currentNumber)

        display.textContent = Number(currentNumber.join(''))
        multiplyStatus = false
    } else if (divideStatus == true) {
        add.style.backgroundColor = 'rgba(255,159,10,255)'
        add.style.color = 'white'
        subtract.style.backgroundColor = 'rgba(255,159,10,255)'
        subtract.style.color = 'white'
        multiply.style.backgroundColor = 'rgba(255,159,10,255)'
        multiply.style.color = 'white'
        divide.style.backgroundColor = 'rgba(255,159,10,255)'
        divide.style.color = 'white'
        console.log('= /');
        currentNumber = String(Number(oldNumber.join('')) / Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)

        oldNumber = [0]
        console.log(oldNumber + '      ' + currentNumber)

        display.textContent = Number(currentNumber.join(''))
        divideStatus = false
    } else {
    console.log(oldNumber + '      ' + currentNumber)  
    }
})
add.addEventListener('click', function () {
    console.log('+');
    addStatus = true
    subtractStatus = false
    multiplyStatus = false
    divideStatus = false
    subtract.style.backgroundColor = 'rgba(255,159,10,255)'
    subtract.style.color = 'white'
    multiply.style.backgroundColor = 'rgba(255,159,10,255)'
    multiply.style.color = 'white'
    divide.style.backgroundColor = 'rgba(255,159,10,255)'
    divide.style.color = 'white'

    if (Number(oldNumber.join('')) != 0) {
        currentNumber = String(Number(oldNumber.join('')) + Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)
        display.textContent = Number(currentNumber.join(''))
        }
    oldNumber = currentNumber
    console.log(oldNumber + '      ' + currentNumber)
    currentNumber = [0]
    console.log(oldNumber + '      ' + currentNumber)
})
subtract.addEventListener('click', function () {
    console.log('-');
    subtractStatus = true
    addStatus = false
    multiplyStatus = false
    divideStatus = false
    add.style.backgroundColor = 'rgba(255,159,10,255)'
    add.style.color = 'white'
    multiply.style.backgroundColor = 'rgba(255,159,10,255)'
    multiply.style.color = 'white'
    divide.style.backgroundColor = 'rgba(255,159,10,255)'
    divide.style.color = 'white'

    if (Number(oldNumber.join('')) != 0) {
        currentNumber = String(Number(oldNumber.join('')) - Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)
        display.textContent = Number(currentNumber.join(''))
        }
    oldNumber = currentNumber
    console.log(oldNumber + '      ' + currentNumber)
    currentNumber = [0]
    console.log(oldNumber + '      ' + currentNumber)
})
multiply.addEventListener('click', function () {
    console.log('*');
    multiplyStatus = true
    addStatus = false
    subtractStatus = false
    divideStatus = false
    subtract.style.backgroundColor = 'rgba(255,159,10,255)'
    subtract.style.color = 'white'
    add.style.backgroundColor = 'rgba(255,159,10,255)'
    add.style.color = 'white'
    divide.style.backgroundColor = 'rgba(255,159,10,255)'
    divide.style.color = 'white'

    if (Number(oldNumber.join('')) != 0) {
        currentNumber = String(Number(oldNumber.join('')) * Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)
        display.textContent = Number(currentNumber.join(''))
        }
    oldNumber = currentNumber
    console.log(oldNumber + '      ' + currentNumber)
    currentNumber = [0]
    console.log(oldNumber + '      ' + currentNumber)
})
divide.addEventListener('click', function () {
    console.log('/');
    divideStatus = true
    addStatus = false
    subtractStatus = false
    multiplyStatus = false
    subtract.style.backgroundColor = 'rgba(255,159,10,255)'
    subtract.style.color = 'white'
    multiply.style.backgroundColor = 'rgba(255,159,10,255)'
    multiply.style.color = 'white'
    add.style.backgroundColor = 'rgba(255,159,10,255)'
    add.style.color = 'white'

    if (Number(oldNumber.join('')) != 0) {
        currentNumber = String(Number(oldNumber.join('')) / Number(currentNumber.join(''))).split('')
        console.log(oldNumber + '      ' + currentNumber)
        display.textContent = Number(currentNumber.join(''))
        }
    oldNumber = currentNumber
    console.log(oldNumber + '      ' + currentNumber)
    currentNumber = [0]
    console.log(oldNumber + '      ' + currentNumber)
})
decimal.addEventListener('click', function () { //terrible bandage fix
    console.log('.');
    if (Number(currentNumber.join('')) % 1 == 0) { //is whole num
        currentNumber.push('.')
        display.textContent = Number(currentNumber.join('')) + '.'
        falseDecimal = true
    } else {
        display.textContent = Number(currentNumber.join(''))
    }
})
zero.addEventListener('click', function () {
    console.log(falseDecimal);

    
    if (currentNumber.slice(-1) == 0) {
        falseDecimal = true
    }
    console.log(falseDecimal);
    if (falseDecimal == false) {
        if (currentNumber != 0) {
        currentNumber.push(0)
        }
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber);
    } else {
        let zeroAmount = 1
        for (let i = currentNumber.length - 1; i >= 0; i--) {
            if (currentNumber[i] == 0) {
                zeroAmount++
            } else {
                break;
            }
        }
        if (currentNumber != 0) {
            currentNumber.push(0)
        }
        if (Number(currentNumber.join('')) % 1 == 0 && decimalStatus == false) {
            display.textContent = Number(currentNumber.join('')) + '.' + '0'.repeat(zeroAmount)
            decimalStatus = true
        } else {
            display.textContent = Number(currentNumber.join('')) + '0'.repeat(zeroAmount)
        }
        
        console.log(oldNumber + '      ' + currentNumber);
    }
})
one.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(1)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(1)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
two.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(2)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(2)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
three.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(3)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(3)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
four.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(4)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(4)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
five.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(5)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(5)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
six.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(6)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(6)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
seven.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(7)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(7)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
eight.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(8)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(8)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})
nine.addEventListener('click', function () {
    numFunc()
    if (afterEqual == false) {
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
        currentNumber.push(9)
        display.textContent = Number(currentNumber.join(''))
        console.log(oldNumber + '      ' + currentNumber)
    } else {
        afterEqual = false
        currentNumber = [0]
        if (currentNumber[0] == 0) {
            currentNumber.shift()
        }
            currentNumber.push(9)
            display.textContent = Number(currentNumber.join(''))
            console.log(oldNumber + '      ' + currentNumber)
    }
})