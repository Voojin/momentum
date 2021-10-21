const settingBtn = document.querySelector('.sett-btn');
const settingList = document.querySelector('.main-settings');
const weatherBtn = document.querySelector('.weather-btn');
const weatherList = document.querySelector('.weather');
const playerBtn = document.querySelector('.player-btn');
const player = document.querySelector('.player');
const quoteBtn = document.querySelector('.quote-btn');
const quotelist = document.querySelector('.footer');
const greetingBtn = document.querySelector('.greeting-btn');
const greetinglist = document.querySelector('.greeting-container');
const timeBtn = document.querySelector('.time-btn');
const timelist = document.querySelector('.time');
const dateBtn = document.querySelector('.date-btn');
const datelist = document.querySelector('.date');
const setLng = document.querySelector('.lang-choose')


settingBtn.onclick = function () {
    settingList.classList.toggle('hide');
}
weatherBtn.onclick = function () {
    weatherList.classList.toggle('off');
    if (weatherList.classList.contains('off')) {
        weatherBtn.textContent = 'Show'
        weatherBtn.style.backgroundColor = 'red'
        
    } else {
        weatherBtn.textContent = 'Hide'
        weatherBtn.style.backgroundColor = 'green'
    }
    
}
playerBtn.onclick = function () {
    player.classList.toggle('off');
    if (player.classList.contains('off')) {
        playerBtn.textContent = 'Show'
        playerBtn.style.backgroundColor = 'red'
    } else {
        playerBtn.textContent = 'Hide'
        playerBtn.style.backgroundColor = 'green'
    }
    
}
quoteBtn.onclick = function () {
    quotelist.classList.toggle('off');
    if (quotelist.classList.contains('off')) {
        quoteBtn.textContent = 'Show'
        quoteBtn.style.backgroundColor = 'red'
    } else {
        quoteBtn.textContent = 'Hide'
        quoteBtn.style.backgroundColor = 'green'

    }
    
}
greetingBtn.onclick = function () {
    greetinglist.classList.toggle('off');
    if (greetinglist.classList.contains('off')) {
        greetingBtn.textContent = 'Show'
        greetingBtn.style.backgroundColor = 'red'
    } else {
        greetingBtn.textContent = 'Hide'
        greetingBtn.style.backgroundColor = 'green'
    }
    
}
timeBtn.onclick = function () {
    timelist.classList.toggle('off');
    if (timelist.classList.contains('off')) {
        timeBtn.textContent = 'Show'
        timeBtn.style.backgroundColor = 'red'
    } else {
        timeBtn.textContent = 'Hide'
        timeBtn.style.backgroundColor = 'green'
    }
}    
dateBtn.onclick = function () {
    datelist.classList.toggle('off');
    if (datelist.classList.contains('off')) {
        dateBtn.textContent = 'Show'
        dateBtn.style.backgroundColor = 'red'
    } else {
        dateBtn.textContent = 'Hide'
        dateBtn.style.backgroundColor = 'green'
    }
}
setLng.onclick = function () {
    setLng.classList.toggle('ru');
if (setLng.classList.contains('ru') && datelist.classList.contains('off')) {
    dateBtn.textContent = 'Показать'
}

}   





