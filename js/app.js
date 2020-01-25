$(".ba-menu-btn").click(function() {
    $('.ba-nav').toggleClass('hidden-before-lg');
    $(".ba-menu-btn").toggleClass("ba-btn-burger--active");
})

$(".ba-btn-lang").click(function() {
    $(".ba-lang").toggleClass('hidden');
    $(".ba-arrow").toggleClass("fa-angle-down fa-angle-up");
});

$(".ba-lang li a").click(function(e) {
    e.preventDefault();
    $(".ba-lang-chosen").html($(this).html());
    $(".ba-lang").toggleClass('hidden');
    $(".ba-arrow").toggleClass("fa-angle-down fa-angle-up");
});

$('.ba-btn-consult, .ba-menu-btn').hover(
    function () {
        $(this).addClass('animated rubberBand');
    },
    function () {
        $(this).removeClass('animated rubberBand');
    });