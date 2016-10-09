$(function() {
	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	var ok5 = false;
	$(".r-link a").click(function(){
		location.href="../html/login.html"
	});
	$("#userId").blur(function() {
		$("#userId_ok").css("display", "none");
		$("#userId_error").css("display", "none");
		var reg = /^1\d{10}$/; //验证以1开头的11手机号
		var $useridCon = $("#userId").val();
		if($useridCon == "") {

		} else if($useridCon !== "") {
			if(reg.test($useridCon)) {
				$("#userId_ok").css("display", "block")
				ok1 = true;
				console.log(ok1)
			} else {
				$("#userId_error").css("display", "block");
				ok1 = false;
				console.log(ok1)
			}
		}
	})

	$("#yanZhengCode_email").blur(function() {
		$("#yanZhengCode_email_ok").css("display", "none");
		$("#yanZhengCode_email_error").css('display', "none")
		var $yanZhengCode_emailCon = $("#yanZhengCode_email").val();
		$yanZhengCode_emailCon = $yanZhengCode_emailCon.toLowerCase();
		if($yanZhengCode_emailCon == "") {

		} else if($yanZhengCode_emailCon !== "") {
			if($yanZhengCode_emailCon == "y3p4") {
				$("#yanZhengCode_email_ok").css("display", "block")
				ok2 = true;
				console.log(ok2)
			} else {
				$("#yanZhengCode_email_error").css('display', "block")
				ok2 = false;
				console.log(ok2)
			}
		}

	})
	var _frag = false; //注意开关的使用方法
	$("#moblieCss").click(function() {
		ok3 = true; //模拟已输入手机验证码
		$("#yanZhengCode_error").css("display", "none");
		$("#yanZhengCode_ok").css("display", "block")

		if(!_frag) {
			_frag = true;
			var timer = 120;
			var setTimer = null;
			var arr = [];
			for(var i = 0; i < 62; i++) {
				if(i < 10) {
					arr[i] = i;
				} else if(i >= 10 && i < 36) {
					arr[i] = String.fromCharCode(i + 55)
				} else if(i >= 36 && i < 62) {
					arr[i] = String.fromCharCode(i + 61)
				}
			}
			var str = "";
			for(var j = 0; j < 4; j++) {
				str += arr[Math.floor(Math.random() * arr.length)];
			}
			$("#yanZhengCode").val(str);

			$("#moblieCss a").css({
				"background": '#f3f2f2',
				"color": "#d3ccce"
			})

			var fntimer = function() {
				setTimer = setInterval(function() {
					timer--;
					$("#moblieCss a").text(timer + "秒重新获取");
					if(timer == 0) {
						clearInterval(setTimer);
						$("#moblieCss a").css({
							"background": 'url(../img/load1101.png) no-repeat -57px -220px;',
							"color": "#666"
						})
						$("#moblieCss a").text("免费获取校验码");
						_frag = false;
					}
				}, 1000)
			}
			fntimer();
		}

	})
	$("#yanZhengCode").blur(function() {
		$("#yanZhengCode_error").css("display", "none");
		$("#yanZhengCode_ok").css("display", "none")
		if($("#yanZhengCode").val() == ""){
			//$("#yanZhengCode_error").css("display", "block");
		}else if($("#yanZhengCode").val() !== ""){
			$("#yanZhengCode_ok").css("display", "block")
		}
	})
	$("#passWord").blur(function() {
		$("#passWord_error").css('display', "none");
		$("#passWord_ok").css("display", 'none');
		var reg = /^[0-9a-zA-Z_#]{6,16}$/;
		var str = "";
		str = $("#passWord").val();
		if(str==""){
			
		}else if(str!=""){
			if(str.length < 6 || str.length > 16) {
				$("#passWord_error").css('display', "block");
				$("#passWord_error_content").text("请输入6-16密码");
				ok4 = false;
				console.log(ok4)
			} else if(reg.test(str)) {
				$("#passWord_ok").css("display", 'block');
				ok4 = true;
				console.log(ok4)
			}
		}
		
	})
	$("#repeatPassWord").blur(function() {
		$("#repeatPassWord_ok").css("display", "none");
		$("#repeatPassWord_error").css('display', "none");

		if($("#repeatPassWord").val() == $("#passWord").val() && $("#repeatPassWord").val() !== "") {
			$("#repeatPassWord_ok").css("display", "block");
			ok5 = true;
			console.log(ok5)
		} else {
			ok = false;
			console.log(ok5)
			if($("#repeatPassWord").val() == $("#passWord").val() && $("#repeatPassWord").val() == "") {} else {
				$("#repeatPassWord_error").css('display', "block");
			}
		}
	})
	$("#r_load_btn").click(function() {
		var arr = [ok1, ok2, ok3, ok4, ok5];
		console.log(arr)
		for(var i = 0; i < arr.length; i++) {
			if(!arr[i]){
				if(i == 0) {
					$("#userId_error").css("display", "block")
					break;
				}
				if(i == 1) {
					$("#yanZhengCode_email_error").css('display', "block")
					break;
				}
				if(i == 2) {
					$("#yanZhengCode_error").css("display", "block");
					$("#yanZhengCode_error_content").text("请输入验证码");
					break;
				}
				if(i == 3) {
					$("#passWord_error").css('display', "block");
					$("#passWord_error_content").text("请输入6-16密码");
					break;
				}
				if(i == 4) //如果后期有要求可以相应的添加
					$("#repeatPassWord_error").css('display', "block");
					break;
				}
			location.href="../index.html"
		}
	})
		var tmpJSON = {
			userId: $("#userId").val(),
			passWord: $("#passWord").val()
		}
		var tmpStr = JSON.stringify(tmpJSON);
		$.cookie($("#userId").val(), tmpStr, {
			expires: 30,
			path: "/"
		}); //let me see
})
