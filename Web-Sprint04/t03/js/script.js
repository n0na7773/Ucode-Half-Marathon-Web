let slideIndex = 1;
let lol = 0;
showSlides(slideIndex);

function nextSlide()     {showSlides(slideIndex += 0);}
function previousSlide() {showSlides(slideIndex -= 2);}
function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length
    for (let slide of slides) slide.style.display = "none";
    
    slides[slideIndex - 1].style.display = "block";
    clearInterval(lol);
    lol = setInterval(showSlides, 3000, slideIndex += 1);
}