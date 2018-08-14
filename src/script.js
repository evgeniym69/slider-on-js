let slideIndex = 1,
		slides = document.getElementsByClassName("wrappper__slider-item"),
		prev = document.querySelector(".navigation__prev"),
		next = document.querySelector(".navigation__next"),
		dotsWrap = document.querySelector('.slider-dots');
		//dots = document.getElementsByClassName("dot");

prepareSlides();
showSlides(slideIndex);

function prepareSlides(){
	for(let i = 0; i < slides.length; i++){
		let liElement =  document.createElement('li');
		dotsWrap.appendChild(liElement);
}

	let dots = dotsWrap.childNodes;

	dotsWrap.addEventListener('click', function(event){
		for (let i = 0; i < dots.length + 1; i++){
			if(event.target == dots[i-1]){
					currentSlide(i);
			}
		}
	});

}

function showSlides(n){

	let dots = dotsWrap.childNodes;

	if(n > slides.length){
		slideIndex = 1;
	}

	if(n < 1){
		slideIndex = slides.length;
	}

	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(let i = 0; i < dots.length; i++){
		dots[i].classList.remove("active");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");

}

function changeSlide(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

prev.addEventListener('click', function(){
		changeSlide(-1);
});

next.addEventListener('click', function(){
		changeSlide(1);
});
