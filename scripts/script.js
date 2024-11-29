


let form = document.querySelector('.form')
let tittle = document.querySelector('.tittle')
let inputEmail = document.querySelector('.inputEmail')
let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/


function index() {

    setTimeout(() => {
        form.style.display = 'block'
        tittle.style.display = 'none'
    }, 5000)

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'F10') {
            form.style.display = 'block'
            tittle.style.display = 'none'
        }
    })
}


inputEmail.addEventListener('blur', (() => {

    if (validateEmail.test(inputEmail.value)) {

        createCookie(inputEmail.value)
        window.location.href = 'screen2.html'

    } else {
        let error = document.createElement('p')
        error.style.color = 'red'
        error.textContent = 'Correo incorrecto'

        form.appendChild(error)
    }

}))

function createCookie(email) {
    const date = new Date();
    const expiration = new Date(date.getTime() + 72 * 60 * 60 * 1000);
    const timestamp = date.getTime();
    const cookieString = `session=${email}|${timestamp}; expires=${expiration.toUTCString()}; path=/`;
    document.cookie = cookieString;
}
