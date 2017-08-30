/**
 * @描述：分类页JS文件
 * @作者：彭建红
 * @时间：2015-11-20 16:00 pm
 * @版本：beta 1.0
 */
 $(function(){
 	/* PJH 1105 begin 鼠标移动到品牌div上面显示后面对应的背景文字*/
 	$(".brand-list > .brand-box > ul > li").mouseenter(function(){$(this).find(".brand-img").hide();$(this).find(".brand-font").show();});
 	$(".brand-list > .brand-box > ul > li").mouseleave(function(){$(this).find(".brand-img").show();$(this).find(".brand-font").hide();});
 	/* PJH 1105 end 鼠标移动到品牌div上面显示后面对应的背景文字*/
 });