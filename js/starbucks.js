$(document).ready(function(){
    $('section.menu ul li').click(function(){
        $('section.menu ul li').removeClass('menuActive');
        $(this).addClass('menuActive');

        $('section.menu ol > li').removeClass('tableActive');
        $('section.menu ol > li').eq($('section.menu ul li').index(this)).addClass('tableActive');
    });

    $('header div.slider').bxSlider({
        randomStart : false,
        auto : true,
        speed : 1000,
        pause: 4500,
        controls: false, // 이전 다음 버튼 노출 여부
        pager : false, //페이지 표시
        adaptiveHeight:true
    });//bx slider
    $('section.menu ol li div.slider').bxSlider({
        randomStart : false,
        auto : true,
        pager : false, //페이지 표시
        maxSlides: 4,
        minSlides: 4,

    });//bx slider
    $('section.reserve div.container div.wrapper div.cover div.front p:nth-of-type(2)').click(function(){
        $('section.reserve div.container div.wrapper div.cover').addClass('leftOpen');
        $('section.reserve div.container div.wrapper div.right').addClass('rightOpen');
        $('section.reserve div.container div.wrapper div div.back').removeClass('backface');
        $('section.reserve div.container button').addClass('btnActive');
    });
    $('section.reserve button.close').click(function(){
        $('section.reserve div.container div.wrapper div.cover').removeClass('leftOpen');
        $('section.reserve div.container div.wrapper div.right').removeClass('rightOpen');
        $('section.reserve div.container div.wrapper div div.back').addClass('backface');
        $('section.reserve div.container button').removeClass('btnActive');
    });

    $('footer div.footer_top ul li i').mouseenter(function(){
        $(this).addClass('green')
    });
    $('footer div.footer_top ul li i').mouseleave(function(){
        $(this).removeClass('green')
    });
    $('body > div').click(function(){
        $('html, body').animate({scrollTop:0}, '500', 'swing');
    });
    $(document).scroll(function(){    
        // if($(document).scrollTop() > $('.foodCategory').offset().top-800){
        //     $('section.foodCategory > ul:first-of-type li').removeClass('positionType');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(1)').addClass('scroll1');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(2)').addClass('scroll2');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(3)').addClass('scroll3');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(4)').addClass('scroll4');
        // }
        // else if($(document).scrollTop() < $('.foodCategory').offset().top-800){
        //     $('section.foodCategory > ul:first-of-type li').addClass('positionType');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(1)').removeClass('scroll1');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(2)').removeClass('scroll2');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(3)').removeClass('scroll3');
        //     $('section.foodCategory > ul:first-of-type li:nth-of-type(4)').removeClass('scroll4');
        // }

        var maxScollValue =$(document).height() - $(window).height();
        var scrollPer = $(document).scrollTop() / maxScollValue;
        $('.progressBar div').css('width', (scrollPer * 100) + '%'); //맨위의 스크롤바
        console.log( $(document).scrollTop());
    })//scroll
});
