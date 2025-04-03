/**variable DoM**/
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
let slides = document.getElementsByClassName("slide");
let dots = document.getElementById("dots");
let index = 0;

console.log(slidesContenu.length);

/**fonction*/
/*ajout de div dot en fonction de la taille du tableaux*/
function numberDots() {
  for (let index = 0; index < slidesContenu.length; index++) {
    const divDot = document.createElement("div");
    divDot.className = "dot";
    if (index == 0) {
      divDot.classList.add("dot_selected");
    }
    dots.appendChild(divDot);
  }
}

/** changement vers la prochaine slide*/
let dot = document.getElementsByClassName("dot");

function hideCurrentSlide(hideSlide){
  let currentSlides=slides[index]
  currentSlides.classList.add (hideSlide)
  if(currentSlides.classList.contains('showLeft')){
    currentSlides.classList.remove('showLeft')
  }
  if(currentSlides.classList.contains('showRight')){
    currentSlides.classList.remove('showRight')
  }
  
  
}
function appearNextSlide(){
  let nextSlide = slides[(index+1)% slides.length]
  nextSlide.classList.add ('showRight')
  index=(index+1)% slides.length
  
  if(nextSlide.classList.contains('hideRight')){
    nextSlide.classList.remove('hideRight')
  }
  if(nextSlide.classList.contains('hideLeft')){
    nextSlide.classList.remove('hideLeft')
  }
}
function appearPreviousSlide(){
  
  let nextSlide = slides[(index-1+slides.length)% slides.length]
  nextSlide.classList.add ('showLeft')
  index=(index-1+slides.length)% slides.length
  if(nextSlide.classList.contains('hideRight')){
    nextSlide.classList.remove('hideRight')
  }
  if(nextSlide.classList.contains('hideLeft')){
    nextSlide.classList.remove('hideLeft')
  }
}

function miseAJourDot(){
  let currentDot = document.getElementsByClassName('dot_selected')
  currentDot[0].classList.remove('dot_selected')
  dot[index].classList.add('dot_selected') 
}



/**slide */
window.addEventListener("DOMContentLoaded", function () {
  numberDots();
});

leftArrow.addEventListener("click", () => {
  hideCurrentSlide('hideLeft')
  appearPreviousSlide()
  miseAJourDot()

});

rightArrow.addEventListener("click", () => {
  hideCurrentSlide('hideRight')
  appearNextSlide()
  miseAJourDot()
});
