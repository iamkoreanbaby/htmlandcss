$(".main-menu > li").mouseover(function(){
    $(this).children(".sub").stop().slideDown();
});
$(".main-menu > li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
});

start();
var imgs = 5;
var now = 0;

function start() {
    $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();}, 2000);
}

function slide() {
    now = now == imgs?0:now+=1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}

function winOpen2(){
var win1 = window.Open('login.html','child1','toolbar = no, loccation = no, status = no, menubar = no, resizeable = no, scrollbars = no, width = 700, height = 700')
}

function winOpen2(){
var win2 = window.open('login.html','child2','toolbar = no, loccation = no, status = no, menubar = no, resizeable = no, scrollbars = no, width = 700, height = 700')
}