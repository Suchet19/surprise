let messages = [
    "Please 😢",
    "Are you sure?",
    "Think again…",
    "Don't break my heart 💔",
    "Last chance 😭",
    "Say yes na…"
];

let index = 0;

function handleNo() {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    noBtn.textContent = messages[index];
    index = (index + 1) % messages.length;

    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.4) + "px";
}

function handleYes() {
    window.location.href = "yes.html";
}
