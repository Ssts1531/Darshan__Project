  // Modal and Slider functionality for each modal
  const showSliderBtns = document.querySelectorAll('[id^="showSliderBtn"]');
  const modalSliders = document.querySelectorAll('[id^="modalSlider"]');
  const closeModals = document.querySelectorAll('[id^="closeModal"]');
  
  showSliderBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modalSliders[index].style.display = 'flex'; // Show the corresponding modal
    });
  });

  closeModals.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
      modalSliders[index].style.display = 'none'; // Close the corresponding modal
    });
  });

  window.addEventListener('click', (event) => {
    modalSliders.forEach((modal, index) => {
      if (event.target === modal) {
        modal.style.display = 'none'; // Close modal if clicking outside
      }
    });
  });

  // Slider functionality for each modal
  let currentIndex = 0;
  const totalItems = 1; // Adjust according to number of slides
  const sliderItems = document.querySelectorAll('.slider li');
  const navDots = document.querySelectorAll('.slider nav a');
  
  function showSlide(index) {
    sliderItems[currentIndex].classList.remove('current');
    navDots[currentIndex].classList.remove('current_dot');

    currentIndex = (index + totalItems) % totalItems;

    sliderItems[currentIndex].classList.add('current');
    navDots[currentIndex].classList.add('current_dot');
  }

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);

  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });


  {
  class SliderClip {
      constructor(el) {
          this.el = el;
          this.Slides = Array.from(this.el.querySelectorAll('li'));
          this.Nav = Array.from(this.el.querySelectorAll('nav a'));
          this.totalSlides = this.Slides.length;
          this.current = 0;
          this.autoPlay = true; //true or false
          this.timeTrans = 4000; //transition time in milliseconds
          this.IndexElements = [];

          for(let i=0;i<this.totalSlides;i++) {
              this.IndexElements.push(i);
          }

          this.setCurret();
          this.initEvents();
      }
      setCurret() {
          this.Slides[this.current].classList.add('current');
          this.Nav[this.current].classList.add('current_dot');
      }
      initEvents() {
          const self = this;

          this.Nav.forEach((dot) => {
              dot.addEventListener('click', (ele) => {
                  ele.preventDefault();
                  this.changeSlide(this.Nav.indexOf(dot));
              })
          })

          this.el.addEventListener('mouseenter', () => self.autoPlay = false);
          this.el.addEventListener('mouseleave', () => self.autoPlay = true);

          setInterval(function() {
              if (self.autoPlay) {
                  self.current = self.current < self.Slides.length-1 ? self.current + 1 : 0;
                  self.changeSlide(self.current);
              }
          }, this.timeTrans);

      }
      changeSlide(index) {

          this.Nav.forEach((allDot) => allDot.classList.remove('current_dot'));

          this.Slides.forEach((allSlides) => allSlides.classList.remove('prev', 'current'));

          const getAllPrev = value => value < index;

          const prevElements = this.IndexElements.filter(getAllPrev);

          prevElements.forEach((indexPrevEle) => this.Slides[indexPrevEle].classList.add('prev'));

          this.Slides[index].classList.add('current');
          this.Nav[index].classList.add('current_dot');
      }
  }

  const slider = new SliderClip(document.querySelector('.slider'));
}

/* --------------*/
document.querySelectorAll('.card').forEach((card, index) => {
card.addEventListener('click', () => {
  const modal = document.getElementById(`modalSlider${index + 1}`);
  if (modal) modal.style.display = 'flex';
});
});

document.querySelectorAll('.close').forEach((close, index) => {
close.addEventListener('click', () => {
  const modal = document.getElementById(`modalSlider${index + 1}`);
  if (modal) modal.style.display = 'none';
});
});

window.addEventListener('click', (event) => {
document.querySelectorAll('.modal').forEach((modal) => {
  if (event.target === modal) modal.style.display = 'none';
});
});

// Scoped slider functionality
document.querySelectorAll('.modal').forEach((modal, index) => {
const sliderItems = modal.querySelectorAll('.slider li');
const navDots = modal.querySelectorAll('.slider nav a');
let currentIndex = 0;

if (sliderItems.length && navDots.length) {
  const totalItems = sliderItems.length;

  function showSlide(idx) {
    sliderItems[currentIndex].classList.remove('current');
    navDots[currentIndex].classList.remove('current_dot');

    currentIndex = (idx + totalItems) % totalItems;

    sliderItems[currentIndex].classList.add('current');
    navDots[currentIndex].classList.add('current_dot');
  }

  navDots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => showSlide(dotIndex));
  });

  setInterval(() => showSlide(currentIndex + 1), 5000);
}
});

/* Jyotirlingas */
 



/*** Scroll top button  */
let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);

/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);


/* Hide Inspite
document.addEventListener('contextmenu', event => event.preventDefault()); */
