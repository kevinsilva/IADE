
  /*------Alerta Responsive------*/

  $(document).ready(function(){
    $(window).resize(function() {
    if ($(window).width() < 960) {
      alert('OOOPS Prof. Ricardo, responsive ainda em construção!');
    }
    else {
      //alert('');
    }
    });
  });

/*------Menu Dropdown------*/

  $(document).ready(function(){
    $("a.projectos").on("click", function(){
      $(".menu_wrapper").toggleClass("open");
    });
  });

  
