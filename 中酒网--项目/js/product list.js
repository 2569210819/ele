$(function(){
	
	//存放所有的商品
	var productData = [];
	//每页的显示的行数
	var pageRows = 24;
	
	var $proList = $('.rg_sl_list  ul');
	console.log($proList);
	$.get("productList.json",function(res){
//		console.log(res.length);
console.log(res)

		productData = res;
		//计算总页数
		var pageCount = Math.ceil(productData.length / pageRows);
//		alert(pageCount);
		
		addData(1);  //显示第一页的数据   ：10条
		
		$('.pages').createPage({
			pageCount:pageCount,
			current:1,
			backFn:function(page){
				addData(page);
			}
		})
	})
	
	function addData(page){
		var iNum = (page - 1) * pageRows;
		var str = '';
		for(var i = 0;i < pageRows;i++){
			if(!productData[iNum + i]){
				break;
			}
			
//			str += '<li>'+
//						'<img src="'+productData[iNum + i].imgSrc+'" alt="" />'+
//						'<p class="price">￥'+productData[iNum + i].price+'</p>'+
//						'<p>'+productData[iNum + i].info+'</p>'+
//						'<p>月成交<span>'+productData[iNum + i ].sellNum+'笔</span></p>'+
//					'</li>';
					
		             str+= '<li id='+productData[iNum + i].id +'class="" data-id="1" data-code="2705" data-type="534" data-brand="511" data-sort="0" data-score="6.36690950393677" data-sale-amount="0">'+
								'<a class="list1" href="http://www.zhongjiu.cn/productdetail/2705.htm" target="_blank">'+
									'<img  width="220" height="220" alt="小龙船红葡萄酒(限量版) 750ml" id="img009804899351986562"'+ 
									'src="'+productData[iNum + i].imgSrc+'"alt="" type1="1">'+
								'</a>'+
								'<a class="list2" href="http://www.zhongjiu.cn/productdetail/2705.htm" style="display:block;with:198px;" target="_blank">'+
									'小龙船红葡萄酒(限量版) 750ml'+
									'<span style="color:red; margin-left:5px;">'+
										
									'</span>'+
									
								'</a>'+
								'<p class="list3"><span class="jg" id="price-2705"><em class="dol">￥</em>175.00</span>'+
									'<a class="pl_num product-comment-total-2705" href="http://www.zhongjiu.cn/productdetail/2705.htm" rel="nofollow"><em></em>1359个评价</a>'+
								'</p>'+
								'<p class="list5">'+
									'<a id="buy_2705" class="shop" href="javascript:void(0);" onclick="AddProductItem1("2705","list")">加入购物车</a>'+
									'<a id="fav_2705" class="save" href="javascript:void(0);" onclick="shoucangSku("2705");">收藏</a>'+
								'</p>'+
							'</li>'			
		}
		
		$proList.html(str);
		
		//插入之后才能进行动画效果操作  通过json数据传送的id 图片   划过改变边框的颜色
		$(".rg_sl_list ul li").mouseenter(
     	function(){
     		$(this).addClass("on");
     		//console.log(1)
     		//alert(1)
     	})
    $(".rg_sl_list ul li").mouseleave(
    	function(){
     		$(this).removeClass();
     		//console.log(2)
     		//alert(2)
    })
	}
	// 划过改变字体颜色
	$(".rg_list .list_con li .list2").hover(
		function(){
			$(this).css("color","#d10700");
		},
		function(){
			$(this).css("color","#000");
	})
	// 划过改变字体的颜色
	$(".rg_px .rg_px1 a").hover(
		function(){
			$(this).css("color","#d10700")
			$(".rg_px .rg_px1 .cur").css("color","#fff")
		},
		function(){
			$(this).css("color",'#666')
	})
//	$('.main-connav-l h2').mouseenter(  相应式下拉菜单要重新定义相应的css，其效果才会很好的展现出来
//		function(){
//			$(this).siblings().css("display","block");
//	})
})
