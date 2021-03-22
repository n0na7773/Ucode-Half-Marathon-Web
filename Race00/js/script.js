class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.memoryValue = 0;
        this.memoryOperation = '';
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
        this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        case 'xˆ':
            computation = prev ** current;
            break;
        default:
            return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
        integerDisplay = ''
        } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
        } else {
        return integerDisplay
        }
    }

    updateDisplay() {
        if (this.currentOperand == '') this.currentOperandTextElement.innerText = '0';
        else this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
        if (this.operation === 'xˆ') this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ˆ`;
        else this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
        this.previousOperandTextElement.innerText = ''
        }
    }

    sqrt() {
        let computation;
        const current = parseFloat(this.currentOperand);
        
        computation = Math.sqrt(current);

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    factorial() {
        let computation = 1;
        const current = parseFloat(this.currentOperand);
        
        for (let i = 1; i <= current; i++) {
            computation *= i;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    memoryClear() {
        this.memoryValue = 0;
    }
    memorySave() {
        this.memoryValue = this.currentOperand;
    }
    memoryRecall() {
        this.currentOperand = this.memoryValue;
    }
    memoryCompute() {
        let computation;
        const prev = parseFloat(this.memoryValue);
        const current = parseFloat(this.currentOperand);
        switch (this.memoryOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        default:
            return;
        }
        this.memoryValue = computation;
        this.memoryOperation = '';
    }
    computePercent() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        switch (this.operation) {
            case '+':
                computation = prev + current*prev/100;
                break;
            case '-':
                computation = prev - current*prev/100;
                break;
            case '*':
                computation = prev * current*prev/100;
                break;
            case '÷':
                computation = prev / current*prev/100;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    changeSign() {
        this.currentOperand = this.currentOperand * -1;
    }
    copyToClipboard() {
        const el = document.createElement('textarea');
        if (this.currentOperand == '') el.value = '0';
        else el.value = this.currentOperand;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.getElementById("custom-tooltip").style.visibility = "visible";
        document.execCommand("copy");
        setTimeout( function() {
            document.getElementById("custom-tooltip").style.visibility = "hidden";
        }, 1000);
        document.body.removeChild(el);
    }
}
  
const numberButtons = document.querySelectorAll('[data-number]'),
    operationButtons = document.querySelectorAll('[data-operation]'),
    equalsButton = document.querySelector('[data-equals]'),
    deleteButton = document.querySelector('[data-delete]'),
    allClearButton = document.querySelector('[data-all-clear]'),
    previousOperandTextElement = document.querySelector('[data-previous-operand]'),
    currentOperandTextElement = document.querySelector('[data-current-operand]'),
    moreButton = document.querySelector("[data-all-more]"),
    more = document.querySelector(".more"),
    sqrtButton = document.querySelector('[data-all-sqrt]'),
    factorialButton = document.querySelector('[data-all-factorial]'),
    powerButton = document.querySelector('[data-all-power]'),
    mcBtton = document.querySelector("[data-all-mc]"),
    mrBtton = document.querySelector("[data-all-mr]"),
    mplusBtton = document.querySelector("[data-all-mplus]"),
    mminusBtton = document.querySelector("[data-all-mminus]"),
    msBtton = document.querySelector("[data-all-ms]"),
    mmultBtton = document.querySelector("[data-all-mmult]"),
    percentBtton = document.querySelector("[data-all-percent]"),
    pmBtton = document.querySelector("[data-all-pm]"),

    kgButton = document.querySelector("[data-all-kg]"),
    kgInput = document.querySelector(".kg-input"),
    kgDisplay = document.querySelector(".kg-display"),
    ouncesVal = document.querySelector(".ounces_val"),
    kgVal = document.querySelector(".kg_val"),
    gramsVal = document.querySelector(".grams_val"),
    rulerButton = document.querySelector("[data-all-ruler]"),
    lengthDisplay = document.querySelector(".length-display"),
    lengthInput = document.querySelector(".length-input"),
    milesVal = document.querySelector(".miles_val"),
    kmVal = document.querySelector(".km_val"),
    yardsVal = document.querySelector(".yards_val"),
    cmVal = document.querySelector(".cm_val"),
    metersVal = document.querySelector(".meters_val"),
    areaButton = document.querySelector("[data-all-area]"),
    areaDisplay = document.querySelector(".area-display"),
    areaInput = document.querySelector(".area-input"),
    sqCmVal = document.querySelector(".sq_cm_val"),
    sqkmVal = document.querySelector(".sq_km_val"),
    hectareVal = document.querySelector(".hectare_val");


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

currentOperandTextElement.addEventListener('click', () => {
    calculator.copyToClipboard();
});
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

moreButton.addEventListener("click", () => {
    more.classList.toggle("active");
});;

sqrtButton.addEventListener("click", () => {
    calculator.sqrt();
    calculator.updateDisplay();
});

factorialButton.addEventListener("click", () => {
    calculator.factorial();
    calculator.updateDisplay();
});

powerButton.addEventListener("click", (button) => {
    calculator.chooseOperation(button.target.innerText);
    calculator.updateDisplay();
});
mcBtton.addEventListener("click", () => {
    calculator.memoryClear();
    calculator.updateDisplay();
});
msBtton.addEventListener("click", () => {
    calculator.memorySave();
    calculator.updateDisplay();
});
mrBtton.addEventListener("click", () => {
    calculator.memoryRecall();
    calculator.updateDisplay();
});
mplusBtton.addEventListener("click", () => {
    calculator.memoryOperation = '+';
    calculator.memoryCompute();
    calculator.updateDisplay();
});
mminusBtton.addEventListener("click", () => {
    calculator.memoryOperation = '-';
    calculator.memoryCompute();
    calculator.updateDisplay();
});
mmultBtton.addEventListener("click", () => {
    calculator.memoryOperation = '*';
    calculator.memoryCompute();
    calculator.updateDisplay();
});

percentBtton.addEventListener("click", () => {
    calculator.computePercent();
    calculator.updateDisplay();
});
pmBtton.addEventListener("click", () => {
    calculator.changeSign();
    calculator.updateDisplay();
});

kgButton.addEventListener("click", () => {
    kgDisplay.classList.toggle("active");
    lengthDisplay.classList.remove("active");
    areaDisplay.classList.remove("active");
});
kgInput.addEventListener("input", (e) => {
    const value = e.target.value;

    gramsVal.textContent = value / 1000;
    kgVal.textContent = value / 453.59237;
    ouncesVal.textContent = value / 28.34952;
});

rulerButton.addEventListener("click", () => {
    kgDisplay.classList.remove("active");
    lengthDisplay.classList.toggle("active");
    areaDisplay.classList.remove("active");
});
lengthInput.addEventListener("input", (e) => {
    const value = e.target.value;

    metersVal.textContent = value * 0.3048;
    cmVal.textContent = value * 12;
    yardsVal.textContent = value / 3;
    kmVal.textContent = value * 0.000305;
    milesVal.textContent = value * 0.00018939;
});

areaButton.addEventListener("click", () => {
    areaDisplay.classList.toggle("active");
    lengthDisplay.classList.remove("active");
    kgDisplay.classList.remove("active");
});
areaInput.addEventListener("input", (e) => {
    const value = e.target.value;

    sqCmVal.textContent = value * 1000;
    sqkmVal.textContent = value * 0.000001;
    hectareVal.textContent = value * 0.0001;
});