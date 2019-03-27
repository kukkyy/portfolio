$(function(){
  $(".animated").waypoint({
    handler: function(direction) {
      if (direction === "down") {
        $(this.element).addClass("fadeInUp");
      }
    },
    offset: "100%"
  });
});