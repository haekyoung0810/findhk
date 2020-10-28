

window.addEventListener('scroll',function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
}); //헤더 스크롤



window.addEventListener('scroll',function(){
    var img=document.querySelector('img');
    img.classList.toggle('imgAny',window.scrollY > 770);
}); //헤더 스크롤






function moveMenu(num){

	var menuT=$('#menu0'+num).offset().top;
	$('html,body').animate({scrollTop:menuT},800);

} //메뉴 앵커기능



$(function(){
	$(".typed").typed({
		strings: ["Hae kyoung KANG.", "a Front End Web Developer.", "a Product manager."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 900,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
}); //프론트 타이핑 효과



$(document).ready(function(){
	$('.popupImgBX').bxSlider();
  }); //포트폴리오 슬라이드







