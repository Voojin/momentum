const date = new Date();
const hours = date.getHours();
let greeting = document.querySelector('.greeting');




switch (true) {

    case (hours >= 5) && (hours < 11): greeting.innerHTML = 'Good morning,'

        break;

    case (hours >= 11) && (hours < 16): greeting.innerHTML = 'Good day,'

        break;

    case (hours >= 16) && (hours <= 23): greeting.innerHTML = 'Good evening,'

        break;

    case (hours >= 0) && (hours < 5): greeting.innerHTML = 'Good night,'

        break;


}

function setLocalStorage() {
    const name = document.querySelector('.name')
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)