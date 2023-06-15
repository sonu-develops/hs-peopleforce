$('#test-slider').owlCarousel({
   loop:true,
   margin:20,
   nav: true,
   center: true,
   stagePadding: 100,
   autoplay:true,
   autoplayTimeout:2000,
   autoplayHoverPause:true,
   dots: true,
    responsive:{
        0:{
            items:1,
           stagePadding:10
        },
        600:{
            items:3,
          stagePadding:10
        },
        1000:{
            items:4
        }
    }
})