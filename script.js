// Slider Umum
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

// Slider "Kelebihan"
let indexKelebihan = 0;
const kelebihanSlides = document.querySelectorAll(".kelebihan");

function showKelebihanSlide(n) {
    if (kelebihanSlides.length === 0) return;
    kelebihanSlides.forEach((slide) => (slide.style.display = "none"));
    kelebihanSlides[n].style.display = "block";
}

function nextKelebihan() {
    indexKelebihan = (indexKelebihan + 1) % kelebihanSlides.length;
    showKelebihanSlide(indexKelebihan);
}

function prevKelebihan() {
    indexKelebihan = (indexKelebihan - 1 + kelebihanSlides.length) % kelebihanSlides.length;
    showKelebihanSlide(indexKelebihan);
}

document.addEventListener("DOMContentLoaded", () => {
    showKelebihanSlide(indexKelebihan);
    setInterval(nextKelebihan, 3000);
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
