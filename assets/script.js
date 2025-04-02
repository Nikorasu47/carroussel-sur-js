


/**variable DoM**/
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let slide = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot')
let i = 0;


/**fonction*/



/**slide */
leftArrow.addEventListener('click',()=>{
	let currentSlide = slide[i];
	currentSlide.id ='hideLeft';
	
	let currentDot = dots[i];
	currentDot.classList.remove('dot_selected')

	
	if (i>0) {	
		i--;
	}else{
		i=3
	}

	currentSlide=slide[i]
	currentSlide.id = 'showLeft'
	
	currentDot = dots[i]
	currentDot.classList.add('dot_selected')
	
	console.log(i)
	console.log (currentSlide)
	

})

rightArrow.addEventListener('click',()=>{

	let currentSlide = slide[i];
	currentSlide.id ='hideRight'
	
	let currentDot = dots[i];
	currentDot.classList.remove('dot_selected')

	if (i<slide.length-1) {	
		i++;
	}else{
		i=0
	}

	currentSlide=slide[i]
	currentSlide.id = 'showRight'
	
	currentDot = dots[i]
	currentDot.classList.add('dot_selected')
	
	console.log(i)
	console.log (currentSlide)
	
	
})





	
