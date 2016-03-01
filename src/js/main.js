var cantonese = {
    initNavFocus: function (nav) {
        if ($.isArray(nav)) {
            $.each(nav, function (i, n) {
                if (~window.location.href.indexOf(n)) {
                    $('#nav-' + n).addClass('active');
                }
            })
        }
    }
};

var arr_nav = ['history', 'opera', 'music', 'video'];
cantonese.initNavFocus(arr_nav);

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
var $index = $('#index');
if ($index.length) {
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
if (!$index.length) {
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
var $operaCommon = $('.opera-common');
if ($operaCommon.length) {
    $operaCommon.find('.list li').click(function () {
        $operaCommon.find('.list li').removeClass('active');
        $(this).addClass('active');
        $operaCommon.find('.content').stop().slideUp();
        $operaCommon.find('.content').eq($(this).index()).stop().slideDown();
    });
    $('.content .text').slimscroll({
        width: '360px',
        height: '255px',
        color: '#fff'
    });
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

    $('.page').slimScroll({
        width: 'auto', //可滚动区域宽度
        height: '100%' //可滚动区域高度
    })
}

//劲歌金曲
if ($('#music').length) {
    //3D盒子
    var $list = $('#list');
    var $listLi = $list.children('li');
    var $iZ = $(window).width() / 2;
    var iNow = 0;
    var $btns = $('#btns').find('li');
    $list.css('WebkitTransformOrigin', 'center center ' + $iZ + 'px');
    $(window).resize(function () {
        $iZ = $(window).width() / 2;
        $list.css('WebkitTransformOrigin', 'center center ' + $iZ + 'px')
    });

    $btns.click(function () {
        if (iNow == $(this).index()) {
            return;
        }
        $btns.eq(iNow).removeClass();
        tab(iNow, $(this).index());
        iNow = $(this).index();
        $btns.eq(iNow).addClass('active');
    });

    function tab(iOld, iNow) {
        $list.css('transition', '.5s');
        $list.on('webkitTransitionEnd', end);
        if (iOld > iNow) {
            $listLi.eq(iNow).addClass('prev');
            $list.css('transform', 'rotateY(-90deg)');
        } else {
            $listLi.eq(iNow).addClass('next');
            $list.css('transform', 'rotateY(90deg)');
        }

        function end() {
            $listLi.eq(iOld).removeClass('prev next active');
            $list.css('transition', 'none');
            $listLi.eq(iNow).addClass('active');
            $list.css('WebkitTransform', 'rotateY(0deg)');
        }
    }

    //寻根问底
    $subList1 = $('.sub-list-1');
    $subList1.find('.text').click(function(){
       $(this).css({
           'zIndex': '10',
           'width': '400px',
           'left': '0'
       });
    });
    $subList1.find('.text').mouseleave(function(){
        $(this).css({
            'zIndex': '1',
            'width': '190px',
            'left': '100px'
        });
    });
    $subList1.find('.text div').slimScroll({
        width: 'auto',
        height: '475px'
    });

    //天王天后切换
    $peopleLi = $('#people-detail').find('li');
    $peopleListLi = $('#people-list').find('li');

    $peopleListLi.click(function () {
        var _this = $(this);
        $peopleListLi.removeClass('active');
        _this.addClass('active');

        $peopleLi.stop().animate({'opacity': '0'}, 400, function () {
            $peopleLi.removeClass('active');
            $peopleLi.eq(_this.index()).stop().animate({'opacity': '1'}, 800).addClass('active')
        });
    });

    $('#people-detail').find('.text p').slimScroll({
        height: '370px'
    });

    //经典名曲列表
    var ap1 = new APlayer({
        element: document.getElementById('music-player1'),
        narrow: false,
        autoplay: false,
        showlrc: false,
        theme: '#93312c',
        music: [
            {
                title: '千千阙歌',
                author: '陈慧娴',
                url: '/media/music/陈慧娴 - 千千阙歌.mp3',
                pic: '../images/music-qianqianquege.jpg'
            },
            {
                title: '一生所爱',
                author: '卢冠廷',
                url: '../media/music/卢冠廷 - 一生所爱.mp3',
                pic: '../images/music-yishengsuoai.jpg'
            },
            {
                title: '一生何求',
                author: '陈百强',
                url: '../media/music/陈百强 - 一生何求.mp3',
                pic: '../images/music-yishengheqiu.jpg'
            },
            {
                title: '容易受伤的女人',
                author: '王菲',
                url: '../media/music/王菲 - 容易受伤的女人.mp3',
                pic: '../images/music-rongyishoushangdenvren.jpg'
            },
            {
                title: '一起走过的日子',
                author: '刘德华',
                url: '../media/music/刘德华 - 一起走过的日子.mp3',
                pic: '../images/music-yiqizouguoderizi.jpg'
            },
            {
                title: '今夜你会不会来',
                author: '黎明',
                url: '../media/music/黎明 - 今夜你会不会来.mp3',
                pic: '../images/music-jinyenihuibuhuilai.jpg'
            },
            {
                title: '晚秋',
                author: '黄凯芹',
                url: '../media/music/黄凯芹 - 晚秋.mp3',
                pic: '../images/music-wanqiu.jpg'
            },
            {
                title: '几分伤心几分痴',
                author: '王杰',
                url: '../../media/music/王杰 - 几分伤心几分痴.mp3',
                pic: '../images/music-jifenshangxinjifenchi.jpg'
            },
            {
                title: '笑看风云',
                author: '郑少秋',
                url: '../media/music/郑少秋 - 笑看风云.mp3',
                pic: '../images/music-xiaokanfengyun.jpg'
            },
            {
                title: '人生何处不相逢',
                author: '陈慧娴',
                url: '../media/music/陈慧娴 - 人生何处不相逢.mp3',
                pic: '../images/music-renshenghechubuxiangfeng.jpg'
            }
        ]
    });
    ap1.init();

    var $aplayerList = $('.aplayer-list');
    $aplayerList.slimScroll({
        width: '210px',
        height: '467px'
    });

    $aplayerList.parent().css({
        'position': 'absolute',
        'top': '-396px',
        'right': '-220px'
    })
}

//谈笑风生
var $videoWrap = $('.video-wrap');

if ($videoWrap.length) {
    var $videoList = $('.video-list');
    var $videoJs = $('#video-js');

    $videoList.slimScroll({
        width: '210px',
        height: '438px'
    });
    if ($('#video-2').length) {
        require('./tagsCloud.js');
    }

    //盏鬼广州话视频地址
    var urlList1 = [
        '../../media/video/01.mp4',
        '../../media/video/02.mp4',
        '../../media/video/03.mp4',
        '../../media/video/04.mp4',
        '../../media/video/05.mp4',
        '../../media/video/06.mp4',
        '../../media/video/07.mp4',
        '../../media/video/08.mp4'
    ];

    //盏鬼广州话,栋笃笑视频播放列表
    if($('#video-1').length || $('#video-3').length){
        $videoList.find('li').click(function(){
            $videoList.find('li').removeClass('active');
            $(this).addClass('active');
            $videoJs.find('source').eq(0).attr('src', urlList1[$(this).index()]);
            $videoJs.find('source').eq(0).parent().attr('src', urlList1[$(this).index()]);
            var myPlayer = videojs('video-js');
            videojs("video-js").ready(function(){
                var myPlayer = this;
                myPlayer.play();
            });
        })
    }
}



