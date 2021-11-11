var k2Func = (function () {
    //Private

    /* ==========================================================================
        Common - Remove Trash CSS
        ========================================================================== */
    var removeCss = function () {
        $("link[rel=stylesheet][href*='/Web-home/content/skin/skin0/style.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_SITES/css/common/common.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_UI/css/lang/common_ko.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_UI/css/common/normalize.css']").remove();
    }

    /* ==========================================================================
       Common - GNB
       ========================================================================== */

    // GNB init
    var $gnb = $('#gnb .ul_1');
    var $gnbAnchor = $('#gnb .a_1');
    var $gnbDepth2Anchor = $('#gnb .a_2');
    var $gnbDepth2 = $('#gnb .div_2');
    var $gnbDepth3 = $('#gnb .div_3');
    var $gnbBtnOpen = $('#mMenuOpen');
    var $gnbBtnClose = $('#mMenuClose');
    var $gnbBox = $('#gnb');
    var $blackBg = $('#black-bg');
    var $gnbBg = $('.bg-gnb');
    var $gnbBgText = $('.bg-gnb strong p');
    var $gnbUl2 = $('#gnb .ul_2');

    $gnbAnchor.wrapInner('<span></span>');
    $gnbDepth2Anchor.wrapInner('<span></span>');

    // GNB PC
    var gnbPc = function () {
        $gnbAnchor.off('click');
        $gnbAnchor.on('mouseenter focusin', function () {
            gnbRemoveClass1();
            $(this).addClass('on');
            $gnbDepth2.addClass('on');
            $gnbBg.addClass('on');
            //Gnb text Change
            var oneMenu = $(this).text();
            $gnbBgText.text(oneMenu);
            //Gnb Height Change
            var gnbHeightArr = [];
            $gnbUl2.each(function () {
                gnbHeightArr.push($(this).outerHeight());
            });
            // console.log(gnbHeightArr);
            var gnbHeightMax = Math.max.apply(null, gnbHeightArr);
            // console.log(gnbHeightMax);
            $gnbUl2.css('height', gnbHeightMax);
            $gnbBg.css('height', gnbHeightMax);
        });
        $gnb.on('mouseleave', function () {
            gnbRemoveClass1();
            $gnbBg.removeClass('on');
        });
        $gnbDepth2Anchor.off('click');
        $gnbDepth2Anchor.removeClass('plus');
        $gnbDepth2Anchor.siblings('div').siblings('a').addClass('plus');
    };

    // GNB Mobile
    var gnbMobile = function () {
        //1Dep
        $gnbAnchor.off('mouseenter focusin');
        $gnb.off('mouseleave');
        $gnbAnchor.off('click');
        $gnbAnchor.on('click', function (e) {
            e.preventDefault();
            gnbRemoveClass1();
            $gnbDepth2.removeClass('on');
            $(this).addClass('on');
            $(this).siblings('div').addClass('on');
        });

        //2Dep
        $gnbDepth2Anchor.off('click');
        $gnbDepth2Anchor.on('click', function () {
            if ($(this).siblings('div').hasClass('on')) {
                gnbRemoveClass2();
            } else {
                gnbRemoveClass2();
                $(this).addClass('on');
                $(this).siblings('div').addClass('on');
            }

        });

        //3Dep 있는 2Dep
        $gnbDepth2Anchor.siblings('div').siblings('a').addClass('plus');
        $gnbDepth2Anchor.siblings('div').siblings('a').on('click', function (e) {
            e.preventDefault();
        })

        //Menu Open
        $gnbBtnOpen.on('click', function () {
            if ($("body").hasClass('main')) {
                var $gnbFirst = $('#gnb .li_1._1st .a_1');
            } else {
                var $gnbFirst = $('#gnb .li_1._active .a_1');
            };

            $(this).removeClass('on');
            $gnbBtnClose.addClass('on');
            $gnbBox.addClass('on');
            $blackBg.addClass('on');
            $gnbFirst.trigger('click');
        });

        //Menu Close
        $gnbBtnClose.on('click', function () {
            $(this).removeClass('on');
            $gnbBtnOpen.addClass('on');
            $gnbBox.removeClass('on');
            $blackBg.removeClass('on');
        });
    }

    //GNB RemoveClass1
    var gnbRemoveClass1 = function () {
        $gnbAnchor.removeClass('on');
        $gnbDepth2.removeClass('on');
    };

    //GNB RemoveClass2
    var gnbRemoveClass2 = function () {
        $gnbDepth2Anchor.removeClass('on');
        $gnbDepth3.removeClass('on');
    };

    /* ==========================================================================
        Common - Sub Menu Nav
        ========================================================================== */

    var getMenuText = function () {
        setTimeout(function () {
            var $getText1 = $('#gnb .a_1._active').html();
            var $getText2 = $('#gnb .a_2._active').html();
            var $getText3 = $('#gnb .a_3._active').html();
            var $pageTitle1 = $('#pagetitle1');
            var $pageTitle2 = $('#pagetitle2');
            var $pageTitle3 = $('#pagetitle3');

            if (jQuery.type($getText1) === 'undefined') {
            } else {
                $pageTitle1.html('<button type=\'button\' class=\'navMenu\'>' + $getText1 + '</button>');
            }

            if (jQuery.type($getText2) === 'undefined') {
            } else {
                $pageTitle2.html('<button type=\'button\' class=\'navMenu\'>' + $getText2 + '</button>');
            }

            if (jQuery.type($getText3) === 'undefined') {
            } else {
                $pageTitle3.html('<button type=\'button\' class=\'navMenu\'>' + $getText3 + '</button>');
            }
        }, 150);
    };

    var getMenuList = function () {
        setTimeout(function () {
            var getMenuList1 = function () {
                var $navUldep01 = $('#navUldep01');
                var $getMenuResult1 = $('#gnb .a_1').each(function () {
                    $(this).html();
                });
                $navUldep01.append($getMenuResult1.clone());
            }

            var getMenuList2 = function () {
                var $navUldep02 = $('#navUldep02');
                var $getMenuResult2 = $('#gnb .li_1._active .a_2').each(function () {
                    $(this).html();
                });
                $navUldep02.append($getMenuResult2.clone());
            }

            var getMenuList3 = function () {
                var $navUldep03 = $('#navUldep03');
                var $getMenuResult3 = $('#gnb .li_1._active .a_2._active').siblings('div').find('.a_3').each(function () {
                    $(this).html();
                });
                $navUldep03.append($getMenuResult3.clone());
            }

            getMenuList1();
            getMenuList2();
            getMenuList3();

        }, 50);
    };

    var setMenuList = function () {
        var $subNavTitle = $('#submenuNavigation ul li div.navTitle');
        var $subNavDiv = $('.navDiv');
        $subNavTitle.click(function () {
            $subNavDiv.removeClass('on');
            $(this).next('.navDiv').addClass('on');
        });
        $subNavDiv.mouseleave(function () {
            $subNavDiv.removeClass('on');
        });
    };

    /* ==========================================================================
        Common - SNS
        ========================================================================== */
    var snsToggle = function () {
        var $snsBtn = $("#aside .sns_list button.open")
        $snsBtn.on('click', function () {
            $(this).toggleClass("close");
            $(this).parent().find("ul").slideToggle("fast");
            return false;
        });
    }

    var snsShare = function () {
        var $snsFaceBook = $("#aside .sns_list .facebook");
        var $snsTwitter = $("#aside .sns_list .twit");
        var $snsBlog = $("#aside .sns_list .bG");

        if ($snsFaceBook.length > 0) {
            $snsFaceBook.on('click', function () {
                var thisTitle = $("title").html();
                popUrl = "http://www.facebook.com/sharer.php?t=" + thisTitle + "&u=" + encodeURIComponent(document.location.href);
                window.open(popUrl, "FACEBOOK");
            });
        }

        if ($snsTwitter.length > 0) {
            $snsTwitter.on('click', function () {
                var thisTitle = $("title").html();
                popUrl = "http://twitter.com/share?text=" + encodeURIComponent(thisTitle) + "&url=" + encodeURIComponent(document.location.href);
                window.open(popUrl, "TWITTER");
            });
        }

        if ($snsBlog.length > 0) {
            $snsBlog.on('click', function () {
                var url = encodeURI(encodeURIComponent(document.location.href));
                var title = encodeURI($("title").html());
                popUrl = "http://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
                window.open(popUrl, "BLOG");
            });
        }

        /*
        $(".option-list .favorite-btn").click(function () {
            $(".favorite-list").addClass("active");
        });

        $(".option-list .favorite-close").click(function () {
            $(".favorite-list").removeClass("active");
        });
        */

        /* 4dep, 5dep */
        $(".dep4-menu .dep4-tit").click(function () {
            $(".dep4-menu .dep4-list").stop().slideToggle();
        });

        $(".dep5-menu .dep5-tit").click(function () {
            $(".dep5-menu .dep5-list").stop().slideToggle();
        });
    }

    /* ==========================================================================
       Common - Table Scroll
       ========================================================================== */
    var tableScroll = function () {
	  setTimeout(function(){
            var tabActive = $('#contents #tab li.li_4>a._active');
            var tabActiveClone = tabActive.clone();
            var tabActiveHtml = tabActiveClone.html();
            var tabAppend = $('.tab_div.div_4');

            tabAppend.prepend('<button>'+tabActiveHtml+'</button>');
        },200);

        setTimeout(function(){
            var tabButton = $('#contents #tab button');
            var tabOpen = $('#contents #tab ul.ul_4');
            tabButton.on('click',function(){
                tabOpen.toggleClass('open');
                $(this).toggleClass('open');
            });
        },500);
	  
		$('.st1-table table').wrap("<div class='table-scroll'></div>");

        setTimeout(function () {
            var tableIcon = $('.table-scroll'); 
            tableIcon.on('click', function () {

                $(".table-scroll").niceScroll({
                    cursorcolor: "rgba(1,120,221,1)",
                    cursorwidth: "1px",
                    cursorborder: "0px solid rgba(2,81,148,1)",
                    cursorborderradius: 0,
                    cursoropacitymin: 0,
                    autohidemode: 'leave',
                    scrollspeed: 0,
                    zindex: 100,
                    mousescrollstep: 30,
                    railpadding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                });
                $(this).addClass('on');
            });
        }, 100);
        $("html").niceScroll({
            cursorcolor: "rgba(190,190,190,.7)",
            cursorwidth: "13px",
            cursorborder: "0px solid rgba(44,140,255,1)",
            cursorborderradius: 20,
            cursoropacitymin: 0.2,
            autohidemode: 'leave',
            scrollspeed: 0,
            zindex: 99999999,
            mousescrollstep: 40,
            railpadding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        });
    }

    /* ==========================================================================
      Common - Sub Visual
      ========================================================================== */
    var subVisual = function () {
        setTimeout(function () {
            var subVisual = $('#wrap-visual #visual');
            var active1Depth = $('#gnb .li_1.eQ01');
            var active2Depth = $('#gnb .li_1.eQ02');
            var active3Depth = $('#gnb .li_1.eQ03');
            var active4Depth = $('#gnb .li_1.eQ04');
            var active5Depth = $('#gnb .li_1.eQ05');

            subVisual.removeClass();

            if (active1Depth.hasClass('_menuOn')) {
                subVisual.addClass('m1');
            } else if (active2Depth.hasClass('_menuOn')) {
                subVisual.addClass('m2');
            } else if (active3Depth.hasClass('_menuOn')) {
                subVisual.addClass('m3');
            } else if (active4Depth.hasClass('_menuOn')) {
                subVisual.addClass('m4');
            } else if (active5Depth.hasClass('_menuOn')) {
                subVisual.addClass('m5');
            } else {
                subVisual.addClass('none');
            }
        }, 50);
    }

    /* ==========================================================================
      Top Button
      ========================================================================== */
    var gotoTop = function () {
        $('.btn-top').on('click', function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 400);
        });

        var winScroll = $(window).scrollTop();
        if (winScroll > 200) {
            $('.fix-box.main-fix').addClass('on');
        } else {
            $('.fix-box.main-fix').removeClass('on');
        }

        $(window).scroll(function () {
            var winScroll = $(window).scrollTop();
            if (winScroll > 200) {
                $('.fix-box.main-fix').addClass('on');
            } else {
                $('.fix-box.main-fix').removeClass('on');
            }
        });
    }

    return {
        //Public

        //Remove Css
        removeCss: removeCss(),

        //GNB
        gnb: function () {
            var windowSize = $(window).width();
            if (windowSize < 960) {
                gnbMobile();
            } else {
                gnbPc();
            }
        },
        //Sub Menu Nav
        getMenuText: getMenuText(),
        getMenuList: getMenuList(),
        setMenuList: setMenuList(),
        //Sns Toggle
        snsToggle: snsToggle(),
        //Sns Share
        snsShare: snsShare(),
        //Table Scroll
        tableScroll: tableScroll(),
        //Sub Visual
        subVisual: subVisual(),
        //Goto Top
        gotoTop: gotoTop()
    }
})();

window.addEventListener('load', function (e) { k2Func.gnb(); });
window.addEventListener('resize', function (e) { k2Func.gnb(); });
