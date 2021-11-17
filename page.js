const container = document.querySelector('.container');
const slideLeft = document.querySelector('.left-slider');
const slideRight = document.querySelector('.right-slider');
const upBTN = document.querySelector('.up');
const downBTN = document.querySelector('.down');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1)*100}vh`;

upBTN.addEventListener('click', () => changeSlide('up'));
downBTN.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength-1)
        activeSlideIndex = 0;
    }

    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0)
        activeSlideIndex = slidesLength - 1;
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}