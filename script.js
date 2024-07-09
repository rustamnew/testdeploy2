const input = document.querySelector('#inputNumber')
const minusElement = document.querySelector('#minus')
const plusElement = document.querySelector('#plus')

input.addEventListener('input', (e) => {
    const value = e.target.value

    const valueNumber = Number(value)

    const valueMinus = valueNumber - (valueNumber * 0.15)
    const valuePlus = valueNumber + (valueNumber * 0.15)
    
    minusElement.innerHTML = valueMinus
    plusElement.innerHTML = valuePlus
})