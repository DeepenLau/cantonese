var $bgWrap = $('#bg-wrap');


//首页
if ($('#index').length) {
    $('.nav li').parallax({
        scalarX: 10,
        scalarY: 10
    });
    $('#bg-wrap').parallax({
        calibrateX: false,
        calibrateY: false,
        invertX: false,
        invertY: false,
        limitX: false,
        limitY: false,
        scalarX: 5,
        scalarY: 5
    });
    res();
    function res() {
        $('.hover-text').css('left', '54px');
        $bgWrap.find('.bamboo-1').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bgWrap.find('.bamboo-2').css({
            'right': '-50px',
            'top': '-25px',
            'left': 'auto'
        });
        $bgWrap.find('.dragon').css({
            'top': 'auto',
            'bottom': '-20%',
            'left': '-8%'
        })
        $bgWrap.find('.title').css({
            'top': '20%',
            'left': '50%',
            'marginLeft': '-93px'
        })
        $bgWrap.find('.cloud-1').css({
            'top': '50%',
            'left': '50%',
            'marginLeft': '-120px',
            'marginTop': '80px'
        })
        $bgWrap.find('.cloud-2').css({
            'top': '50%',
            'left': '50%',
            'marginTop': '120px'
        })
        $bgWrap.find('.bird').css({
            'top': '18%',
            'left': '30%'
        })
    };
}



