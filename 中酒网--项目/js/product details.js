$(function() {
	//放大镜 选项卡效果

	//F放大镜选项卡左右方向
	$(".piclist-btn-up").click(function() {
		$(".piclist").stop().animate({
			left: 0
		}, 500)
	})
	$(".piclist-btn-down").click(function() {
			var wLeft = $(".piclist li").eq(4).position().left;
			console.log(wLeft);
			$(".piclist").stop().animate({
				left: -wLeft
			}, 500)
		})
		//放大镜小图划过效果
	$(".piclist li").hover(
			function() {
				var index = $(this).index();
				$(".piclist li").removeClass();
				$(this).addClass("selected");
				if(index == 0) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/cd4603ae-ee8f-45ff-bb9f-ca90f198a40dSource.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/cd4603ae-ee8f-45ff-bb9f-ca90f198a40dSource.jpg"
					})
				} else if(index == 1) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/dc5a6e78-d663-4d47-9d6b-9734a2118a1aSource.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/dc5a6e78-d663-4d47-9d6b-9734a2118a1aSource.jpg"
					})
				} else if(index == 2) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/5f14a459-74f2-49f3-863e-3946acf40419Source.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/5f14a459-74f2-49f3-863e-3946acf40419Source.jpg"
					})
				} else if(index == 3) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/d85c4ecc-08d9-4835-92b0-c0ff46456821Source.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/d85c4ecc-08d9-4835-92b0-c0ff46456821Source.jpg"
					})
				} else if(index == 4) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/ab476619-5c63-469a-a66e-954788e2b704Source.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/ab476619-5c63-469a-a66e-954788e2b704Source.jpg"
					})
				} else if(index == 5) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/1b807c25-6e11-4860-a38a-6265b7883218Source.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/1b807c25-6e11-4860-a38a-6265b7883218Source.jpg"
					})
				} else if(index == 6) {
					$(".picZoomer-pic-wp img").attr({
						src: "../img/e88cc5dd-61ce-4bfe-9e5b-375c4316a687Source.jpg"
					})
					$(".picZoomer-zoom-wp img").attr({
						src: "../img/e88cc5dd-61ce-4bfe-9e5b-375c4316a687Source.jpg"
					})
				}

			},
			function() {
				$(this).removeClass();
			})
		//划过中图     显示zoom 和大图
	$(".picZoomer-pic-wp").hover(
			function() {
				$(".picZoomer-cursor").css({
					"display": 'block'
				});
				$(".picZoomer-zoom-wp").css({
					"display": 'block'
				})
			},
			function() {
				$(".picZoomer-cursor").css({
					"display": 'none'
				});
				$(".picZoomer-zoom-wp").css({
					"display": "none"
				})
			})
		//鼠标在中图中移动的 效果
	$(".picZoomer-pic-wp").mousemove(function(e) { //offset  当前视窗的偏移量
			var e = e || window.event; //目前jq没有做鼠标坐标的函数
			var iLeft = e.clientX - $(".picZoomer-pic").offset().left - $('.picZoomer-cursor').width() / 2;
			var iTop = e.clientY - $(".picZoomer-pic").offset().top - $('.picZoomer-cursor').height() / 2 + $(window).scrollTop();
			//按照效果要求  不需做上下左右的限定
			//遮罩层的位置
			$(".picZoomer-cursor").css({
				left: iLeft,
				top: iTop
			});
			//根据中图和大图的比例关系 显示对应的大图  令两张图片的移动长度与本身的长度比相等   既是等比例放大
			var iImgLeft = -iLeft * ($(".picZoomer-zoom-wp img").width() - $('.picZoomer-zoom-wp').width()) / ($(".picZoomer-pic").width() - $(".picZoomer-cursor").width());
			var iImgTop = -iTop * ($(".picZoomer-zoom-wp img").width() - $(".picZoomer-zoom-wp").width()) / ($(".picZoomer-pic").width() - $(".picZoomer-cursor").width());
			$(".picZoomer-zoom-pic").css({
				left: iImgLeft,
				top: iImgTop
			});
		})
	//商品详情tab内容展示
	 $("#com-details .tab-t ul li").click(//这部分等客户通知
	 	function(){
	 		var index=$(this).index();
	 		$("#com-details .tab-t ul li").removeClass();
	 		$(this).addClass("sel");
	 		
	 })
	
	
	
		//评论选项卡效果
	$("#com-details .t li").click(function() {
		var index = $(this).index();
		$(this).siblings().removeClass();
		$(this).addClass("sel");
		$(".all .c ul").removeClass();
		$(".all .c ul").eq(index).addClass("sel");
	})

		//吸顶效果    真正的吸顶效果
	$(window).scroll(function() { //offset().top和scrollTop()  目前接触有效
			if($(window).scrollTop() > $(".tab div").eq(0).offset().top) {
				$(".tab-t").addClass("tab-t-fix");
			} else if($(window).scrollTop() < $(".tab").eq(0).offset().top) {
				$(".tab-t").removeClass("tab-t-fix");
			}
		})
		//右侧划过效果
	$("#side-service .t li").hover( //
		function() {
			$(this).find("a").css({
				"display": 'block'
			});
			$(this).css("background", "#b81c22");
		},
		function() {
			$(this).find("a").css("display", 'none');
			$(this).css("background", "#313131");
		})
	$("#back-to-top").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 200)
	})
	$(".page a").click(function() {
		
		$.getJSON( //获取京东的评论  
			"https://sclub.jd.com/productpage/p-10586394451-s-0-t-3-p-"+$(this).text()+".html?callback=?",
			function(data) {
			
				$.each(data.comments, function(i) {
					index=i;
					if(i < 5) {
						//console.log($("#ulall").eq(i).find(".buyer p").text());
						$("#ulall li").eq(i).find(".buyer p").text(data.comments[i].nickname);
						
						//console.log(data.comments[i].nickname)
						$("#ulall li").eq(i).find(".row2").text(data.comments[i].content);
					}
				})

			}
		)
	})

	
	
	
	
	
	//左侧热销排行榜     类似选项卡效果

	$("#com-details .rank dl dt").mouseenter(
		function(){
				$("#finddt").css('display','block');
				$("#finddd").css("display","none");
				$(this).css("display","none");
				$(this).next().css("display","block");				
	})
	$("#com-details .rank dl dd").mouseenter(
		function(){
			$("#com-details .rank dl dd").css('dispaly','none');
			$(this).css("dispaly","block");
	})
	$("#com-details .rank dl dd").mouseleave(//边界限定
		function(e){
			var e=e||window.event;
			if(e.clientX<$(this).width()+$(this).offset().left){
				$(this).css('display',"none");
				$(this).prev().css('display','block')
			}
	})
	
		//购物车

	//查看购物车  打开关闭效果
	$("#OpenShopCar").click(function() {
		$("#side-service").stop().animate({
			right: 0
		}, 500)
		$("#total").stop().animate({
			right: 0
		}, 500)
	})
	$("#side-service .c h3 a").click(function() {
			$("#side-service").stop().animate({
				right: -270
			}, 500);
			$('#total').stop().animate({
				right: -270
			}, 500);
		})
		//添加物品    写入cookie
		//商品详情页主物品的数量加减
	var goodsNum = 1;
	$(".add").click(function() {
		goodsNum++;
		$("#num").find("input").val(goodsNum);
	})
	$(".plus").click(function() {
		if(goodsNum <= 1) {
			goodsNum = 1;
			$("#num").find("input").val(goodsNum);
		} else {
			goodsNum--;
			$("#num").find('input').val(goodsNum);
		}
	})
	var cookieGoods = "";
	var addClick = false;
	//console.log($.cookie("goods"))
	
	
	function addCookie() {
			var arr = [];
			var name = $("#com-intro .info h1").text();
			var price = $("#com-intro .info .pri-box dd b").text();
			var img = $(".piclist li").eq(0).html();
			var sum = 1;
			if(!addClick) { //判断二次点击
				sum = Number($('#num input').val());
			} else {
				var aa2 = $.cookie('goods');
				console.log(aa2);// undeinfed
				var tmpJSON2=JSON.parse(aa2);
				console.log(tmpJSON2);
				// sum = Number($("#num input").val()) +tmpJSON2[0].sum;
			}
			var oGoods = {
				id:"Por2705",
				name: name,
				price: price,
				img: img,
				sum: sum
			}

			arr.push(oGoods);
			var strArr=JSON.stringify(arr);
			return strArr;
		}
	$(".go-into").click(function() {

		$("#cartlistno").css("display", "none");
		$("#cartlist").css("display", "block");
		$("#total").css("display","block")

		//写入cookie

		//将需要写入cookie中的信息存入对象中
		
		//将数据写入coolie
		if(!addClick) {
			
			var value=addCookie();
			addClick = true;
			$.cookie(
			    "goods",
				value,
				{expires: 7,path: '/'}
			);
			var aa = $.cookie("goods");
			var tmpJSON=JSON.parse(aa); //转换成对象！
			var str = "";
			str = "<span><i>" + $("#num input").val() + "</i></span>";
			$("#OpenShopCar").append(str);
			var strGoods = "";
			strGoods = "<dd><a href='javascript:;'>" + tmpJSON[0].img + "</a><h6><a href='javascript:;'>" + tmpJSON[0].name + "</a></h6><p id='time2705'><a  href='javascript:;' class='op-del' >删除</a><b>￥<em>" +
			 tmpJSON[0].price + '</em></b><span>x' +
			 tmpJSON[0].sum + "</span></p></dd>";
			$("#cartlist dl dt").before(strGoods);
			
			//console.log(tmpJSON[0].price)
			$("#side-service .sc-c .yes dl b").text("￥"+(Number(tmpJSON[0].price))*(Number(tmpJSON[0].sum)));
			$('#side-service .foot ul li').eq(1).find("b").text((Number(tmpJSON[0].price))*(Number(tmpJSON[0].sum)));
			$('#side-service .foot ul li').eq(3).find("b").text((Number(tmpJSON[0].price))*(Number(tmpJSON[0].sum)));
			$('#side-service .foot ul li').eq(0).find("b").text(tmpJSON[0].sum)
			$("#side-service .sc-c .yes .op-del").click(function() {
		       //console.log(1)
			   $("#side-service .sc-c .yes dl").css("display",'none')
			   $("#Subtotal").css('display','none');
			   $("#total").css("display","none");
			   $('#cartlistno').css("display","block")
			   $("#side-service .t .sc").find("span").remove();
			   $.cookie(
			   	"goods",
			   	null,
			   	{expires:-1,path:'/'})
			
	         })
		} 
//		else {
//			var aa2=$.cookie('goods');
//			//console.log(aa2);
//			var tmpJSON2=JSON.parse(aa2);
//			//console.log(tmpJSON2);
//			sum = Number($("#num input").val()) + Number(tmpJSON2[0].sum);
//			$("#OpenShopCar span i").text(sum);
//			$('#time2705 span').text("x" + sum);
//			$.cookie("goods", addCookie(), {
//				expires: 7,
//				path: '/'
//			});
//		}
		
	})
	
	//页面加载之前从cookie里获取数据
	if($.cookie("goods")!="undefined"){
		var aa = $.cookie("goods");
			var tmpJSON=JSON.parse(aa); //转换成对象！
			var str = "";
			str = "<span><i>" + tmpJSON[0].sum+ "</i></span>";
			$("#OpenShopCar").append(str);
			var strGoods = "";
			strGoods = "<dd><a href='javascript:;'>" + tmpJSON[0].img + "</a><h6><a href='javascript:;'>" + tmpJSON[0].name + "</a></h6><p id='time2705'><a  href='javascript:;' class='op-del' >删除</a><b>￥<em>" +
			 tmpJSON[0].price + '</em></b><span>x' +
			 tmpJSON[0].sum + "</span></p></dd>";
			$("#cartlist dl dt").before(strGoods);
			$("#cartlistno").css("display", "none");
		   $("#cartlist").css("display", "block");
		   $("#total").css("display","block");
		   $("#side-service .sc-c .yes .op-del").click(function() {
		       //console.log(1)
			   $("#side-service .sc-c .yes dl").css("display",'none')
			   $("#Subtotal").css('display','none');
			   $("#total").css("display","none");
			   $('#cartlistno').css("display","block")
			   $("#side-service .t .sc").find("span").remove();
			   $.cookie(
			   	"goods",
			   	null,
			   	{expires:-1,path:'/'})
			
	         })
	}
	
})