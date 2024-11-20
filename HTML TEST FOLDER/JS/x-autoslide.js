$(window).on('load', function(){
  $('.responsive').slick({
    dots: true,
    infinite: true,  
    speed: 300,
    slidesToShow: 1,  
    slidesToScroll: 1,  
    responsive: [
      {
        breakpoint: 991,  
        settings: {
          slidesToShow: 3,  
          slidesToScroll: 1,  
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 452,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1  
        }
      }
    ]
  });
});
