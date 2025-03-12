document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(name)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Le nom ne doit contenir que des lettres.";
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer un email valide.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message envoyé avec succès !";
    setTimeout(() => { formMessage.textContent = ""; }, 5000);

    this.reset();
});
