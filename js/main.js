const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar-container');
const formBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form-container')
const formClose = document.getElementById('form-close');
const menuBtn = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');
const slideBtn = document.querySelectorAll('.slide-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
}

searchBtn.addEventListener('click',() => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

    
})

menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    
})


formBtn.addEventListener('click',() => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click',() => {
    loginForm.classList.remove('active')
})


slideBtn.forEach(btn => {
    btn.addEventListener('click',() => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src')
        document.querySelector('#image-slider').src=src;
    })
})

var swiper = new Swiper(".mySwiper ", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2000,
        disableOnIneraction:false,
    },
    brakpoints : {
     640: {
        slidesPerView: 1,
     },
     768: {
        slidesPerView: 2,
     },
     1024: {
        slidesPerView : 3
     }

    }
});

var swiper = new Swiper(".mySwiper ", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2000,
        disableOnIneraction:false,
    },
    brakpoints : {
      450:  {
       slidesPerView: 1,
      },
        
     640: {
        slidesPerView: 1,
     },
     768: {
        slidesPerView: 2,
     },
     1024: {
        slidesPerView : 3
     }

    }
});