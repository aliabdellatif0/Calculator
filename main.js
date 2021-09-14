
const numberButtons = document.querySelectorAll("button")

const handleButton = () => {
    alert("clicked")
}

const addToScreen = (number) => {
    const showDisplay = document.querySelector(".display")
    //add a class then remove the class in order to get the value
    
    showDisplay.innerHTML += number

}

///when press equal 
//for loop parse evaluate each token