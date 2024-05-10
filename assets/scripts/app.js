const navToggle = document.querySelector('.nav__toggle')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const header = document.querySelector('.header')
const sections = document.querySelectorAll('main > section')
const menuItems = document.querySelectorAll('.menu__item')
navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('nav__toggle--active')
    menu.classList.toggle('menu--show')
    cover.classList.toggle('cover--show')
})


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".next__btn",
        prevEl: ".prev__btn",
    },

    breakpoints: {
        750: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    }
});
let blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".next__btn__blog",
        prevEl: ".prev__btn__blog",
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});

function scrollHeader() {
    this.scrollY >= 50 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll')
}
window.addEventListener('scroll', scrollHeader)




function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}

const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
});

function observerHandler(allSections) {
    allSections.map(section => {
        if (section.isIntersecting) {
            let sectionClassName = section.target.className
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.add('menu__item--active')
        } else {
            let sectionClassName = section.target.className
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.remove('menu__item--active')
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        removeActiveClass('menu__item--active')
        item.classList.add('menu__item--active')
        let sectionClass = item.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffsetTop - 157,
            behavior: 'smooth'
        })
    })
})


// Scroll Reveal Codes
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
})
sr.reveal('.home', {delay: 300, origin: 'bottom'})
sr.reveal('.experiences', {delay: 300, origin: 'left'})
sr.reveal('.work-samples', {delay: 300, origin: 'right'})
sr.reveal('.testimonial', {delay: 300, origin: 'top'})
sr.reveal('.blog', {delay: 300, origin: 'bottom'})
sr.reveal('.footer', {delay: 300, origin: 'left'})