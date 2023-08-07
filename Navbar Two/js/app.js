$(document).ready(function(){
	
	$('#portfoloio-slider').owlCarousel({
    loop:true,
    margin:20,
	nav:false,
	dots:true,
    responsive:{
        0:{
           
			items:1,
			margin:0,
        },
        600:{
           
			items:2,
        },
        1000:{
            items:2,
			center:true,
			
        }
    }
})

$('#review-slider').owlCarousel({
    loop:true,
    margin:90,
    nav:false,
	dots:true,
	items:1,
	color:"#ff6f00",

})


})