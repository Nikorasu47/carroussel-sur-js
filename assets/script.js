


/**variable DoM**/
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let slide = document.getElementsByClassName('slide');
let i = 0;



/**slide */
leftArrow.addEventListener('click',()=>{
	let currentSlide = slide[i];
	
	
	if (i<slide.length) {	
		i++;
	}else{
		i=0
	}

	
	if (i!==currentSlide){
		currentSlide.style.transform = 'translateX(100%)';
	}else {
		currentSlide.style.transform = 'translateX(0%)';
	}
	
	
	
	console.log(i)
	console.log (currentSlide)
	

})

rightArrow.addEventListener('click',()=>{
	let currentSlide = slide[i];
	currentSlide.style.transform = 'translateX(0%)';
	
	
	console.log(i)
	console.log (currentSlide)

	if (i>0) {
		i--;
	}else{
		i=3
	}

	if (i!==currentSlide){
		currentSlide.style.transform = 'translateX(-100%)';
	}else {
		currentSlide.style.transform = 'translateX(0%)';
	}
	
})





	
