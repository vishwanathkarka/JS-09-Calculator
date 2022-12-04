class Calculator{
   constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
   clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
   delete(){
this.currentOperand = this.currentOperand.toString().slice(0,-1);
   }
   appendNumber(number){

      // this.currentOperand = this.currentOperand.toString() + number.toString()
      if(number == "." && this.currentOperand.includes("."))return // if multiple . is not add 
      this.currentOperand = this.currentOperand.toString()+ number.toString()
      console.log("ggggg")

   }
   chooseOperation(operation){
      if(this.currentOperand === '') return 
      if(this.previousOperand !==''){
         this.compute()
      }
this.operation = operation;
this.previousOperand = this.currentOperand;
this.currentOperand = "";

   }
   compute(){
let computation;
const prev = parseFloat( this.previousOperand);
const current = parseFloat(this.currentOperand) // converting string to float values
if(isNaN(prev) || isNaN(current)) return
switch(this.operation){
   case '+':
      computation = prev + current;
      break;
   case '-':
      computation = prev - current;
      break;
   case 'x':
      computation = prev * current;
      break;
   case '÷':
      computation = prev / current;
      break;
   default:

}
this.currentOperand = computation;
this.operation = undefined;
this.previousOperand =''

   }

   getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en-in', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
updateDisplay(){

this.currentOperandTextElement.innerText =this.getDisplayNumber(this.currentOperand)
if(this.operation != null){
   this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
}
// this.previousOperandTextElement.innerText = this.previousOperand
console.log("yywhhwhhwwqqq")
}
}

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButton = document.querySelectorAll('[data-operation]')
// const equalButton = document.querySelectorAll('[data-equals]')
// const allClearButton = document.querySelectorAll('[data-delete]')
// const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
// const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

// selector 
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]') 
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const calculator  = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach( button => {
   button.addEventListener('click',()=> {
      calculator.appendNumber(button.innerText)
      console.log(button.innerText)
      calculator.updateDisplay()
   })
})

operationButtons.forEach( button => {
   button.addEventListener('click',()=> {
      calculator.chooseOperation(button.innerText)
      console.log(button.innerText)
      calculator.updateDisplay()
   })
})

equalsButton.addEventListener("click",button => {
   calculator.compute()
  
   calculator.updateDisplay()
})

allClearButton.addEventListener("click",button => {
   calculator.clear()
   calculator.updateDisplay()
})

deleteButton.addEventListener("click",button => {
   calculator.delete()
   calculator.updateDisplay()
})