//Getting all elements needed from body
const btnRoll = document.querySelector(".btnRoll")
const multiplier = document.getElementById("quantity")
const dice = document.getElementById("dice")
const modifier = document.getElementById("modifier")
const result = document.querySelector(".result")
const btnReset = document.querySelector(".btnReset")
//local var and const
const horizontalLine = "---------------------"
let test = 0

//Focus on the dice input after loading page
window.onload = () => {
    dice.focus();
  }

btnRoll.addEventListener("click", () => {
    if (modifier.value > 0){
        result.textContent += `Rolando ${multiplier.value}D${dice.value}+${modifier.value}:\n${horizontalLine}\n`
    } else if (modifier.value < 0){
        result.textContent += `Rolando ${multiplier.value}D${dice.value}${modifier.value}:\n${horizontalLine}\n`
    } else {
        result.textContent += `Rolando ${multiplier.value}D${dice.value}:\n${horizontalLine}\n`
    }

    for (let i = 0; i < multiplier.value; i++) {
        let partial = Math.ceil(Math.random() * dice.value)
        result.textContent += `Rolagem ${i+1}: ${partial}\n`
        
        test += partial
    }
    if (modifier.value != ""){
        test += parseInt(modifier.value, 10)
    } else {
        test += 0
    }

    result.textContent += `Resultado: ${test}\n\n`
    result.scrollTop = result.scrollHeight
    test = 0
})

btnReset.addEventListener("click", () => {
    multiplier.value = 1
    dice.value = ""
    modifier.value = 0
    result.textContent = ""
    dice.focus()
})