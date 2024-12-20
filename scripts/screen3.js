let form = document.querySelector('.form');
let table = document.querySelector('.table');
let btnSubmit = document.querySelector('.submit');
let questionInput = document.getElementById('question');
let radioInputs = document.querySelectorAll('input[name="inputRadio"]');
let punctuationInput = document.getElementById('punctuation');
let questionsTable = document.querySelector('.questions');
let loading = document.querySelector('.phrase-loading');
let backbtn = document.querySelector('.back-btn');


questionsTable.style.display = 'none';


btnSubmit.disabled = true;

setTimeout(()=>{
    questionsTable.style.display = 'block';
    loading.style.display = 'none';
},5000)

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
    backbtn.disabled = true;

    row.innerHTML = `
        <td>${question}</td>
        <td>${inputRadio}</td>
        <td>${punctuation}</td>
    `;
    row.appendChild(statusCell);
    table.appendChild(row);

    setTimeout(() => {
        statusCell.textContent = 'OK';
        backbtn.disabled = false;
    }, 5000);

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
