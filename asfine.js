var btn = $(".asfine");
$(window).scroll(function () {
 $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show")
}), btn.on("click", function (o) {
 o.preventDefault(), $("html, body").animate({
  scrollTop: 0
 }, "300")
});