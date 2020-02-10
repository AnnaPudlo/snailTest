$(".ba-menu-btn").click(function() {
    $('.ba-nav').toggleClass('hidden-before-lg');
    $(".ba-menu-btn").toggleClass("ba-btn-burger--active");
});

function dropLang() {
    $(".ba-lang").toggleClass('hidden');
    $(".ba-arrow").toggleClass("fa-angle-down fa-angle-up");
}

$(document).on('click', function(e) {
    if ((e.target.closest('.ba-lang-wrap') == null) && (!$('.ba-lang').hasClass('hidden'))) {
        dropLang();
    }
});

$(".ba-btn-lang").click(function() {
    dropLang();
});

$(".ba-lang li a").click(function(e) {
    e.preventDefault();
    $(".ba-lang-chosen").html($(this).html());
    dropLang();
});

$(".ba-menu__link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 2000);
});
    
$(".ba-btn-scroll").click(function () {
    var destination = $('#about').offset().top;
    $('html').animate({ scrollTop: destination }, 2000);
});

jQuery(document).ready(function ($) {

    $('.ba-ontouch-form').submit(function (event) {
        event.preventDefault();
        var formData = $(this).serialize();
        var form = this;
        // console.log(formData);
        $.ajax({
            type: 'POST',
            url: '../mail.php',
            data: formData,
            success: function(data){
                // console.log(data);
                // successSend(form, '#contactAlert');
            },
        })
    });
  });

function successSend(form, alertId){
    $(alertId).addClass("show");
  
    setTimeout(function(){
      $(alertId).removeClass("show");
    }, 4000);
  
    $(form).find('.ba-inp').val('');
};