//sélectionner nos éléments
let btn = document.querySelector("button");
let hiddenText = document.querySelector(".hidden-text");
let hidden = true;

//cacher le message
hiddenText.style.display = "none";

//détecter le click
btn.addEventListener("click", () => {
    if(hidden) {
        btn.textContent = "Cacher";
        hiddenText.style.display = "block";
        hidden = false;
    } else {
        btn.textContent = "Un secret...";
        hiddenText.style.display = "none";
        hidden = true;
    }
})
