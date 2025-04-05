const index = document.getElementById("home");
const home = document.getElementById("form");
const logoImg = document.getElementById("logo-img"); // Agora o ID está corrigido
const avançar = document.getElementById("login");

avançar.addEventListener("click", () => {
    console.log("Avançar clicado");
    window.location.href = "form.html";
});

index.addEventListener("click", () => {
    window.location.href = "home.html";
});

home.addEventListener("click", () => {
    window.location.href = "form.html";
});

logoImg.addEventListener("click", () => {
    window.location.href = "index.html";
});