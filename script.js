
// Preloader
document.body.style.overflow = "hidden";
setTimeout(function() {
  document.body.style.overflow = "";
}, 2500); 

window.onload = function() {
  let preloadElement = document.querySelector('.preload');
  setTimeout(function() {
    preloadElement.style.animation = 'slideUp 1s ease forwards';
  }, 2000); 
};

// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px")
})
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 300)
})

// Navigationsmenu 
gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {
  link.addEventListener('click', e => {
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1,
      ease: "elastic.out(1,0.5)",
      absolute: true,
    });
  });
});

ScrollReveal().reveal('#section1', { delay: 2400 });


// Portfolio Magnus stjerne roter med scroll
function scrollRotate() {
  let images = document.querySelectorAll('.star');
  images.forEach(function(image) {
    image.style.transform = "rotate(" + window.scrollY/4 + "deg)";
  });
}
window.onscroll = function() {
  scrollRotate();
};

// Scroll til toppen
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); /* Rul til toppen med en glat overgang */
}

