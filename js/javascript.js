

$(document).ready(function() {

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

  if (w > 700) {

      $('.carousel').each(function(){
    $(this).carousel({
        pause: 'hover',
            interval: 2500
        });
     });

  } else{

    $('.carousel').each(function(){
    $(this).carousel("pause");
     });
  };
    

});


 $("#penCarousel").hover(
    function(){
        $("#penCarousel").carousel('pause');
     },
    function() {
      $("#penCarousel").carousel('cycle');
    }
  );


