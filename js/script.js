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
 
<script type="text/javascript"> 
        function fakeClick(fn) {
            var $a = $('<a href="#" id="fakeClick"></a>');
                $a.bind("click", function(e) {
                    e.preventDefault();
                    fn();
                });

            $("body").append($a);

            var evt, 
                el = $("#fakeClick").get(0);

            if (document.createEvent) {
                evt = document.createEvent("MouseEvents");
                if (evt.initMouseEvent) {
                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    el.dispatchEvent(evt);
                }
            }

            $(el).remove();
        }

        $(function() {
            var video = $("#someVideo").get(0);

            fakeClick(function() {
                video.play();
            });
        });

        </script> 