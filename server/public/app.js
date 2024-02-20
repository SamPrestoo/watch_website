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


// Image Slider
let slideIndex = 0;
let timer;

function showSlides(n) {
    var i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    else if (n < 1) { slideIndex = slides.length }
    else { slideIndex = n; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function autoSlide() {
    var i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

autoSlide();


window.addEventListener('scroll', function() {
    const fadeIns = document.querySelectorAll('#fade-in');
    for (let i = 0; i < fadeIns.length; i++) {
      const fadeIn = fadeIns[i];
      const fadeInPosition = fadeIn.getBoundingClientRect().top + fadeIn.offsetHeight / 2;
      const screenPosition = window.innerHeight;
      if (fadeInPosition < screenPosition) {
        fadeIn.style.opacity = '1';
      }
    }
  });



// Main section hover animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const watch = document.querySelector('.watch img');

// moving animation event
container.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1370) {
        let xAxis = (window.innerWidth / 2 - e.pageX)/30;
        let yAxis = (window.innerHeight / 2 - e.pageY)/30;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    
});

//animate in
container.addEventListener('mouseenter', (e) => {
    if (window.innerWidth > 1370) {
        card.style.transition = 'none';

        //Popout effect
        title.style.transform = 'translateZ(150px)';
        watch.style.transform = 'translateZ(150px)';
    }
    
});
//animate out
container.addEventListener('mouseleave', (e) => {
    if (window.innerWidth > 1370) {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //Popback
        title.style.transform = 'translateZ(0px)';
        watch.style.transform = 'translateZ(0px)';
    }
    
});


