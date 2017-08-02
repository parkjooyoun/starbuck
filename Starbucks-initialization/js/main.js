(function ($) {
    'use strict';

    var _sb = _sb || {};
    // ||(or 연산자) 겹쳐지는게 있을수도 있느니 넣어둘것.

    // Document Ready
    $(function () {
        _init();
        _initEvent();
    });

    //정의를 내리는 부분
    function _init() {
        _sb.$topCard = $('.top-card');
    }

    //기능을 실행하는 부분
    function _initEvent() {
        toggleTopCard();
        closeTopCard();
    }

    function toggleTopCard() {
        $('.toggle-top-card').on({
            click: function () {
                _sb.$topCard.slideToggle(400);
        },
            mouseenter: function () {
                animateToggleTopCardBtn();
            }
        });
    }

    function animateToggleTopCardBtn() {
        TweenMax.to('.toggle-top-card .cup', 1.5, {
            y: -30,
            reapeat: -1,
            yoyo: true
        });

    }
//TweenMax.to(대상,시간,내용);


}(jQuery));


//(function (root, doc, $ :약자)로도 많이 사용
