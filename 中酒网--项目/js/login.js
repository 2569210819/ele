$(function(){
	var ok0=false;
	var ok1=false;
	var ok2=false;
	var tmpJION={  //注意对象的格式
		"id":"18530259839",
		"passWord": "wg413511"
	}
	if($.cookie("remberUserId")=="true"){
		$("#userId").val($.cookie("userId"));
		$('#passWord').val($.cookie("userPassWord"));
	}
	var strJSon=JSON.stringify(tmpJION)//将对象转换成字符串
    //不论对象里是什么类型，都转成字符串的类型，都要加引号“”;
    $.cookie("id","18530259839",{expires:30,path:"/"})
    $.cookie("passWord","wg413511",{expires:30,path:"/"});
	var tmpVal=$.cookie("id");
	var tmpVal2=$.cookie('passWord');
	$("#userId").blur(function(){
		$("#userId_ok").css("display","none");
		$("#userId_error").css("display","none");
		var str=$('#userId').val();
		if(str==""){
		}else if(str!=""){
			if (str==tmpVal){
				$("#userId_ok").css("display","block");
				ok0=true;			
			}else{
				$("#userId_error").css("display","block");
				ok0=false;
			}
		}
	})
	$("#passWord").blur(function(){
		$("#passWord_ok").css("display","none");
        $("#passWord_error").css("display","none");
		var str=$("#passWord").val();
		if(str==""){
			
		}else if(str!=""){
			if(str==tmpVal2){
				$("#passWord_ok").css("display","block");
				ok1=true;
			}else {
				$("#passWord_error").css("display","block");
				ok1=false;
			}
		}
	})
	var spanIndex=false;
	$("#remberUserId").click(function(){
		if(!spanIndex){
			ok2=true;
			$(".r_rem span").addClass("tj");
			$(".tj").css("background","url(../img/load1101.png) no-repeat -406px -216px");
			spanIndex=true;
			
			console.log(spanIndex);
		}else{
			ok2=false;
			$(".r_rem span").addClass("r_rem1");
			$(".r_rem1").css("background","url(../img/load1101.png) no-repeat -406px -197px");
			spanIndex=false;
			console.log(spanIndex);
		}
		
	})
	$(".r_load_btn").click(function(){
		if(ok0&&ok1&&ok2){
			var strUserid=$("#userId").val();
			var strPassword=$("#passWord").val();
			$.cookie("remberUserId","true",{expires:7,path:"/"});
			$.cookie("userId",strUserid,{expires:7,path:"/"});
			$.cookie("userPassWord",strPassword,{expires:7,path:"/"});
			location.href="../index.html"
		};
		if(ok0&&ok1){
			
			location.href="../index.html"
		};
	})
	$(".r_load_zc").click(function(){
		location.href="../html/register.html"
	})
})
