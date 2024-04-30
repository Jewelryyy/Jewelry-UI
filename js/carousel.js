var carousel = document.querySelector('.carousel');
var carouselList = carousel.querySelector('.carousel_list');
var carouselItems = carousel.querySelectorAll('.carousel_item');
var prevButton = carousel.querySelector('.prev');
var nextButton = carousel.querySelector('.next');

var currentIndex = 0;

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

function updateCarousel() {
    var offset = -currentIndex * carousel.offsetWidth;
    carouselList.style.transform = 'translateX(' + offset + 'px)';
}