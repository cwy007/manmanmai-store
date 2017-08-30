/**
 * @描述：首页JS文件
 * @作者：彭建红
 * @时间：2015-11-06 8:39 am
 * @版本：beta 1.0
 */
 $(function(){
	/*PJh 1103 begin 顶部大图轮播部分 */
	var begin_num = 0;
	var banner_time_length = 3000;
	var banner_opt_fore = $("#banner > .banner-fore > ul > li");
	var banner_opt_bg = $("#banner > .banner-bg > ul > li");
	var tempStr = "";
	/* 循环动态生成图片轮播的序号 */
	if(banner_opt_fore != null && banner_opt_fore.length > 0){
		for(var i=0;i<banner_opt_fore.length;i++){
			if(i == 0){
				tempStr += "<li class='selected'>" + (i+1) + "</li>";
			}else{
				tempStr += "<li>" + (i+1) + "</li>";
			}
		}
		$("#banner > .banner-num").append(tempStr);
		$("#banner > .banner-num li").mouseenter(function(){
			updateBannerSlider($(this).index());
		});
		tempStr = "";
	}
	var banner_timer = setInterval(function(){
		if(begin_num != banner_opt_fore.length - 1){
			updateBannerSlider(begin_num);
			begin_num++;
		}else{
			updateBannerSlider(begin_num);
			begin_num = 0;
		}
	},banner_time_length);
	$("#banner > .banner-fore").mouseenter(function(){
		clearInterval(banner_timer);
	});
	$("#banner > .banner-fore").mouseleave(function(){
		banner_timer = setInterval(function(){
			if(begin_num != banner_opt_fore.length - 1){
				updateBannerSlider(begin_num);
				begin_num++;
			}else{
				updateBannerSlider(begin_num);
				begin_num = 0;
			}
		},banner_time_length);
	});
	function updateBannerSlider(slider_num){
		$("#banner > .banner-num li").removeClass("selected");
		$("#banner > .banner-num li").eq(slider_num).addClass("selected");
		banner_opt_bg.removeClass("selected");
		banner_opt_bg.eq(slider_num).addClass("selected");
		banner_opt_fore.removeClass("selected");
		banner_opt_fore.eq(slider_num).addClass("selected");
	}
	/*PJh 1103 end 顶部大图轮播部分 */
	/*PJh 1103 begin 限时抢购轮播部分 */
	var time_limit_begin_num = 0;
	var time_limit_time_length = 2000;
	var banner_opt_img = $("#timil-limit-shopping > .slider-img > li");
	var banner_opt_desc = $("#timil-limit-shopping > .slider-desc > li");
	var time_limit_timer = setInterval(function(){
		if(time_limit_begin_num != banner_opt_img.length - 1){
			updateTimeLimitSlider(time_limit_begin_num);
			time_limit_begin_num++;
		}else{
			updateTimeLimitSlider(time_limit_begin_num);
			time_limit_begin_num = 0;
		}
	},time_limit_time_length);
	$("#timil-limit-shopping > .prev").click(function(){
		var now_index = banner_opt_img.parent().find(".selected").index();
		if(now_index == 0){
			time_limit_begin_num = banner_opt_img.length - 1;
			updateTimeLimitSlider(time_limit_begin_num);
		}else{
			time_limit_begin_num = now_index - 1;
			updateTimeLimitSlider(time_limit_begin_num);
		}
	});
	$("#timil-limit-shopping > .next").click(function(){
		var now_index = banner_opt_img.parent().find(".selected").index();
		if(now_index == banner_opt_img.length - 1){
			time_limit_begin_num = 0;
			updateTimeLimitSlider(time_limit_begin_num);
		}else{
			time_limit_begin_num = now_index + 1;
			updateTimeLimitSlider(time_limit_begin_num);
		}
	});
	$("#timil-limit-shopping").mouseenter(function(){
		clearInterval(time_limit_timer);
	});
	$("#timil-limit-shopping").mouseleave(function(){
		time_limit_timer = setInterval(function(){
			if(time_limit_begin_num != banner_opt_img.length - 1){
				updateTimeLimitSlider(time_limit_begin_num);
				time_limit_begin_num++;
			}else{
				updateTimeLimitSlider(time_limit_begin_num);
				time_limit_begin_num = 0;
			}
		},time_limit_time_length);
	});
	function updateTimeLimitSlider(slider_num){
		$("#timil-limit-shopping > .slider-img li").removeClass("selected");
		$("#timil-limit-shopping > .slider-img li").eq(slider_num).addClass("selected");
		$("#timil-limit-shopping > .slider-desc li").removeClass("selected");
		$("#timil-limit-shopping > .slider-desc li").eq(slider_num).addClass("selected");
	}
	/*PJh 1103 end 限时抢购轮播部分 */
	/*PJh 1103 begin Bannber部分Tab切换部分 */
	var tab_nav = $("#banner .banner-right .bottom-tabs .tab-nav > li");
	var tab_panel = $("#banner .banner-right .bottom-tabs .tab-panel > li");
	var top_tabs_time_length = 5000;
	var top_tabs_begin_num = 0;
	tab_nav.mouseenter(function(){
		tab_nav.removeClass("selected");
		$(this).addClass("selected");
		tab_panel.removeClass("selected");
		tab_panel.eq($(this).index()).addClass("selected");
	});
	var top_timer = setInterval(function(){
		if(top_tabs_begin_num != tab_nav.length - 1){
			top_tabs_begin_num++;
		}else{
			top_tabs_begin_num = 0;
		}
		tab_nav.removeClass("selected");
		tab_nav.eq(top_tabs_begin_num).addClass("selected");
		tab_panel.removeClass("selected");
		tab_panel.eq(top_tabs_begin_num).addClass("selected");
	},top_tabs_time_length);
	$("#banner .banner-right .bottom-tabs").mouseenter(function(){
		clearInterval(top_timer);
	});
	$("#banner .banner-right .bottom-tabs").mouseleave(function(){
		top_timer = setInterval(function(){
			if(top_tabs_begin_num != tab_nav.length - 1){
				top_tabs_begin_num++;
			}else{
				top_tabs_begin_num = 0;
			}
			tab_nav.removeClass("selected");
			tab_nav.eq(top_tabs_begin_num).addClass("selected");
			tab_panel.removeClass("selected");
			tab_panel.eq(top_tabs_begin_num).addClass("selected");
		},top_tabs_time_length);
	});
	/*PJH 1103 end Bannber部分Tab切换部分 */

	/*PJH 1103 begin 首页静态滚动推荐商品部分*/
	var recommend_static_scroll_opt = $("#recommend-static-scroll");
	var recommend_static_scroll_offset = 990;
	recommend_static_scroll_opt.mouseenter(function(){$(this).find(".prev").show();$(this).find(".next").show();});
	$("#recommend-static-scroll .prev").click(function(){
		var temp_offset = parseInt(recommend_static_scroll_opt.find(">ul").css("left"));
		var temp_width = recommend_static_scroll_opt.find(">ul >li").length * recommend_static_scroll_offset;
		if(temp_width + temp_offset > recommend_static_scroll_offset){
			recommend_static_scroll_opt.find(">ul").animate({left:temp_offset - recommend_static_scroll_offset},"slow");
		}else{
			alert("右边已没有隐藏数据");
		}
	});
	$("#recommend-static-scroll .next").click(function(){
		var temp_offset = parseInt(recommend_static_scroll_opt.find(">ul").css("left"));
		var temp_width = recommend_static_scroll_opt.find(">ul >li").length * recommend_static_scroll_offset;
		if(temp_offset < 0){
			recommend_static_scroll_opt.find(">ul").animate({left:temp_offset + recommend_static_scroll_offset},"slow");
		}else{
			alert("左边已没有隐藏数据");
		}
	});
	/*PJH 1103 end 首页静态滚动推荐商品部分*/

	/*PJH 1104 begin 鼠标移动到div上面推荐商品的图片移动 */
	$("#big-recommend .small-picture .up").mouseenter(function(){
		$(this).find("img").animate({left:20},"slow");
	});
	$("#big-recommend .small-picture .up").mouseleave(function(){
		$(this).find("img").animate({left:40},"slow");
	});
	$("#big-recommend .small-picture .down").mouseenter(function(){
		$(this).find("img").animate({left:20},"slow");
	});
	$("#big-recommend .small-picture .down").mouseleave(function(){
		$(this).find("img").animate({left:40},"slow");
	});
	/*PJH 1104 end 鼠标移动到div上面推荐商品的图片移动 */

	/*PJH 1112 begin Tab切换推荐部分、可用作切换展示新品、精品、热销等*/
	var recommend_tabs_nav_opt = $("#recommend-tabs > .tab-nav > li");
	var recommend_tabs_panel_opt = $("#recommend-tabs > .tab-panel > li");
	recommend_tabs_nav_opt.mouseenter(function(){
		recommend_tabs_nav_opt.removeClass("selected");
		$(this).addClass("selected");
		recommend_tabs_panel_opt.removeClass("selected");
		recommend_tabs_panel_opt.eq($(this).index()).addClass("selected");
	});
	/*PJH 1112 end Tab切换推荐部分、可用作切换展示新品、精品、热销等*/
	/*PJH 1112 begin 限时折扣图片轮播*/
	var time_limit_discount_opt = $("#time-limit-discount > ul > li");
	var time_limit_discount_time_length = 3000;
	$("#time-limit-discount .prev").click(function(){
		var temp_num = $("#time-limit-discount > ul > li.selected").index();
		if(temp_num == 0){
			temp_num = time_limit_discount_opt.length - 1;
		}else{
			temp_num--;
		}
		time_limit_discount_opt.removeClass("selected");
		time_limit_discount_opt.eq(temp_num).addClass("selected");
	});
	$("#time-limit-discount .next").click(function(){
		var temp_num = $("#time-limit-discount > ul > li.selected").index();
		if(temp_num == time_limit_discount_opt.length - 1){
			temp_num = 0;
		}else{
			temp_num++;
		}
		time_limit_discount_opt.removeClass("selected");
		time_limit_discount_opt.eq(temp_num).addClass("selected");
	});
	var time_limit_discount_timer = setInterval(function(){
		var temp_num = $("#time-limit-discount > ul > li.selected").index();
		if(temp_num == time_limit_discount_opt.length - 1){
			temp_num = 0;
		}else{
			temp_num++;
		}
		time_limit_discount_opt.removeClass("selected");
		time_limit_discount_opt.eq(temp_num).addClass("selected");
	},time_limit_discount_time_length);
	$("#time-limit-discount").mouseenter(function(){
		clearInterval(time_limit_discount_timer);
	});
	$("#time-limit-discount").mouseleave(function(){
		var temp_num = $("#time-limit-discount > ul > li.selected").index();
		if(temp_num == time_limit_discount_opt.length - 1){
			temp_num = 0;
		}else{
			temp_num++;
		}
		time_limit_discount_opt.removeClass("selected");
		time_limit_discount_opt.eq(temp_num).addClass("selected");
	});
	/*PJH 1112 end 限时折扣图片轮播*/

	/*PJH 1112 begin 产品列表Tab切换部分*/
	var product_list_opt = $(".product-list .tab-nav ul li");
	product_list_opt.mouseover(function(){
		$(this).parent().find(">li").removeClass("selected");
		$(this).addClass("selected");
		$(this).parent().parent().parent().find(">.tab-panel").removeClass("selected");
		$(this).parent().parent().parent().find(">.tab-panel").eq($(this).index()).addClass("selected");
	});
	/*PJH 1112 end 产品列表Tab切换部分*/
	/*PJH 1112 begin 产品列表块鼠标移动到上面动画效果*/
	$(".prompt-block").mouseenter(function(){
		$(this).find(">a >img").animate({"left":"35px"},1000);
	});
	$(".prompt-block").mouseleave(function(){
		$(this).find(">a >img").animate({"left":"50px"},1000);
	});
	/*PJH 1112 end 产品列表块鼠标移动到上面动画效果*/

	/*PJH 1115 begin 鼠标移动到楼层定位的文字上面底部图片显示 */
	$("#float-floor > ul > li").mouseenter(function(){$(this).find(">.bd").hide();$(this).find(">.hd").show();});
	$("#float-floor > ul > li").mouseleave(function(){$(this).find(">.hd").hide();$(this).find(">.bd").show();});
	/*PJH 1115 end 鼠标移动到楼层定位的文字上面底部图片显示 */
	/*PJH 1115 begin 楼层位置链接点击跳转到对应的分类展示 */
	$("#float-floor > ul > li > .hd > a").click(function(){
		$("html,body").animate({scrollTop: $("#" + $(this).attr("title")).offset().top},1000);
		$(this).parent().hide();
		$(this).parent().parent().find(">.hd").show();
	});
	/*PJH 1115 end 楼层位置链接点击跳转到对应的分类展示 */
	/*PJH 1115 end 当滚动到指定的楼层，指定楼层的背景展示 */
	$(window).scroll(function() {
		var offset_top = $(window).scrollTop();
		offset_top > 900 ? $("#float-floor").show() : $("#float-floor").hide();
		var floor1_offset_top = $("#floor1").offset().top;
		var floor2_offset_top = $("#floor2").offset().top;
		var floor3_offset_top = $("#floor3").offset().top;
		var floor4_offset_top = $("#floor4").offset().top;
		var floor5_offset_top = $("#floor5").offset().top;
		var floor6_offset_top = $("#floor6").offset().top;
		var floor7_offset_top = $("#floor7").offset().top;
		var floor8_offset_top = $("#floor8").offset().top;
		var floor9_offset_top = $("#floor9").offset().top;
		var floor10_offset_top = $("#floor10").offset().top;
		if(offset_top <= floor1_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();	
			$("#float-floor > ul > li").eq(0).find(".bd").hide();
			$("#float-floor > ul > li").eq(0).find(".hd").addClass("selected");
		}else if(floor1_offset_top < offset_top && offset_top <= floor2_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(1).find(".bd").hide();
			$("#float-floor > ul > li").eq(1).find(".hd").addClass("selected");
		}else if(floor2_offset_top < offset_top && offset_top <= floor3_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(2).find(".bd").hide();
			$("#float-floor > ul > li").eq(2).find(".hd").addClass("selected");
		}else if(floor3_offset_top < offset_top && offset_top <= floor4_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(3).find(".bd").hide();
			$("#float-floor > ul > li").eq(3).find(".hd").addClass("selected");
		}else if(floor4_offset_top < offset_top && offset_top <= floor5_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(4).find(".bd").hide();
			$("#float-floor > ul > li").eq(4).find(".hd").addClass("selected");
		}else if(floor5_offset_top < offset_top && offset_top <= floor6_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(5).find(".bd").hide();
			$("#float-floor > ul > li").eq(5).find(".hd").addClass("selected");
		}else if(floor6_offset_top < offset_top && offset_top <= floor7_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(6).find(".bd").hide();
			$("#float-floor > ul > li").eq(6).find(".hd").addClass("selected");
		}else if(floor7_offset_top < offset_top && offset_top <= floor8_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(7).find(".bd").hide();
			$("#float-floor > ul > li").eq(7).find(".hd").addClass("selected");
		}else if(floor8_offset_top < offset_top && offset_top <= floor9_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(8).find(".bd").hide();
			$("#float-floor > ul > li").eq(8).find(".hd").addClass("selected");
		}else if(floor9_offset_top < offset_top && offset_top <= floor10_offset_top){
			$("#float-floor > ul > li > .hd").removeClass("selected");
			$("#float-floor > ul > li > .bd").show();
			$("#float-floor > ul > li").eq(9).find(".bd").hide();
			$("#float-floor > ul > li").eq(9).find(".hd").addClass("selected");
		}
		/*1594 2058 2523 2989 3453 3919 4384 4849 5314 5778*/
	});
	/*PJH 1115 end 当滚动到指定的楼层，指定楼层的背景展示 */
});