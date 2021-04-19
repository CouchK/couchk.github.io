let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-image');
const totalSlides = slides.length;

document.getElementById('carousel-next-btn').addEventListener("click", function() {
   moveToNextSlide();
});

document.getElementById('carousel-prev-btn').addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition()
{
    for(let slide of slides)
    {
        slide.classList.remove('carousel-image-visible');
        slide.classList.add('carousel-image-hidden');
    }

    slides[slidePosition].classList.add('carousel-image-visible');
}

function moveToNextSlide()
{
    //Last image of carousel
    if(slidePosition === totalSlides - 1)
    {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide()
{
    //First image of carousel
    if(slidePosition === 0)
    {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}



