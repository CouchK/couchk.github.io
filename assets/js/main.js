let slidePosition1 = 0;
let slidePosition2 = 0;
const slides1 = document.getElementsByClassName('carousel-image1');
const slides2 = document.getElementsByClassName('carousel-image2');
const totalSlides1 = slides1.length;
const totalSlides2 = slides2.length;

document.getElementById('carousel-next-btn1').addEventListener("click", function() {
   moveToNextSlide(1);
});

document.getElementById('carousel-prev-btn1').addEventListener("click", function() {
    moveToPrevSlide(1);
});

document.getElementById('carousel-next-btn2').addEventListener("click", function() {
    moveToNextSlide(2);
});

document.getElementById('carousel-prev-btn2').addEventListener("click", function() {
    moveToPrevSlide(2);
});

function updateSlidePosition(num)
{
    if(num === 1)
    {
        for (let slide of slides1)
        {
            slide.classList.remove('carousel-image-visible1');
            slide.classList.add('carousel-image-hidden1');
        }
        slides1[slidePosition1].classList.add('carousel-image-visible1');
    }
    else {
        for (let slide2 of slides2)
        {
            slide2.classList.remove('carousel-image-visible2');
            slide2.classList.add('carousel-image-hidden2');
        }
        slides2[slidePosition2].classList.add('carousel-image-visible2');
    }
}

function moveToNextSlide(num)
{
    if(num === 1)
    {
        //Last image of carousel
        if(slidePosition1 === totalSlides1 - 1)
        {
            slidePosition1 = 0;
        }
        else {
            slidePosition1++;
        }
        updateSlidePosition(1);
    }
    else
    {
        if(slidePosition2 === totalSlides2 - 1)
        {
            slidePosition2 = 0;
        }
        else {
            slidePosition2++;
        }
        updateSlidePosition(2);
    }
}

function moveToPrevSlide(num)
{
    if(num === 1)
    {
        //First image of carousel
        if (slidePosition1 === 0)
        {
            slidePosition1 = totalSlides1 - 1;
        } else {
            slidePosition1--;
        }
    }
    else
    {
        if(slidePosition2 === 0)
        {
            slidePosition2 = totalSlides2 - 1;
        }
        else {
            slidePosition2--;
        }
    }
    updateSlidePosition();
}



