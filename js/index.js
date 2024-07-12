const scrollButton = document.querySelectorAll('.scrollButton')
const form = document.querySelector('.scrollElement')
const timer = document.querySelector('.timer');
const HeaderContainer = document.querySelectorAll(".header__container")[0];

for (let i = 0; i < scrollButton.length; i++) {
    scrollButton[i].addEventListener('click', (e) => {
        e.preventDefault()

        form.scrollIntoView({ 
            behavior: "smooth", 
            block: "start", 
            inline: "nearest" 
        })
    })
}

const swiper = new Swiper('.slider-webinar', {
    spaceBetween: 24,
    navigation: {
        nextEl: '.slider-webinar__nextButton',
        prevEl: '.slider-webinar__prevButton',
    },
    slidesPerView: 1,
    initialSlide: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    slidesOffsetAfter: 0,
    breakpoints: {
        1750: {
            slidesPerView: 5
        },
        1455: {
            slidesPerView: 4
        },
        1055: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2,
            centerSlides: true
        }
    }
})

const timerCountdown = () => {
    let number = timer.textContent;

    if (number > 0) {
        number--;
        timer.textContent = number;
    }
}

setInterval(timerCountdown, 1000)

function checkScreenSize() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.HeaderContainer.clientWidth;
    if (windowWidth < 895) {
        const headerLiveContainer = document.querySelector('.header__live');
        if (headerLiveContainer) {
            headerLiveContainer.remove();
        }

        const divElement = document.createElement("div");
        divElement.className = "header__live live-header";

        const anchorElement = document.createElement("div");
        anchorElement.className = "live-header__container";

        const circleDiv = document.createElement("div");
        circleDiv.className = "live-header__circle";

        const textDiv = document.createElement("div");
        textDiv.className = "live-header__text";

        textDiv.innerHTML = "FREE Live Interactive broadcast with Sabio Team"

        anchorElement.appendChild(circleDiv);
        anchorElement.appendChild(textDiv);

        divElement.appendChild(anchorElement);

        HeaderContainer.append(divElement);
    }
    else {
        const headerLiveContainer = document.querySelector('.header__live');
        if (headerLiveContainer) {
            headerLiveContainer.remove();
        }

        const divElement = document.createElement("div");
        divElement.className = "header__live live-header";

        const anchorElement = document.createElement("div");
        anchorElement.className = "live-header__container";

        const circleDiv = document.createElement("div");
        circleDiv.className = "live-header__circle";

        const textDiv = document.createElement("div");
        textDiv.className = "live-header__text";

        textDiv.innerHTML = "FREE Live Interactive broadcast with Sabio Team"

        anchorElement.appendChild(circleDiv);
        anchorElement.appendChild(textDiv);

        divElement.appendChild(anchorElement);

        const HeaderButton = document.querySelectorAll(".header__button")[0];

        HeaderButton.before(divElement);
    }
}

const setSlider = () => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.HeaderContainer.clientWidth;

    if (windowWidth < 600) {
        const slider = document.querySelector('.meet__slider');
        slider.classList.add('swiper')

        const sliderWrapper = document.querySelector('.meet__slides');
        sliderWrapper.classList.add('swiper-wrapper')

        const slides = document.querySelectorAll('.meet__slide');
        slides.forEach(element => {
            element.classList.add('swiper-slide')
        });

        const swiper2 = new Swiper('.meet__slider', {
            slidesPerView: 1,
            centerSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    } else {
        const slider = document.querySelector('.meet__slider');
        slider.classList.remove('swiper')

        const sliderWrapper = document.querySelector('.meet__slides');
        sliderWrapper.classList.remove('swiper-wrapper')

        const slides = document.querySelectorAll('.meet__slide');
        slides.forEach(element => {
            element.classList.remove('swiper-slide')
        });
    }
}

const setResizeMethods = () => {
    setSlider()
    checkScreenSize()
}

window.onload = setResizeMethods;
window.onresize = setResizeMethods;