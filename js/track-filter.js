(function ($) {
  $("#filterList .c-filters__item").on("click", function () {
    if ($(this).hasClass("c-filters__item--active")) {
      $(this).removeClass("c-filters__item--active")
      $("#filterList button").removeClass("c-filters__item--deactive")
      $("#routeList a").show();
    } else {
      $("#filterList button").removeClass("c-filters__item--active").addClass("c-filters__item--deactive");
      $(this).addClass("c-filters__item--active").removeClass("c-filters__item--deactive");

      var selectedTrack = $(this).data("route-class");
      var showTrack = "." + selectedTrack;
      var hideTrack = ":not('." + selectedTrack + "')";

      $("#routeList a").filter(showTrack).show();
      $("#routeList a").filter(hideTrack).hide();
    }
  });
})(jQuery);