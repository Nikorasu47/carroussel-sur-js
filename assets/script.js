


/**variable DoM**/
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let slide = document.getElementsByClassName('slide');
let i = 0;



/**slide */
leftArrow.addEventListener('click',()=>{
	let currentSlide = slide[i];
	currentSlide.style.transform = 'translateX(0%)';
	i++;
	
	console.log(i)
	console.log (currentSlide)

	i= i%slide.length
})

rightArrow.addEventListener('click',()=>{
	let currentSlide = slide[i];
	currentSlide.style.transform = 'translateX(0%)';
	i--;
	
	console.log(i)
	console.log (currentSlide)

	
})









	
