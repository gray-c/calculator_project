class Calculator {
    constructor(operandOneTextElement,operandTwoTextElement){
        this.operandOneTextElement = operandOneTextElement
        this.operandTwoTextElement = operandTwoTextElement
    }
        clear(){
        
        }
    }
    const numberButtons = document.querySelectorAll('[data-number]')
    const operationButtons = document.querySelectorAll('[data-operation]')
    const equalsButton = document.querySelector('[data-equals]')
    const deleteButton = document.querySelector('[data-delete]')
    const allClearButton = document.querySelector('[data-all-clear]')
    const operandOneTextElement = document.querySelector('[data-operand-1]')
    const operandTwoTextElement = document.querySelector('[data-operand-2]')