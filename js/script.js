// Parallax Effect
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    // clouds
    $('.jumbotron img.cloud1').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });

    $('.jumbotron img.cloud2').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    // mountaints
    $('.jumbotron img.mount1').css({
        'transform' : 'translate(0px, '+ wScroll/20 +'%)'
    });

    $('.jumbotron img.mount2').css({
        'transform' : 'translate(0px, '+ wScroll/15 +'%)'
    });

    $('.jumbotron img.mount3').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

    $('.jumbotron .p').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
});