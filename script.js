let messages = [
    "Noooo😭",
    "Yaak hinge heltya🥲",
    "Innond sari yochane madu please🥺",
    "Nijja agalva?😗",
    "Huu heluuuuu😤",
    "Stop thattt😢"
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

/* Floating emoji hearts (violet) */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💜";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 800);
