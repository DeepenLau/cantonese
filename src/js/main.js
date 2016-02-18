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
    $('.opera-common').find('.list li').click(function () {
        $('.opera-common').find('.list li').removeClass('active');
        $(this).addClass('active');
        $('.opera-common').find('.content').stop().slideUp();
        $('.opera-common').find('.content').eq($(this).index()).stop().slideDown();
    })
}

//细语倾诉
if ($('#history').length) {
    var $book = $('#book')
    var $bookMarkList = $book.find('.bookmark');
    var $bookLi = $book.find('li');

    $bookLi.eq(0).attr('onOff', false);
    for (var i = 1; i < $bookLi.length; i++) {
        $bookLi.eq(i).attr('onOff', true);
    }

    setZIndex();

    $bookMarkList.click(function () {
        if ($(this).parent().attr('onOff') === 'true') {
            goLeftPage($(this).parent());
            setZIndex();
        } else {
            goRightPage($(this).parent());
            setZIndex();
        }
    });

    //向左翻页
    function goLeftPage(obj) {
        obj.attr('onOff', false);
        obj.prevAll().attr('onOff', false);
        obj.css('transform', 'rotateY(-180deg)');
        obj.prevAll().css('transform', 'rotateY(-180deg)');

    }

    //向右翻页
    function goRightPage(obj) {
        obj.attr('onOff', true);
        obj.nextAll().attr('onOff', true);
        obj.css('transform', 'rotateY(0deg)');
        obj.nextAll().css('transform', 'rotateY(0deg)');
    }

    //动态设置z-index
    function setZIndex() {
        var bool = true;
        var n = 0;
        var len = 0;
        for (var i = 0; i < $bookLi.length; i++) {
            if ($bookLi.eq(i).attr('onOff') == 'false') {
                $bookLi.eq(i).css('zIndex', $bookLi.eq(i).index() + 1);
            } else {
                if (bool) {
                    bool = false;
                    n = $bookLi.eq(i).index();
                    len = $bookLi.length;
                }
                len--;
                $bookLi.eq(i).css('zIndex', len + 1);
            }
        }
    }
}

//劲歌金曲
if($('#music').length){
    var $list = $('#list');
    var $listLi = $list.children('li');
    var $iZ = $(window).width()/2;
    var iNow = 0;
    var $btns = $('#btns').find('li');
    $list.css('WebkitTransformOrigin', 'center center ' + $iZ + 'px')
    $(window).resize(function(){
        $iZ = $(window).width()/2;
        $list.css('WebkitTransformOrigin', 'center center ' + $iZ + 'px')
    });

    $btns.click(function(){
        if(iNow == $(this).index()){
            return;
        }
        $btns.eq(iNow).removeClass();
        tab(iNow, $(this).index());
        iNow = $(this).index();
        $btns.eq(iNow).addClass('active');
    });

    function tab(iOld, iNow){
        $list.css('transition', '.5s');
        $list.on('webkitTransitionEnd', end);
        if(iOld > iNow){
            $listLi.eq(iNow).addClass('prev');
            $list.css('transform', 'rotateY(-90deg)');
        }else{
            $listLi.eq(iNow).addClass('next');
            $list.css('transform', 'rotateY(90deg)');
        }

        function end(){
            $listLi.eq(iOld).removeClass('prev next active');
            $list.css('transition', 'none');
            $listLi.eq(iNow).addClass('active');
            $list.css('WebkitTransform', 'rotateY(0deg)');
        }
    }




}



