// GESTION DU SLIDER AUTOMATIQUE ET MANUEL
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const intervalTime = 5000;
    let slideInterval;
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    function changeSlide(direction) {
        clearInterval(slideInterval);
        currentSlide += direction;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    // Lancement du slider automatique
    slideInterval = setInterval(nextSlide, intervalTime);
    showSlide(currentSlide); // Affiche le premier slide
    // Boutons précédent / suivant
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => changeSlide(-1));
        nextBtn.addEventListener("click", () => changeSlide(1));
    }
});
