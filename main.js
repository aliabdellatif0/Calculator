
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
const executioner = () => {
    const theDisplay = document.querySelector(".display")
    inTheDisplay = theDisplay.innerHTML
    newLine = []
    
    for (let i = 1; i<inTheDisplay.length; i++ ){
        let x = inTheDisplay.charAt(i)

        switch(x){
            case '+' :
                newLine.push(parseFloat(inTheDisplay.substr(0,i)) +
                parseFloat(inTheDisplay.substr(i+1, inTheDisplay.length)))
            break;
            case '-' :
                newLine.push(parseFloat(inTheDisplay.substr(0,i)) -
                parseFloat(inTheDisplay.substr(i+1, inTheDisplay.length)))
            break;
            case '/' :
                newLine.push(parseFloat(inTheDisplay.substr(0,i)) /
                parseFloat(inTheDisplay.substr(i+1, inTheDisplay.length)))
            break;
            case '*' :
                newLine.push(parseFloat(inTheDisplay.substr(0,i)) *
                parseFloat(inTheDisplay.substr(i+1, inTheDisplay.length)))
            break;
            case '%' :
                newLine.push((parseFloat(inTheDisplay.substr(0,i)))/ 100)
                
            break;
        }
        console.log(newLine)

        }
        const showDisplay = document.querySelector(".display")
    
    
    if(isNaN(newLine[0])){
        alert('Incorrect Input or Format')
        showDisplay.innerHTML = ''

    }
    else{
        showDisplay.innerHTML = newLine[0]
    }
}


const clearScreen = () => {
    
    const showDisplay = document.querySelector(".display")
    
    
    showDisplay.innerHTML = ''

}



