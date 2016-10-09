$(function() {
	$(".close").click(function() { //关闭按钮
		$(".wrap").css("display", "none");
		$(".tcImg").css("display", "none");
	})
	$(".header-left li").hover( //header左侧划过
		function() {
			$(this).find("a").css("color", "#b81c22")
		},
		function() {
			$(this).find("a").css("color", "#999999")
			$(".header-left-lastli").css("color", "#b81c22");
		}
	)
	$(".header-left-lastli").click(function() { //注册按钮
		location.href = "html/register.html"
	})
	$(".header-right li").hover( //header右侧划过
			function() {
				$(this).find("a").css("color", "#b81c22");
				$(this).find(".weibo").css("display", "block");
				$(this).find(".weixina").css("display", "block")
			},
			function() {
				$(this).find("a").css("color", "#999999");
				$(this).find(".weibo").css("display", "none");
				$(this).find('.weixina').css("display", "none");
			}
		)
		//搜索框区域   用json获取百度数据
	$('.search_txt').bind('input propertychange', function() {
		$(".search_list").html("");
		var str = $(".search_txt").val();
		$.getJSON(
			"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + str + "&cb=?",
			function(data) {
				var str = '';
				$.each(data.s, function(i) {
					str += "<li>" + data.s[i] + "</li>";
					$(".search_list").html(str);
				})
			})

	})
	$(".search_txt").blur(function(){//失去焦点  清空搜索框
		$(".search_list").html("");
	})
	$(".search_txt").focus(function(){//获得焦点  清空搜索框
		$(".search_txt").val("");
	})
	

	$(".hot-search a").hover( //main-nav效果
		function() {
			$(this).css("color", "#b81c22");
		},
		function() {
			$(this).css("color", "#999999");
		})
	$(".main-connav-r li").hover(
		function() {
			$(this).find("a").css("color", "#b81c22")
		},
		function() {
			$(this).find("a").css("color", "#333")
		})
	
	
	
	
	// 导航菜单       banner图上的响应式的菜单  
	$(".main-connav-l").children("div").mouseenter(function(evt) {
		$(".main-hide-div").css("display",'none');
		$(this).find(".main-hide-div").css("display",'block');
		$(".main-connav-l h3 .icon-tri").css("display",'none');
		$(this).find(".icon-tri").css("display",'block');
		$(".main-connav-l").children("div").css("background","#484848");
		$(this).css("background",'#b81c22');
	
	});
	$(".main-connav-l").mouseleave(function(){
		$(".main-hide-div").css("display","none");
		$(".main-connav-l h3 .icon-tri").css("display",'none');
		$(".main-connav-l").children("div").css("background","#484848")
		
	})
	$(".main-hide-div .hide-l dl dd span").hover(
		function(){
			$(this).css("color","#b81c22")
		},
		function(){
			$(this).css("color","#000");
	})

})