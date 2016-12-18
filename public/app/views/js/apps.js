jQuery(document).ready(function($) {
    "use strict";
    var plugin_exists = true;
//    **----------
//    Google Fonts
//    **----------
        var WebFontConfig = {
            google: {
                families: [
                    'Open+Sans:400italic,400,300,600:latin',
                    'Roboto:400,300,400italic,500:latin'
                ]
            }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();

    // **---------------------------------------
    // Left Bar and Right Bar Height Calculation
    // **---------------------------------------
    function AsideHeight() {
        var wh = $(window).outerHeight(),
            TopBarHeight = $('.topbar').height(),
            calc_wh = wh - TopBarHeight;
        $(".leftbar").css({
            "height": calc_wh + "px"
        });
        $(".rightbar").css({
            "height": calc_wh + "px"
        });
        $('.left-aside-container').slimscroll({
            height: calc_wh,
            width: "250px",
            size: '4px',
            color: 'rgba(255,255,255,.5)',
            distance: '1px',
            railVisible: true,
            railColor: '#222',
            railOpacity: 0.3,
            wheelStep: 20,
            borderRadius: '0px',
            railBorderRadius: '0px',
            allowPageScroll: false
        });
    }



    

    // **------------------
    // Popover Hide onClick
    // **------------------
    $('body').on('click', function(e) {
        $('.chat-user-list > li > a').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });



    // **----------------
    // Velocity Animation
    // **----------------
    try {
        $('.slidePanel').velocity({
            translateX: "-100%"
        }, 300, "swing");

    } catch (err) {
        console.log('velocity is not found');
    }

    // **------------
    // Leftbar Toggle
    // **------------
    $(".left-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($("body").hasClass("left-aside-toggle")) {
            $("body").removeClass("left-aside-toggle");
        } else {
            $("body").addClass("left-aside-toggle");
        }
    });

    

    // **-----------
    // Mobile Topbar
    // **-----------
    $(".btn-mobile-bar").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".topbar-right").hasClass("bar-toggle")) {
            $(".topbar-right").removeClass("bar-toggle");
        } else {
            $(".topbar-right").addClass("bar-toggle");
        }
    });

    


    // **-------------------------
    // Hide Elements On Body Click
    // **-------------------------
    $(document).on('click touchstart', function(e) {
        if ($(e.target).closest(".right-aside-toggle").length === 0 && $(e.target).closest(".right-toggle-switch").length === 0) {
            $(".rightbar").removeClass("right-aside-toggle");
        }
        if ($("body").hasClass("overlay-leftbar")) {
            if ($(e.target).closest(".leftbar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
                $("body").removeClass("left-aside-toggle");
            }
        }
        if ($(e.target).closest(".topbar-right").length === 0 && $(e.target).closest(".btn-mobile-bar").length === 0) {
            $(".topbar-right").removeClass("bar-toggle");
        }
        if ($(e.target).closest(".top-search-bar").length === 0 && $(e.target).closest(".btn-top-search").length === 0) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        }
    });

    

    // **---------------
    // Leftbar Accordion
    // **---------------

    if ($.fn.navAccordion) {
        $('.list-accordion').each(function() {
            $(this).navAccordion({
                eventType: 'click',
                hoverDelay: 100,
                autoClose: true,
                saveState: false,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'acc-current-parent'
            });
        });
    }
    $(document).on("mouseleave", ".iconic-leftbar", function() {
        $(".list-accordion .dcjq-parent").removeClass('active');
        $(".list-accordion .acc-parent-li .acc-parent").removeClass('active');
        $(".list-accordion ul").hide();
    });

    // **--------
    // Scroll Top
    // **--------
    if($.fn.scrollUp){
        $.scrollUp({
            scrollName: 'scrollTop', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade',
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    }


    var SyntaxHighlight = $.SyntaxHighlighter;
    if (SyntaxHighlight) {
        SyntaxHighlight.init({
            'theme': 'balupton',
            'themes': ['balupton']
        });
    }

    // **---------------------
    // Initialize both sidebar
    // **---------------------
    AsideHeight();
    ChatHeight();

    // **-----------
    // Window Resize
    // **-----------
    $(window).smartresize(function() {
        AsideHeight();
        ChatHeight();
    });
    // **---------------
    // Responsive Handle
    // **---------------
    var jRes = jRespond([{
        label: 'handheld',
        enter: 0,
        exit: 767
    }, {
        label: 'tablet',
        enter: 768,
        exit: 979
    }, {
        label: 'laptop',
        enter: 980,
        exit: 1199
    }, {
        label: 'desktop',
        enter: 1200,
        exit: 10000
    }]);

    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function() {
            $(".dropdown").removeClass("open");
            $(".rightbar").removeClass("right-aside-toggle");
            $("body").addClass("isMobile");
            $(document).on('click touchstart', function(e) {
                if ($("body").hasClass("overlay-leftbar") || $("body").hasClass("isMobile")) {
                    if ($(e.target).closest(".leftbar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
                        $("body").removeClass("left-aside-toggle");
                    }
                }
            });
        },
        exit: function() {
            $(".isMobile").removeClass("left-aside-toggle");
            $(".rightbar").removeClass("right-aside-toggle");
            $("body").removeClass("isMobile");
        }
    });

    
    

    





    


    

   
    









    

   

    



    




    /*--jQuery Noty
     * switchery.css
     * switchery.js
     --*/

    



    



   
});