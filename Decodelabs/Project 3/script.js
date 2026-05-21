const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

let count = 0;
const countDisplay = document.getElementById("count");

function increase() {
    count++;
    countDisplay.textContent = count;
}

function decrease() {
    count--;
    countDisplay.textContent = count;
}

const toggleBtn = document.getElementById("toggleTextBtn");
const text = document.getElementById("text");

toggleBtn.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});

const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");

inputBox.addEventListener("input", () => {
    output.textContent = inputBox.value;
});