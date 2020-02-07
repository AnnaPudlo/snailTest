$(".ba-menu-btn").click(function() {
    $('.ba-nav').toggleClass('hidden-before-lg');
    $(".ba-menu-btn").toggleClass("ba-btn-burger--active");
})

$(".ba-btn-lang").click(function(e) {
    $(".ba-lang").toggleClass('hidden');
    $(".ba-arrow").toggleClass("fa-angle-down fa-angle-up");

});

$(".ba-lang li a").click(function(e) {
    e.preventDefault();
    $(".ba-lang-chosen").html($(this).html());
    $(".ba-lang").toggleClass('hidden');
    $(".ba-arrow").toggleClass("fa-angle-down fa-angle-up");
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