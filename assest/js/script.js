let common = (number) =>{
    document.getElementById("display").innerText += number;
}

let plus = () =>{
    firstNumber = document.getElementById("display").innerText;
    document.getElementById("display").innerText = '';
    operator = "+";
}
let mainas = () =>{
    firstNumber = document.getElementById("display").innerText;
    document.getElementById("display").innerText = '';
    operator = "-";
}
let multiply = () =>{
    firstNumber = document.getElementById("display").innerText;
    document.getElementById("display").innerText = '';
    operator = "*";
}
let divition = () =>{
    firstNumber = document.getElementById("display").innerText;
    document.getElementById("display").innerText = '';
    operator = "/";
}
let ac = () =>{
     document.getElementById("display").innerText = '';
}

let calculate = () =>{
    let secondNumber = document.getElementById("display").innerText;
    if (operator === "+") {
        document.getElementById("display").innerText =
            Number(firstNumber) + Number(secondNumber);
    }

    if (operator === "-") {
        document.getElementById("display").innerText =
            Number(firstNumber) - Number(secondNumber);
    }

    if (operator === "*") {
        document.getElementById("display").innerText =
            Number(firstNumber) * Number(secondNumber);
    }

    if (operator === "/") {
        document.getElementById("display").innerText =
            Number(firstNumber) / Number(secondNumber);
    }
}