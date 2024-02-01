var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
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
      delay: 30000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
      1536: {
        slidesPerView: 4,
      }
    }
  
  });
  