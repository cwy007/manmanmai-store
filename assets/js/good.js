/**
 * @描述：产品详情页JS文件
 * @作者：彭建红
 * @时间：2015-11-27 13:55 pm
 * @版本：beta 1.0
 */
 $(function(){
 	/* PJH 1127 begin 排行榜Tab切换效果部分 */
 	var rankingList = $("#rankingList");
 	rankingList.find(".tabs-nav li").hover(function(){
 		$(this).addClass("selected").siblings().removeClass("selected");
 		$(this).parent().parent().find(".tabs-panel li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
 	});
 	/* PJH 1127 end 排行榜Tab切换效果部分 */
 	
 	/* PJH 1218 begin 点击对应的产品详情、评价等导航上展示对应的面板 */
 	$("#introduce-info > .right-box > .tabs-nav > ul > li").click(function(){
 		$(this).addClass("selected").siblings().removeClass("selected");
 		$(this).parent().parent().parent().find("> .tabs-panel > li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
 	});
 	/* PJH 1218 end 点击对应的产品详情、评价等导航上展示对应的面板 */
 	/* PJH 1218 begin 点击评论Tab展示对应的面板 */
 	$("#comments > .comment-list > .tabs-nav > ul > li").click(function(){
 		$(this).addClass("selected").siblings().removeClass("selected");
 		$(this).parent().parent().parent().find("> .tabs-panel > li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
 	});
 	/* PJH 1218 end 点击评论Tab展示对应的面板 */
 });