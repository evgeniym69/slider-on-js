"use strict";

var slideIndex = 1,
    slides = document.getElementsByClassName("wrappper__slider-item"),
    prev = document.querySelector(".navigation__prev"),
    next = document.querySelector(".navigation__next"),
    dotsWrap = document.querySelector('.slider-dots');
//dots = document.getElementsByClassName("dot");

prepareSlides();
showSlides(slideIndex);

function prepareSlides() {
	for (var i = 0; i < slides.length; i++) {
		var liElement = document.createElement('li');
		dotsWrap.appendChild(liElement);
	}

	var dots = dotsWrap.childNodes;

	dotsWrap.addEventListener('click', function (event) {
		for (var _i = 0; _i < dots.length + 1; _i++) {
			if (event.target == dots[_i - 1]) {
				currentSlide(_i);
			}
		}
	});
}

function showSlides(n) {

	var dots = dotsWrap.childNodes;

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (var _i2 = 0; _i2 < dots.length; _i2++) {
		dots[_i2].classList.remove("active");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
}

function changeSlide(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

prev.addEventListener('click', function () {
	changeSlide(-1);
});

next.addEventListener('click', function () {
	changeSlide(1);
});