$('.burger').click( function() {
    $('.mobile-navbar, .burger, #wrapper').toggleClass('open-navbar')
})




new Swiper('.first-swiper .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 11,
    watchOverflow: true,
    breakpoints: {
        426: {
            slidesPerView: 5,
            spaceBetween: 11
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: false,
        clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    keyboard: {
        enable: true,
    },
    speed:800

})

new Swiper('.enjoy-img .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed:1200

})

