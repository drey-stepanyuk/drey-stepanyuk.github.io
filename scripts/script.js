$(document).ready(function () {

    $('#business-cards').click(function () {
        $('#bc-modal').modal('show')
    });

});

$('a[href^="#"]').not('a[href="#"]').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 500);
});
