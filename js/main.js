(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar

    $(window).scroll(function () {
        if ($(window).width() < 992) {
            // Ensure bg-dark is always present on mobile
            $('.fixed-top').addClass('bg-dark');
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });

    $(document).ready(function () {
        if ($(window).width() < 992) {
            $('.top-bar').remove();
            $('.fixed-top').addClass('bg-dark shadow');
            $('.navbar-brand img').css('max-height', '40px');
            $('.navbar-brand h1').css('font-size', '1rem');
            let navbarHeight = $('.fixed-top').outerHeight();
            $('.carousel').css('margin-top', navbarHeight + 'px');
        } else {
            $('.carousel').css('margin-top', '0');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


})(jQuery);

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


const swiper2 = new Swiper('.slider-wrapper-two', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        }
    }
});



function sendMail() {
    let params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message')?.value
    }
    emailjs.send("service_sge3sc8", "template_oxh56dd", params)
        .then(() => {
            alert('Email sent!!');
        })
        .catch((error) => {
            alert('Failed to send email.');
            console.error('Error:', error);
        });
}

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMail();
});