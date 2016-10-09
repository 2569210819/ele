$(function() {

	var bannerIndex = 0; //banner 轮播
	var otimer = null;
	auto();

	function auto() {
		otimer = setInterval(function() {
			bannerIndex++;
			if(bannerIndex == $(".flexslider ul li").length) {
				bannerIndex = 0;
			}
			$(".flexslider ul li").fadeOut(500);
			$(".flexslider ul li").eq(bannerIndex).fadeIn(500);
			$(".flash-btn span").css("background", "#4e4c44");
			$(".flash-btn span").eq(bannerIndex).css("background", "#cf322a");
		}, 3000)
	}
	//	$(".flexslider").mouseenter(function(){ 客户后期不要
	//		clearInterval(otimer);
	//	})
	//	$('.flexslider').mouseleave(function(){
	//		auto();
	//	})
	$(".flash-btn span").click(function() {
		clearInterval(otimer)
		bannerIndex = $(this).index();
		$(".flexslider ul li").fadeOut(500);
		$(".flexslider ul li").eq(bannerIndex).fadeIn(500);
		$(".flash-btn span").css("background", "#4e4c44");
		$(".flash-btn span").eq(bannerIndex).css('background', "#cf322a");
		auto();
	})
	$(".flash-btn span").hover(
		function() {
			$(this).css("color", "#c00");
		},
		function() {
			$(this).css('color', "#fff");
		})
	$(".notice ul li a").hover(function() {  //banner右侧
			$(this).css("color", "#c00");
		},
		function() {
			$(this).css("color", "#666")
			$(".notice ul li .active").css("color", "#c00");
		})
	$("#brand-sale .tab li").click(function() {  //热卖右侧tab切换
		var index = $(this).index();
		$('#brand-sale .tab li').removeClass("select");
		$(this).addClass("select");
		$("#brand-sale .tab-con ul").css("display", "none");
		$("#brand-sale .tab-con ul").eq(index).css("display", "block")
	})
	$("#brand-sale .tab-con ul li a img").hover(  //热卖下的图片   中心放大
		function() {
			var wValue = $(this).width() + 10;
			var hValue = $(this).height() + 10;
			$(this).stop().animate({
				width: wValue,
				height: hValue,
				left: "-5px",
				top: "-5px"
			}, 200)
		},
		function() {
			$(this).stop().animate({
				width:280,
				height:180,
				left: 0,
				top: 0
			}, 200)
		})
	
	
	var daotime=new Date(2016,9,2);     //限时特卖        倒计时
	var daotime1=daotime.getTime()
  	function text(){
  		var nowtime = new Date();
  		var nowtime1=nowtime.getTime();
		var cha=daotime1-nowtime1;
		var day=Math.floor(cha/1000/60/60/24);  //  时分秒的算法
		var hours=Math.floor(cha/1000/60/60%24);
		var minutes=Math.floor(cha/1000/60%60);
		var seconds=Math.floor(cha/1000%60);
		var str="";
		str="<i></i>还剩"+toTwo(day)+"<em>天</em>"+toTwo(hours)+"<em>时</em>"+toTwo(minutes)+"<em>分</em>"+toTwo(seconds)+"<em></em>结束";
		$("#time-sale h1 span").eq(1).html(str);
	}
	function toTwo(n){
		return n<=9?"0"+n:""+n;
	}
   	text()//提前运行  改变页面的数据
   	setInterval(function(){
   		text()
   	},1000)
   	
   
   	
   	
   	var daotime2=new Date(2016,9,30);     //限时特卖        倒计时
	var daotime22=daotime.getTime()
  	function text2(){
  		var nowtime2 = new Date();
  		var nowtime22=nowtime2.getTime();
		var cha=daotime22-nowtime22;
		var day=Math.floor(cha/1000/60/60/24);  //  时分秒的算法
		var hours=Math.floor(cha/1000/60/60%24);
		var minutes=Math.floor(cha/1000/60%60);
		var seconds=Math.floor(cha/1000%60);
		var str="";
		str="<i></i>距离抢购"+toTwo(day)+"<em>天</em>"+toTwo(hours)+"<em>时</em>"+toTwo(minutes)+"<em>分</em>"+toTwo(seconds)+"<em></em>开始";
		$("#time-sale h1 span").eq(2).html(str);
	}
  		
   	text2()//提前运行  改变页面的数据    注意代碼順序
   	setInterval(function(){
   		text2()
   	},1000)
   	
	
	$("#time-sale .tab li").click(function(){  //限时抢购  tab切换
		$(this).siblings().removeClass("select");
		var index=$(this).index();
		$(this).addClass("select");
		$("#time-sale .tab-con ul").css("display","none");
		$("#time-sale .tab-con ul").eq(index).css("display","block");
		$("#time-sale h1 span").css("display","none");
		$("#time-sale h1 span").eq(0).css("display","block");
		$("#time-sale h1 span").eq(index+1).css("display","block");
	})
	$("#floor-bai .tab li").mouseenter(function(){  //白酒选项卡效果
		var index=$(this).index();
		if(index==6){
			$(this).find("a").css("color","#b81c22");
		}else{
			$(this).css({"font-weight":"600","color":"#b81c22"}).siblings().css({"font-weight":"100","color":"#333"})
			$(this).siblings().find("a").css("color","#333")
		}
		if(index==$("#floor-bai .tab li").length-1){
			index=$("#floor-bai .tab li").length-2;
		}
		var wWidth=index*$(this).width();
		var wLeft=wWidth+582+"px";
		$("#floor-bai .tab-st i").css("left",wLeft);     //要加px。。难道我记错了？？
		$("#floor-bai .tab-con ul").css("display","none");
		$("#floor-bai .tab-con ul").eq(index).css("display","block");
	})
	
	$("#floor-hong .tab li").mouseenter(function(){  //红酒选项卡效果
		var index=$(this).index();
		if(index==6){
			$(this).find("a").css("color","#b81c22");
		}else{
			$(this).css({"font-weight":"600","color":"#b81c22"}).siblings().css({"font-weight":"100","color":"#333"})
			$(this).siblings().find("a").css("color","#333")
		}
		if(index==$("#floor-hong .tab li").length-1){
			index=$("#floor-hong .tab li").length-2;
		}
		var wWidth=index*$(this).width();
		var wLeft=wWidth+582+"px";
		$("#floor-hong .tab-st i").css("left",wLeft);     //要加px。。难道我记错了？？
		$("#floor-hong .tab-con ul").css("display","none");
		$("#floor-hong .tab-con ul").eq(index).css("display","block");
	})
	
	
	$("#floor-yang .tab li").mouseenter(function(){  //洋酒选项卡效果
		var index=$(this).index();
		if(index==4){
			$(this).find("a").css("color","#b81c22");
		}else{
			$(this).css({"font-weight":"600","color":"#b81c22"}).siblings().css({"font-weight":"100","color":"#333"})
			$(this).siblings().find("a").css("color","#333")
		}
		if(index==$("#floor-yang .tab li").length-1){
			index=$("#floor-yang .tab li").length-2;
		}
		var wWidth=index*$(this).width();
		var wLeft=wWidth+766+"px";
		$("#floor-yang .tab-st i").css("left",wLeft);     //要加px。。难道我记错了？？
		$("#floor-yang .tab-con ul").css("display","none");
		$("#floor-yang .tab-con ul").eq(index).css("display","block");
	})
	$("#floor-other .tab li").mouseenter(function(){  //洋酒选项卡效果
		var index=$(this).index();
		if(index==4){
			$(this).find("a").css("color","#b81c22");
		}else{
			$(this).css({"font-weight":"600","color":"#b81c22"}).siblings().css({"font-weight":"100","color":"#333"})
			$(this).siblings().find("a").css("color","#333")
		}
		if(index==$("#floor-other .tab li").length-1){
			index=$("#floor-other .tab li").length-2;
		}
		var wWidth=index*$(this).width();
		var wLeft=wWidth+766+"px";
		$("#floor-other .tab-st i").css("left",wLeft);     //要加px。。难道我记错了？？
		$("#floor-other .tab-con ul").css("display","none");
		$("#floor-other .tab-con ul").eq(index).css("display","block");
	})
	
	
	$(".brand li").hover(
		function(){
			$(this).find('a').css('display',"block")
		},
		function(){
			$(this).find("a").css('display',"none")
		}
	)
	$(".right_nav_list li").hover(
		
		function(){
			var index=$(this).index();
			if(index==0||index==4){
				
			}else{
				$(this).find("a").css({"background":"#d10700","color":"#fff"})
			}
		},
		function(){
			var index=$(this).index();
			if(index==0||index==4){
				
			}else{
				$(this).find("a").css({"background":"#dedede","color":"#646465"})
			}
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>$("#brand-sale").offset().top){//右侧的导航  这个写法好似正确的
			$(".right_nav").css("display","block");
		}else{
			$(".right_nav").css('display',"none");
		}
		
	})
	$(".back_top").click(function(){
		$("body,html").stop().animate({scrollTop:0},100)
	})
	
})