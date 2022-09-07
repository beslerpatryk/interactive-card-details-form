const cardEl = document.getElementById("card")
const form = document.querySelector("form")
const confirmationEl = document.getElementById("confirmation")
const submitBtn = document.getElementById("submit")

const cardNum = document.getElementById("card-num")
const cardHolder = document.getElementById("card-holder")
const monthExpiration = document.getElementById("card-month-expiration")
const yearExpiration = document.getElementById("card-year-expiration")
const cvc = document.getElementById("card-cvc")

const cardNumInput = document.getElementById("card-num-input")
const cardholderInput = document.getElementById("card-name")
const monthExpirationInput = document.getElementById("month-expiration-input")
const yearExpirationInput = document.getElementById("year-expiration-input")
const cvcInput = document.getElementById("card-cvc-input")



submitBtn.addEventListener('mouseDown', ()=> {
    confirmationEl.style = "display: initial"
})

cardNumInput.addEventListener('keyup', (e)=>{
    cardNum.innerHTML = cardNumInput.value
})

cardholderInput.addEventListener('keyup', (e)=>{
    cardHolder.innerHTML = cardholderInput.value
})

monthExpirationInput.addEventListener('keyup', (e)=>{
    monthExpiration.innerHTML = monthExpirationInput.value
})

yearExpirationInput.addEventListener('keyup', (e)=>{
    yearExpiration.innerHTML = yearExpirationInput.value
})

cvcInput.addEventListener('keyup', (e)=>{
    cvc.innerHTML = cvcInput.value
})


function displayConfirm(){
    form.style = "display: none; opacity: 0%;"
    confirmationEl.style = "display: flex"
    
}

function showForm(){
    form.style = "display: flex"
    confirmationEl.style = "display: none; opacity: 0%;"
}