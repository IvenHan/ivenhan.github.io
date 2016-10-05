// 初始化导航状态 默认为收起为1,展开为-1
var navStatus = 1;

$(document).ready(function() {
    para();
    scrollPage();
});


function para() {
    var navTitleBar = $('.navTitleBar');
    var navTitleBtn = $('.navTitleBtn');
    navTitleBtn.click(function() {
        if (navStatus == 1) {
            $('.navList').slideDown(200);
            $('.mask').fadeIn(200);
            changeColorShow();
            navStatus = navStatus * -1;
        } else {
            $('.navList').slideUp(200);
            $('.mask').fadeOut(200);
            changeColorHide();
            navStatus = navStatus * -1;
        }
    });



    function changeColorShow() {
        $('.navTitleBar').animate({
            backgroundColor: "#333333",
        }, 100);

        $('.navTitleBar h2').animate({
            color: "#ffffff",
        }, 200);

        $('.navTitleBar h2 span').animate({
            color: "#ffffff",
        }, 200);

        $('.ic_show').hide(100);
        $('.ic_hide').show(100);

    }

    function changeColorHide() {
        $('.navTitleBar').animate({
            backgroundColor: "#ffffff",
        },100);

        $('.navTitleBar h2').animate({
            color: "#333333",
        },200);

        $('.navTitleBar h2 span').animate({
            color: "#333333",
        },200);

        $('.ic_show').show(100);
        $('.ic_hide').hide(100);
    }

}





function scrollPage() {
    $('#0').click(function () {
        $("html,body").animate({scrollTop:$("#page0").offset().top-68},500);
        $('.navTitleBtn').click();
    });

    $('#1').click(function () {
        $("html,body").animate({scrollTop:$("#page1").offset().top-68},500);
        $('.navTitleBtn').click();
    });

    $('#2').click(function () {
        $("html,body").animate({scrollTop:$("#page2").offset().top-68},500);
        $('.navTitleBtn').click();
    });

    $('#3').click(function () {
        $("html,body").animate({scrollTop:$("#page3").offset().top-68},500);
        $('.navTitleBtn').click();
    });

    $('#4').click(function () {
        $("html,body").animate({scrollTop:$("#page4").offset().top-68},500);
        $('.navTitleBtn').click();
    });

}