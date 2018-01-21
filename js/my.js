// JavaScript Document
$(function() {
    $('#dowebok').fullpage({
        verticalCentered: true, //内容垂直居中
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#f60'],//设置每一屏的颜色 
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//设置跳转链接
        navigation: true,//右边角点导航
        menu: '#menu',//来设置顶部导航
        resize: true,//窗口缩放事件触发
        continuousVertical: true,
    });
	
	
	
	
	
	
});

window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  }) ;
	
	
	
};




