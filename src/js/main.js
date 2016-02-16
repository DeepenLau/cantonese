var $bodyBgWrap = $('#body-bg-wrap');

$bodyBgWrap.parallax({
    calibrateX: false,
    calibrateY: false,
    invertX: false,
    invertY: false,
    limitX: false,
    limitY: false,
    scalarX: 5,
    scalarY: 5
});

//首页
if ($('#index').length) {
    $('.nav li').parallax({
        scalarX: 10,
        scalarY: 10
    });
    indexResize();
    function indexResize() {
        $('.hover-text').css('left', '54px');
        $bodyBgWrap.find('.bamboo-1').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bodyBgWrap.find('.bamboo-2').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bodyBgWrap.find('.dragon').css({
            'top': 'auto',
            'bottom': '-20%',
            'left': '-8%'
        });
        $bodyBgWrap.find('.title').css({
            'top': '20%',
            'left': '50%',
            'marginLeft': '-93px'
        });
        $bodyBgWrap.find('.cloud-1').css({
            'top': '50%',
            'left': '50%',
            'marginLeft': '-120px',
            'marginTop': '80px'
        });
        $bodyBgWrap.find('.cloud-2').css({
            'top': '50%',
            'left': '50%',
            'marginTop': '120px'
        });
        $bodyBgWrap.find('.bird').css({
            'top': '18%',
            'left': '30%'
        })
    };
}

//除首页外调整背景位置
if (!$('#index').length) {
    res();
    function res() {
        $bodyBgWrap.find('.bamboo-1').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bodyBgWrap.find('.bamboo-2').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bodyBgWrap.find('.dragon').css({
            'left': '-250px',
            'top': '50px'
        });
        $bodyBgWrap.find('.bird').css({
            'top': '18%',
            'left': '30%'
        });
        $bodyBgWrap.css({
            'position': 'fixed',
            'top': '0',
            'zIndex': '-1'
        })
    };
}


//南国红豆两个子页面
if ($('.opera-common').length) {
    $('.opera-common').find('.list li').click(function(){
        $('.opera-common').find('.list li').removeClass('active');
        $(this).addClass('active');
        $('.opera-common').find('.content').stop().slideUp();
        $('.opera-common').find('.content').eq($(this).index()).stop().slideDown();
    })
}



