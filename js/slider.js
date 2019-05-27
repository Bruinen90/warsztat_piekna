const allSlides = document.querySelectorAll('.welcome__sliderBox');
let currentSlide = 0;
const slidesContainer = document.querySelector('.welcome__slidesCont')

const changeSlide = (nextSlideNum) => {
    let slideToShow = nextSlideNum;
    if(nextSlideNum >= allSlides.length) {
        slideToShow = 0;
    } else if(nextSlideNum < 0) {
        slideToShow = allSlides.length
    }
    allSlides.forEach((slide, index) => {
        slide.classList.remove('welcome__sliderBox--active');
        if(index === slideToShow) {
            slide.classList.add('welcome__sliderBox--active');
        }
    });
    slidesContainer.style.transform = `translateX(${-slideToShow * 100}%)`
    currentSlide = slideToShow;
}

const startSlideShow = () => setInterval(()=>changeSlide(currentSlide+1), 4000);

startSlideShow()
