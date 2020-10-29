$(document).ready(function () {
    $('#button-demo').hover(function () {
        $( "#img-main" ).css('opacity','1');
        }, function () {
        // $( "#img-main" ).css('opacity','0.5');
        }
    );
    $('.img-div').hover(function () {
        $( "#img-main" ).css('opacity','1');
        }, function () {
        $( "#img-main" ).css('opacity','0.5');
        }
    );

});