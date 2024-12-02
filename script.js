let display = document.getElementById('display');
const themeToggle = document.getElementById('themeToggle');

function appendCharacter(char) {
    display.innerText += char;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', themeToggle.checked);
});
