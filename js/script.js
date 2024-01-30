var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 0,
    centeredSlides: false,
    freeMode: false,
    grabCursor: true,
    loop: true,
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 12000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 4
      },
      700: {
        slidesPerView: 4
      }
    }
  
  });
  