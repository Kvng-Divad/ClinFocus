/* swiper */
var swiperTestimonial = new Swiper (".testimonial-container", {
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 7500,
        diableOnInteraction:false,
    },
    breakpoints: {
        0:{
            slidesPerView:'1',
        },
        960:{
            slidesPerView:'3',
        }
    },
    
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });  

var swiperAbout = new Swiper (".slider", {
        spaceBetween: 0,
        loop:true,
        grabCursor: true,
        autoplay:{
            delay: 5000,
            disableOninteraction:false,
        },
        slidesPerView:'auto',
        centeredSlides:true,
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        }, 
});