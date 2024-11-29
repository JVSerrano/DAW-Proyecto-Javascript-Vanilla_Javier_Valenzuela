function getCookieValue(cookieName) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === cookieName) {
            return value;
        }
    }
    return null;
}

let sessionCookie = getCookieValue('session');
let messageCookie = document.querySelector('.message');



    if (sessionCookie) {
        let [email, timestamp] = sessionCookie.split('|')

        timestamp = parseInt(timestamp, 10)

        let lastVisit = new Date(parseInt(timestamp))
        let date = lastVisit.toLocaleDateString('es-ES')
        let time = lastVisit.toLocaleTimeString('es-ES')


        let messageCookie = document.querySelector('.message')

        messageCookie.innerHTML = `Hola <strong>${email}</strong><br>
                La última vez que entraste fue el ${date} a las ${time}.`

    }else{
        messageCookie.innerHTML = 'No hay información de sesión'
    }
