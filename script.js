// script.js

// Slider Gambar
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    setInterval(nextSlide, 3000); // Auto-slide setiap 3 detik
});

// Timer Promo
function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        document.getElementById("countdown").textContent = `${minutes}m ${seconds}s`;
        if (--timer < 0) {
            document.getElementById("countdown").textContent = "Promo Berakhir!";
        }
    }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
    startCountdown(600); // 10 menit
});
