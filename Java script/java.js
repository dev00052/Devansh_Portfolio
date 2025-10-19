// preloder section
document.addEventListener('DOMContentLoaded', function () {
    const line = document.querySelector('.line-reveal');
    const overlay = document.getElementById('preloader-overlay');
    const content = document.getElementById('main-content');

    window.addEventListener('load', function () {


        line.classList.add('is-ready');


        setTimeout(() => {

            overlay.classList.add('is-hidden');

            content.classList.add('is-visible');

            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);

        }, 1200);
    });
});




// for what My profession and what i can do
const name = new Typed(".text",
{

    strings: ["Front-Web Developer|", "Freelancer|", "Web Designer|"],
    typeSpeed: 160,
    backSpeed: 160,
    backDelay: 1000,
    loop: true

});




// cursor setting section
const cursorRing = document.querySelector('.cursor-ring');
const cursorDot = document.querySelector('.cursor-dot');
const interactiveElements = document.querySelectorAll('.interactive-button');

// 1. Smooth Mouse Following (Using requestAnimationFrame for best performance)
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    // Update the target position
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move the dot instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

// Loop for smoothing the ring movement
function animateCursorRing() {
    // Lerp (Linear Interpolation) for smooth movement
    ringX += (mouseX - ringX) * 0.1; // 0.1 is the smoothing factor
    ringY += (mouseY - ringY) * 0.1;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

// 2. Click Expansion Effect (The main interaction you asked for)
document.addEventListener('mousedown', () => {
    cursorRing.classList.add('expand');
});

document.addEventListener('mouseup', () => {
    cursorRing.classList.remove('expand');
});

// 3. Optional: Hover over interactive elements (Enhances the effect)
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('expand');
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('expand');
    });
});




// skills section js
const skillsSection = document.querySelector("#skills");
const skillCards = document.querySelectorAll(".skill-card");

function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        skillCards.forEach((card) => card.classList.add("animate"));
    }
}

window.addEventListener("scroll", animateSkills);




  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Newsletter form placeholder
  document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    e.target.reset();
  });
