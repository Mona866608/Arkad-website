
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
    if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(name)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Le nom ne doit contenir que des lettres.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer un email valide.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message envoyé avec succès !";
    
    setTimeout(() => { formMessage.textContent = ""; }, 5000);

    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let intervalTime = 5000;
    let slideInterval;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
        });

        currentSlide++;
        if (currentSlide >= slides.length) { currentSlide = 0; }

        slides[currentSlide].classList.add("active");
    }

    slideInterval = setInterval(showSlides, intervalTime);
    function changeSlide(direction) {
        clearInterval(slideInterval); 
        slides.forEach(slide => slide.classList.remove("active"));

        currentSlide += direction;
        if (currentSlide < 0) { currentSlide = slides.length - 1; }
        if (currentSlide >= slides.length) { currentSlide = 0; }

        slides[currentSlide].classList.add("active");

        slideInterval = setInterval(showSlides, intervalTime);
    }

    document.querySelector(".prev").addEventListener("click", function () {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeSlide(1);
    });

    function changeSlide(direction) {
        slides.forEach(slide => slide.style.display = "none");
        currentSlide += direction;
        if (currentSlide < 1) { currentSlide = slides.length; }
        if (currentSlide > slides.length) { currentSlide = 1; }
        slides[currentSlide - 1].style.display = "block";
    }
});
