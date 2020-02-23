var slideIndex = 1;
showSlides(slideIndex);function plusSlides(v) {
    showSlides(slideIndex += n);
}function currSlide(v) {
    showSlides(slideIndex = n);
}function showSlides(v) {
    var x;
    var slides = $('.mySlides');
    var dots = $('.dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active,", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}