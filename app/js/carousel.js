const track = document.querySelector('.track');
const slides = Array.from(track.children);
const prev = document.querySelector('.leftArrow')
const next = document.querySelector('.rightArrow')

const firstSlide = document.querySelector('.firstSlide');
const lastSlide = document.querySelector('.lastSlide');


const slideWidth = slides[0].getBoundingClientRect().width;

//Arranging the slides next to each other
const getSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(getSlidePosition);



const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}


function checkSlide() {

    if (firstSlide.classList.contains('currentSlide')) {
        prev.classList.add('d-none');
    } else {
        prev.classList.remove('d-none');
    }

    if (lastSlide.classList.contains('currentSlide')) {
        next.classList.add('d-none');
    } else {
        next.classList.remove('d-none');
    }
}

checkSlide();

//Move to previous slide
prev.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide')
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    checkSlide();
})

//Move to next slide 
next.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide')
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    checkSlide();
})




