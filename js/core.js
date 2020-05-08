
function toggle_back_to_top(y_offset) {
  if (y_offset > 50) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
}

// scroll body to 0px on click
document.getElementById("back-to-top").onclick =
  function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
};
