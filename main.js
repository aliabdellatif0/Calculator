
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

// let firstInput = 0
// let secondInput = 0
// const calcFunction = (numero) => {
    
//     if (firstInput === false){
//         firstInput = numero;
//     }   else{
//         secondInput = numero;
//         }
// }

const executioner = () => {
    const theDisplay = document.querySelector(".display")
    inTheDisplay = theDisplay.innerHTML
    console.log(inTheDisplay)
    newLine = []
    for (let i = 0; i<inTheDisplay.length; i++ ){
        let x = inTheDisplay.charAt(i)

        if(x== '0','1','2','3','4','5','6','7','8','9'){
            newLine.push(parseInt(x))
        }else if (x == '+', '-', '/', '*'){
            newLine.push(x.replace(/^"(.+(?="$))"$/, '$1'))
          } 


        }

    console.log(newLine)
}



// console.log(firstInput)
// console.log(secondInput)

///when press equal 
//for loop parse evaluate each token