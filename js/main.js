function checkPass() {
    const passA = document.getElementById('password').value;
    const passB = document.getElementById('re-password').value;
    if (passA === passB) {
        return true;
    } else {
        return false
    }
}

const rePass = document.getElementById('re-password');

rePass.addEventListener('focusout', () => {
    if (!checkPass()) {
        rePass.style.border = '4px solid red'
    } else {
        rePass.style.border = '2px solid rgba(48, 161, 48, 0.582)'
    }
});

