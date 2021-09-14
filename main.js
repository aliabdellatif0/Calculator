
const numberButtons = document.querySelectorAll("button")

const handleButton = () => {
    alert("clicked")
}

const addToScreen = (number) => {
    //if has operand class ignore function
    const showDisplay = document.querySelector(".display")
    //add a class then remove the class in order to get the value
    
    showDisplay.innerHTML += number

}

let firstInput = 0
let secondInput = 0
const calcFunction = (numero) => {
    
    if (firstInput = false){
        firstInput = numero;
    }   else{
        secondInput = numero;
        }
}

console.log(firstInput)
console.log(secondInput)

///when press equal 
//for loop parse evaluate each token