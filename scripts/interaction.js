var _this = this;
var button_projects = document.querySelector('#btn_projects');
var button_education = document.querySelector('#btn_education');
var container_education = document.querySelector('#education');
var container_projects = document.querySelector('#projects');
var scroll_button = document.querySelector('.scroll');
button_projects.addEventListener('click', function () {
    container_projects.style.display = 'inline';
    container_education.style.display = 'none';
});
button_education.addEventListener('click', function () {
    container_projects.style.display = 'none';
    container_education.style.display = 'inline';
});
scroll_button.addEventListener('click', function (event) {
    var btn = _this;
    event.preventDefault();
    var link = btn.attr("href");
    document.querySelector("html").animate({ scrollTop: btn.offset().top }, 2);
});



/* $(document).ready(function () {
  //$(".alert").alert();
  //setTimeout(function () {
  //  $(".alert").hide();
  //}, 2000);



  //Make project-Radio-Button clickable
  //ToDo: Use toggle-function
  $("#btn_projects").click(function () {
    $("#education").css('display', 'none');
    $("#projects").css('display', 'inline');
  })
  $("#btn_education").click(function () {
    $("#education").css('display', 'inline');
    $("#projects").css('display', 'none');
  })

  $('.nav_item').on('click', function () {
    $('.collapse').collapse('hide');
  });


  //Create Scroll-Aninamtion
  $(".scroll").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
  });
}); */
