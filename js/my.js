// JavaScript Document


;(function(){
	
		$(function(){	
			//初始化中执行 自动播放
				//循环定时，不会停歇，一直不停的播放，首先要想到循环定时，没有目标
			var num = 0; //累加器
			var timer = null; //定时器名称	
			//封装定时器，后面还要使用。
			function dongdong(){
				timer = setInterval(function(){	
					num++;//累加器生效
					//验证数据
					if(num>4){	
						num = 0;
					}
					//让图片播放，火车带动车厢
					$('.banner-real ul').animate({'left':-num*1000})
					//让角标跟随运动
					$('.banner-real ol li').eq(num).addClass('banner-active').siblings().removeClass('banner-active')
				},2000)
			}
			//默认执行函数，让动画自动播放
			dongdong()
			
			
			//事件中执行移上，停止播放，移开，继续播放
			$('.banner-real').hover(function(e) {
				clearInterval(timer)
			},function(){
				//先清除定时器，再开启定时器
				clearInterval(timer)
				dongdong()
			});
			//事件中执行移上，切换到相应的图片
			$('.banner-real ol li').mouseover(function(e) {
				var i = $(this).index();//当前移上角标的索引值
				//让当前角标点亮，其它兄弟不亮
				$(this).addClass('banner-active').siblings().removeClass('banner-active');
				//让图片进行相应的切换
				$('.banner-real ul').stop().animate({left:-i*1000})
				//定时器动画和移上角标动画同步。
				num = i;
			});
		});
	
	})();



new WOW().init();




