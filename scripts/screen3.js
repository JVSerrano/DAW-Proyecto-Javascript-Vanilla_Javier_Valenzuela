let form = document.querySelector('.form');
let table = document.querySelector('.table');
let btnSubmit = document.querySelector('.submit');
let questionInput = document.getElementById('question');
let radioInputs = document.querySelectorAll('input[name="inputRadio"]');
let punctuationInput = document.getElementById('punctuation');
let questionsTable = document.querySelector('.questions');

questionsTable.style.display = 'none';
// questionsTable.textContent = 'Cargando las preguntas...'
btnSubmit.disabled = true;

setTimeout(()=>{
    questionsTable.style.display = 'block';
},2000)

function checkInputs() {
    let question = questionInput.value.trim();
    let inputRadio = document.querySelector('input[name="inputRadio"]:checked');
    let punctuation = punctuationInput.value.trim();
    
    btnSubmit.disabled = !(question && inputRadio && punctuation);
}



form.addEventListener('input', checkInputs);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let question = questionInput.value.trim();
    let inputRadio = document.querySelector('input[name="inputRadio"]:checked').value;
    let punctuation = punctuationInput.value.trim();

    let row = document.createElement('tr');
    let statusCell = document.createElement('td');
    statusCell.className = 'status';
    statusCell.textContent = 'Guardando...';

    row.innerHTML = `
        <td>${question}</td>
        <td>${inputRadio}</td>
        <td>${punctuation}</td>
    `;
    row.appendChild(statusCell);
    table.appendChild(row);

    setTimeout(() => {
        statusCell.textContent = 'OK';
    }, 2000);

    resetForm()
    checkInputs();
});


function resetForm(){
    questionInput.value = ''
    radioInputs.forEach((radio) => {
        radio.checked = false
    })
    punctuationInput.value = ''
    btnSubmit.disabled = true
}
