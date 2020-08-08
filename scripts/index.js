$(document).ready(() => {
  $(".hidden-info").hide(0);

  $(".show-info-button").click(() => {
    $(".hidden-info").toggle(1000);
  });
});
