// Elements selection
const divResult = document.querySelector("#result")
const calc = document.querySelector("#calc")
const calcForm = document.querySelector("#calc-form")
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const returnBtn = document.querySelector("#return-btn")
const resultP = document.querySelector("#result-value")
const classification = document.querySelector("#classification")

// Function
function toggleElements(){
    divResult.classList.toggle("hide")
    calc.classList.toggle("hide")
}

function showImc(result){
    resultP.innerText = "O seu IMC é "+result
    
    if(result < 17){
        classification.innerText = "Classificação: Muito abaixo do peso"
    } else if(result >= 17 && result < 18.5){
        classification.innerText = "Classificação: Abaixo do peso"
    } else if(result >= 18.5 && result < 25){
        classification.innerText = "Classificação: Peso normal"
    } else if(result >= 25 && result < 30){
        classification.innerText = "Classificação: Acima do peso"
    } else if(result >= 30 && result < 35){
        classification.innerText = "Classificação: Obesidade grau I"
    } else if(result >= 35 && result <= 40){
        classification.innerText = "Classificação: Obesidade grau II"
    } else{
        classification.innerText = "Classificação: Obesidade grau III"
    }
}

// Events
calcForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const weightInputValue = Number(weightInput.value)
    const heightInputValue = Number(heightInput.value)
    
    const result = weightInputValue / (heightInputValue * heightInputValue)

    toggleElements();

    weightInput.value = ""
    heightInput.value = ""

    showImc(result.toFixed(2))
})

returnBtn.addEventListener("click", () => {
    toggleElements()
})