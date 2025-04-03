


/**variable DoM**/
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let slide = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot')
let i = 0;


/**fonction*/
function current (hideId , showId , isIncrement){
	/*création de variable selection*/
	let currentSlide = slide[i]; 
	let currentDot = dots[i];
	/* id initial*/
	currentSlide.id =hideId;
	currentDot.classList.remove('dot_selected')
	/*ajout d'une condition pour incrémenter l'index*/
	if (isIncrement === true) {
		if (i>0) {	
			i--;
		}else{
			i=3
		}
	}else{
		if (i<slide.length-1) {	
			i++;
		}else{
			i=0
		}
	}
	/*mise a jour des variable*/
	currentSlide = slide[i]; 
	currentDot = dots[i];
	/*mise a jour de l'ic*/ 
	currentSlide.id = showId;
	currentDot.classList.add('dot_selected');


}


/**slide */
leftArrow.addEventListener('click',()=>{

	current ('hideLeft','showLeft', true)

})

rightArrow.addEventListener('click',()=>{

	current ('hideRight','showRight', false)
	
})





	
