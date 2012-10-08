(function(){

  var stickyNav = function(){
    if ($(window).scrollTop() >= 196){
      $("#nav-wrap").addClass("sticky");
    } else {
      $("#nav-wrap").removeClass("sticky");
    }
  }

  $(function(){
    /* Sticky Nav */
    stickyNav();

    /* toggle nav */
    $("#menu-icon").on("click", function(){
      $("#nav").slideToggle();
      $(this).toggleClass("active");
    });
  });

  $(document).scroll(stickyNav);

}());
