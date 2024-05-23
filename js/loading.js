$(document).ready(function () {
    $('body').css('overflow', 'hidden');

    setTimeout(function () {
        $('#loading-screen1').hide();
        $('#content1').show();

        $('body').css('overflow', '');
    }, 1000);
});


