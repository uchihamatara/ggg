// Togglebtn
var togglebtn = document.querySelector('.navbuttons');
togglebtn.addEventListener('mousedown',toggle);

function toggle(e){
    if (this.classList.contains('crossxs')) {
        this.classList.remove('crossxs');
    } else {
        this.classList.add('crossxs');
    }
}

// autoyear

const autoyear = document.getElementById('autoyear');
const autofillyear = new Date().getUTCFullYear();

autoyear.innerText = autofillyear;


