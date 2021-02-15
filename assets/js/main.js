const carouselSlideLeft = document.querySelector('.carousel-slide-left');
const carouselImagesLeft = document.querySelectorAll('.carousel-slide-left img');
const carouselSlideRight = document.querySelector('.carousel-slide-right');
const carouselImagesRight = document.querySelectorAll('.carousel-slide-right img');

//Buttons
const prevBtnLeft = document.querySelector('#prevBtn1');
const nextBtnLeft = document.querySelector('#nextBtn1');
const prevBtnRight = document.querySelector('#prevBtn2');
const nextBtnRight = document.querySelector('#nextBtn2');

//Counters
let counterLeft = 1;
let counterRight = 1;
const sizeLeft = carouselImagesLeft[0].clientWidth;
const sizeRight = carouselImagesRight[0].clientWidth;

carouselSlideLeft.style.transform = 'translateX(' + (-sizeLeft * counterLeft) + 'px)';
carouselSlideRight.style.transform = 'translateX(' + (-sizeRight * counterRight) + 'px)';

/* Carousel Left Event Listeners */
nextBtnLeft.addEventListener('click', () => {
    if(counterLeft >= carouselImagesLeft.length - 1) return;
    carouselSlideLeft.style.transition = 'transform 0.4s ease-in-out';
   counterLeft++;
   carouselSlideLeft.style.transform = 'translateX(' + (-sizeLeft * counterLeft) + 'px)';
});

prevBtnLeft.addEventListener('click', () => {
    if(counterLeft <= 0) return;
    carouselSlideLeft.style.transition = 'transform 0.4s ease-in-out';
    counterLeft--;
    carouselSlideLeft.style.transform = 'translateX(' + (-sizeLeft * counterLeft) + 'px)';
});

carouselSlideLeft.addEventListener('transitionend', () => {
    if(carouselImagesLeft[counterLeft].id === 'lastClone1')
    {
        carouselSlideLeft.style.transition = 'none';
        counterLeft = carouselImagesLeft.length - 2;
        carouselSlideLeft.style.transform = 'translateX(' + (-sizeLeft * counterLeft) + 'px)';
    }

    if(carouselImagesLeft[counterLeft].id === 'firstClone1')
    {
        carouselSlideLeft.style.transition = 'none';
        counterLeft = carouselImagesLeft.length - counterLeft;
        carouselSlideLeft.style.transform = 'translateX(' + (-sizeLeft * counterLeft) + 'px)';
    }
});

/* Carousel Right Event Listeners */
nextBtnRight.addEventListener('click', () => {
    if(counterRight >= carouselImagesRight.length - 1) return;
    carouselSlideRight.style.transition = 'transform 0.6s ease-in-out';
    counterRight++;
    carouselSlideRight.style.transform = 'translateX(' + (-sizeRight * counterRight) + 'px)';
});

prevBtnRight.addEventListener('click', () => {
    if(counterRight <= 0) return;
    carouselSlideRight.style.transition = 'transform 0.6s ease-in-out';
    counterRight--;
    carouselSlideRight.style.transform = 'translateX(' + (-sizeRight * counterRight) + 'px)';
});

carouselSlideRight.addEventListener('transitionend', () => {
    if(carouselImagesRight[counterRight].id === 'lastClone2')
    {
        carouselSlideRight.style.transition = 'none';
        counterRight = carouselImagesRight.length - 2;
        carouselSlideRight.style.transform = 'translateX(' + (-sizeRight * counterRight) + 'px)';
    }

    if(carouselImagesRight[counterRight].id === 'firstClone2')
    {
        carouselSlideRight.style.transition = 'none';
        counterRight = carouselImagesRight.length - counterRight;
        carouselSlideRight.style.transform = 'translateX(' + (-sizeRight * counterRight) + 'px)';
    }
});