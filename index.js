$(document).ready(function() {

    var $gugelmap = $('#map');

    var $mapa = $('.mapa');

    $mapa.click(function(){

        $gugelmap.css('pointer-events', 'auto');

        $gugelmap.mouseleave(function() {

            $gugelmap.css('pointer-events','none');
        });


    });

    var $wantShoes = $('.wantShoes');
        $wantShoes.click(function(){
          $('.talktous').css('display', 'block');
          $(document).keydown(function(event){
            if(event.which==27) {
              $('.talktous').css('display', 'none');
            }});
          $('#close').click(function(){
            $('.talktous').css('display', 'none');
          })
        })



    $('.bxslider').bxSlider({
       mode: 'horizontal',
       auto: true,
       controls: false,
       speed: 1770
    });

    function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

    $(window).scroll(function(event) {


  $(".module").each(function(i, el) {
    var el = $(el);
    if (isScrolledIntoView(el)) {
      el.addClass("come-in");
    }
  });

});

/*window.sr = ScrollReveal({viewOffset: { top: 82, right: 0, bottom: 0, left: 0 }, viewFactor: 0.45});
sr.reveal('.pain');
sr.reveal('.hand', {viewFactor: 0.5, delay: 300})
sr.reveal(document.getElementById('fabrica'), { delay: 700});
sr.reveal(document.getElementById('paravos'), { delay: 1000});*/

    $(window).scroll(function() {

      var posbtn = $(".portada-btn").offset().top -15;
      var poslogo = $(".navbar-logo").offset().top;
      var altlogo = $(".navbar-logo").height() + poslogo;
      var problemPos = $(".problem-sol").offset().top;

      var altsol2 = $(".sol2").offset().top - 82;

      var scroll = $(window).scrollTop();



      if (scroll >= (altlogo) ) {
          //console.log('a');
          $(".navbarTwo").slideDown( "fast");
      }
      else {
          //console.log('a');
          $(".navbarTwo").slideUp();
      }

      if (scroll >= posbtn) {
        $(".navbar-btn").css('display', 'block');
      }
      else {
        $(".navbar-btn").css('display', 'none');
      }

      var altura = $(".problem").height();

      if ((scroll >= problemPos - 82)&&(scroll < altsol2))  {
        $(".problem").removeClass("bottompos toppos");

        $(".problem").addClass("pausa");

      }

      else if (scroll >= altsol2) {
        $(".problem").removeClass("pausa");
        $(".problem").addClass("bottompos");
      }

      else if (scroll < problemPos - 82)
      {
            $(".problem").removeClass("bottompos");
            $(".problem").removeClass("pausa");
            $(".problem").addClass("toppos")

      }


  });



});
