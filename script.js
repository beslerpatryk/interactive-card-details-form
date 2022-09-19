const cardEl = document.getElementById("card")
const form = document.querySelector("form")
const confirmationEl = document.getElementById("confirmation")
const submitBtn = document.getElementById("submit")

const cardNum = document.querySelector(".number-preview")
const cardHolder = document.querySelector(".name-preview")
const monthExpiration = document.querySelector(".month-preview")
const yearExpiration = document.querySelector(".year-preview")
const cvc = document.querySelector(".cvc-preview")

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
    if(cardNum.innerHTML === ""){
        cardNum.innerHTML = "0000 0000 0000 0000"
    }
})

cardholderInput.addEventListener('keyup', (e)=>{
    cardHolder.innerHTML = cardholderInput.value
    if(cardHolder.innerHTML === ""){
        cardHolder.innerHTML = "Jane Appleseed"
    }
})

monthExpirationInput.addEventListener('keyup', (e)=>{
    monthExpiration.innerHTML = monthExpirationInput.value + "/"
    if(monthExpiration.innerHTML === ""){
        monthExpiration.innerHTML = "00/"
    }
})

yearExpirationInput.addEventListener('keyup', (e)=>{
    yearExpiration.innerHTML = yearExpirationInput.value
    if(yearExpiration.innerHTML === ""){
        yearExpiration.innerHTML = "00"
    }
    
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