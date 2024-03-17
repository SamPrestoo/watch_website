const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll(".nav_link_pages").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))







// Function to navigate slides
function plusSlides(n, slideshowId) {
    var slideshow = document.getElementById(slideshowId);
    if (n === 1) {
        showSlides(slideshow.currentSlideIndex += n, slideshow);
    }
    if (n === -1) {
        showSlides(slideshow.currentSlideIndex += n, slideshow);
    }
}







// Function to display a specific slide
function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

// Function to show slides
function showSlides(n, slideshow) {
    var i;
    var slides = slideshow.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideshow.currentSlideIndex = 1;
    } else if (n < 1) {
        slideshow.currentSlideIndex = slides.length;
    } else {
        slideshow.currentSlideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideshow.currentSlideIndex - 1].style.display = "block";
}


// Initialize each slideshow
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

var slideshow4 = document.getElementById("slideshow4");
slideshow4.currentSlideIndex = 1;
showSlides(slideshow4.currentSlideIndex, slideshow4);

var slideshow5 = document.getElementById("slideshow5");
slideshow5.currentSlideIndex = 1;
showSlides(slideshow5.currentSlideIndex, slideshow5);

var slideshow6 = document.getElementById("slideshow6");
slideshow6.currentSlideIndex = 1;
showSlides(slideshow6.currentSlideIndex, slideshow6);

var slideshow7 = document.getElementById("slideshow7");
slideshow7.currentSlideIndex = 1;
showSlides(slideshow7.currentSlideIndex, slideshow7);

var slideshow8 = document.getElementById("slideshow8");
slideshow8.currentSlideIndex = 1;
showSlides(slideshow8.currentSlideIndex, slideshow8);

var slideshow9 = document.getElementById("slideshow9");
slideshow9.currentSlideIndex = 1;
showSlides(slideshow9.currentSlideIndex, slideshow9);

var slideshow10 = document.getElementById("slideshow10");
slideshow10.currentSlideIndex = 1;
showSlides(slideshow10.currentSlideIndex, slideshow10);

var slideshow11 = document.getElementById("slideshow11");
slideshow11.currentSlideIndex = 1;
showSlides(slideshow11.currentSlideIndex, slideshow11);

var slideshow12 = document.getElementById("slideshow12");
slideshow12.currentSlideIndex = 1;
showSlides(slideshow12.currentSlideIndex, slideshow12);

var slideshow13 = document.getElementById("slideshow13");
slideshow13.currentSlideIndex = 1;
showSlides(slideshow13.currentSlideIndex, slideshow13);

var slideshow14 = document.getElementById("slideshow14");
slideshow14.currentSlideIndex = 1;
showSlides(slideshow14.currentSlideIndex, slideshow14);

var slideshow15 = document.getElementById("slideshow15");
slideshow15.currentSlideIndex = 1;
showSlides(slideshow15.currentSlideIndex, slideshow15);

// Add more slideshows for other products as needed
// Remember to adjust image sources and IDs accordingly
