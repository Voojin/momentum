const dobtn = document.querySelector('.dodutton');
const dotext = document.querySelector('.dotext');
const dodel = document.querySelector('.dodel')

dobtn.onclick = function () {
 dotext.classList.add('dodo');
//     if (dotext.classList.contains('dodo')) {
        
        dobtn.style.backgroundColor = 'green'
        dodel.style.backgroundColor = 'red'

        if (dotext.value.length == 0) {
            dobtn.style.backgroundColor = 'white'
            dodel.style.backgroundColor = 'white'  
   }
}
function  setDo() {

    localStorage.setItem('dotxt', dotext.value);
    localStorage.setItem('doclas', dotext.className)
    localStorage.setItem('dogreen', dobtn.style.backgroundColor)
    localStorage.setItem('dored', dodel.style.backgroundColor)
    
}
window.addEventListener('beforeunload', setDo)

function getDo() {


    dotext.value = localStorage.getItem('dotxt');
   
    dotext.classList = localStorage.getItem('doclas');
    dobtn.style.backgroundColor = localStorage.getItem('dogreen');
    dodel.style.backgroundColor = localStorage.getItem('dored');
}
window.addEventListener('load', getDo)

dodel.onclick = function  () {
    localStorage.removeItem('dotxt')
    dotext.value = ''
    dotext.classList.remove('dodo')
    dobtn.style.backgroundColor = 'white'
    dodel.style.backgroundColor = 'white'
    
}

