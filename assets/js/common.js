/**
 * @描述：首页JS文件
 * @作者：彭建红
 * @时间：2015-11-17 15:56 pm
 * @版本：beta 1.0
 */
 $(function(){
 	/* PJH 1105 begin 顶部效果JS*/
	$("#tr-site-nav > li").mouseenter(function(){$(this).find(".top-nav-bg").show();});
	$("#tr-site-nav > li").mouseleave(function(){$(this).find(".top-nav-bg").hide();});
	$("#tr-site-nav > li .top-nav-bg").mouseenter(function(){$(this).show();});
	$("#tr-site-nav > li .top-nav-bg").mouseleave(function(){$(this).hide();});
	/* PJH 1105 end 顶部效果JS*/

	/* PJH 1105 begin 鼠标移动到导航菜单上之后效果*/
	$("#categorys .site-list > li").mouseenter(function(){$(this).find(".bg").show();});
	$("#categorys .site-list > li").mouseleave(function(){$(this).find(".bg").hide();});
	/* PJH 1105 end 鼠标移动到导航菜单上之后效果*/

	/* PJH 1105 begin 鼠标移动到搜索选择切换块之后效果*/
	$("#top-search .search-form > .header-search-tab").mouseenter(function(){
		var temp_number = $(this).find("ul li").length;
		$(this).css("height",temp_number * 35).css("border-bottom","1px solid #eee");
	});
	$("#top-search .search-form > .header-search-tab").mouseleave(function(){$(this).css("height",35);});
	$("#top-search .search-form > .header-search-tab").mouseleave(function(){$(this).find(".bg").hide();});
	/* PJH 1105 end 鼠标移动到搜索选择切换块之后效果*/

	/*PJH 1113 begin 鼠标移动到购物车块部弹出购物车下拉*/
	$("#top-cart .cart-bd").mouseenter(function(){$(this).css("background-color","#FFF").css("border-bottom","none");$("#top-cart .cart-hd").show();});
	$("#top-cart .cart-bd").mouseleave(function(){$(this).css("background-color","#F9F9F9").css("border-bottom","1px solid #ddd");$("#top-cart .cart-hd").hide();});
	$("#top-cart .cart-hd").mouseenter(function(){$("#top-cart .cart-bd").css("background-color","#FFF").css("border-bottom","none");$(this).show();});
	$("#top-cart .cart-hd").mouseleave(function(){$("#top-cart .cart-bd").css("background-color","#F9F9F9").css("border-bottom","1px solid #ddd");$(this).hide();});
	/*PJH 1113 end 鼠标移动到购物车块部弹出购物车下拉*/

	/*PJH 1117 begin 鼠标移动到分类导航名称上面弹出对应的分类菜单下拉*/
	$("#categorys > dt").mouseenter(function(){$(this).parent().find("> .site-list").show();});
	$("#categorys > dt").mouseleave(function(){$(this).parent().find("> .site-list").hide();});
	$("#categorys > .site-list").mouseenter(function(){$(this).show();});
	$("#categorys > .site-list").mouseleave(function(){$(this).hide();});
	/*PJH 1117 end 鼠标移动到分类导航名称上面弹出对应的分类菜单下拉*/
 });