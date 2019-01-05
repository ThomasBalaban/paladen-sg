$(document).ready(function(){

    function resize() {
        $.each( $('.info'), function(){
            $(this).find($('.image')).css('left', function(){
                return $(this).parent().find('p').width() + 40;
            });
        });
    }

    resize();

    $(window).resize( function(){
        resize() 
    });

});
