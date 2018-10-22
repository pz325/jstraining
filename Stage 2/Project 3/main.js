const buttonClickHandler = event => {
    const inputText = event.originalTarget;
    console.log(inputText.value);
}

const buttonMouseOverHandler = event => {
    console.log("mouse over");
    console.log(event);
}

const textInputHandler = event => {
    const inputText = event.originalTarget;
    console.log(inputText.value);
} 

const start = () =>{
    const buttonClick = document.getElementById("buttonClick");
    buttonClick.onclick = buttonClickHandler;
    buttonClick.onmouseover = buttonMouseOverHandler;

    const textInput = document.getElementById("textInput");
    textInput.onchange = textInputHandler;
}


document.addEventListener("DOMContentLoaded", start);