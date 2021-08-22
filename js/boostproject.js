$(function(){
    $('.top ul').on('click','li',function(){
        let index = $(this).index();
        $(this).addClass('active1').siblings().removeClass('active1');
        $('.ulList').eq(index).addClass('on').siblings().removeClass('on')
    })
})