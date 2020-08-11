$(document).ready(() => {
  $(window).on("load", () => {
    $(".title").animate(
      {
        opacity: 1
      },
      2000
    );
  });

  $(".hidden-info").hide(0);

  $(".show-info-button").click(() => {
    $(".show-info-button").fadeOut(1000);
    $(".hidden-info").show(1000);
    $(".hidden-info").animate(
      {
        opacity: 1
      },
      1000
    );
  });
});
