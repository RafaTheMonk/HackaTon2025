const index = document.getElementById("home");
const home = document.getElementById("forms");
const logo = document.getElementById("logo"); 
const login = document.getElementById("login")

login.addEventListener("click", () => {
  window.location.href = "forms.html"; 
});


logo.addEventListener("click", () => {
    window.location.href = "home.html";
});

home.addEventListener("click", () => {
    window.location.href = "form.html";
});

logoImg.addEventListener("click", () => {
    window.location.href = "index.html";
});

function sendEmail() {
    const doubtText = document.getElementById('doubtText').value;
  
    if (doubtText) {
      const mailtoLink = `mailto:rafael.valadares@ucsal.edu.br?subject=Dúvida&body=${encodeURIComponent(doubtText)}`;
      window.location.href = mailtoLink;
    } else {
      alert('Por favor, escreva sua dúvida antes de enviar.');
    }
  }
  