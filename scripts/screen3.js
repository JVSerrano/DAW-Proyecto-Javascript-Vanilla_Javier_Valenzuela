let form = document.querySelector('.form')
let table = document.querySelector('.table')
let btnSubmit = document.querySelector('.submit')
let questionInput = document.getElementById('question')
let radioInputs = document.querySelectorAll('input[name="inputRadio"]')
let punctuationInput = document.getElementById('punctuation')
let data = []


btnSubmit.disabled = true


function checkInputs() {
    let question = questionInput.value
    let inputRadio = document.querySelector('input[name="inputRadio"]:checked')
    let punctuation = punctuationInput.value

    
    if (question !== '' && inputRadio !== null && punctuation !== '') {
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }
}

form.addEventListener('input', checkInputs)
form.addEventListener('change', checkInputs)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let question = questionInput.value.trim()
    let inputRadio = document.querySelector('input[name="inputRadio"]:checked').value
    let punctuation = punctuationInput.value.trim()

    data.push({
        question: question,
        inputRadio: inputRadio,
        punctuation: punctuation,
        status: ''
    })

    data.forEach((data) => {
        let row = document.createElement('tr')

        row.innerHTML = `
        <td>${data.question}</td>
        <td>${data.inputRadio}</td>
        <td>${data.punctuation}</td>
        <td>${data.status}</td>
        `;

        table.appendChild(row)
    })

    data = []
    checkInputs() 
})

function closeSession() {
   
}
