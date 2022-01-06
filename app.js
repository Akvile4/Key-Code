const keyPress = document.getElementById('keycode-display');
const key = document.getElementById('key');
const keyCode = document.getElementById('code');
const keyWhich = document.getElementById('which')

document.addEventListener('keydown', (event) => {
    key.textContent = event.key;
    keyCode.textContent = event.code;
    keyWhich.textContent = event.which;
    keyPress.textContent = event.which;
});