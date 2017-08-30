/**
 * @描述：购物车页面的JS文件
 * @作者：彭建红
 * @时间：2016-01-15 14:15 pm
 * @版本：beta 1.0
 */

$(function(){
 	$(".ncc-receipt-info .consignee-info .add-list ul li > input").click(function(){
 		var number = $(this).val();
 		if(number == 0){
 			$(".ncc-receipt-info .consignee-info .add-list .add-addr").removeClass("hide").addClass("show");
 		}else{
 			$(".ncc-receipt-info .consignee-info .add-list .add-addr").removeClass("show").addClass("hide");
 		}
 	});
});

/**
 * PJH 2016-01-15 begin 点击修改收货人信息的链接出现的效果 
 */
function dealConsignee(){
 	var opt = $(".ncc-receipt-info .consignee-info .add-list");
 	var status = opt.attr("title");
 	if(status == "hide"){
 		opt.removeClass("hide").addClass("show");
 		opt.attr("title","show");
 		$(".ncc-receipt-info .consignee-info .title a").removeClass("show-inline").addClass("hide");
 		$(".ncc-receipt-info .consignee-info .info").removeClass("show").addClass("hide");
 		$(".ncc-receipt-info .consignee-info").css("border","2px solid #ff9000");
 	}
}
/* PJH 2016-01-15 end 点击修改收货人信息的链接出现的效果 */

/**
 * PJH 2016-01-15 begin 保存收货人信息 
 */
function saveConsigneeInfo(){
	/* 保存收货人信息 */
	console.info("send");

	var opt = $(".ncc-receipt-info .consignee-info .add-list");
	opt.removeClass("show").addClass("hide");
	opt.attr("title","hide");
	$(".ncc-receipt-info .consignee-info .title a").removeClass("hide").addClass("show-inline");
	$(".ncc-receipt-info .consignee-info .info").removeClass("hide").addClass("show");
	$(".ncc-receipt-info .consignee-info").css("border","none").css("border-bottom","1px solid #f0f0f0");
}
/* PJH 2016-01-15 end 保存收货人信息 */

/**
 * PJH 2016-01-15 begin 点击修改支付方式的链接出现的效果 
 */
function dealPayment(){
 	var opt = $(".ncc-receipt-info .payment-info .payment-list");
 	var status = opt.attr("title");
 	if(status == "hide"){
 		opt.removeClass("hide").addClass("show");
 		opt.attr("title","show");
 		$(".ncc-receipt-info .payment-info .title a").removeClass("show-inline").addClass("hide");
 		$(".ncc-receipt-info .payment-info .info").removeClass("show").addClass("hide");
 		$(".ncc-receipt-info .payment-info").css("border","2px solid #ff9000");
 	}
}
/* PJH 2016-01-15 end 点击修改支付方式的链接出现的效果 */

/**
 * PJH 2016-01-15 begin 保存支付方式
 */
function savePayment(){
	/* 保存支付方式 */
	console.info("send");

	var opt = $(".ncc-receipt-info .payment-info .payment-list");
	opt.removeClass("show").addClass("hide");
	opt.attr("title","hide");
	$(".ncc-receipt-info .payment-info .title a").removeClass("hide").addClass("show-inline");
	$(".ncc-receipt-info .payment-info .info").removeClass("hide").addClass("show");
	$(".ncc-receipt-info .payment-info").css("border","none").css("border-bottom","1px solid #f0f0f0");
}
/* PJH 2016-01-15 end 保存支付方式 */

/**
 * PJH 2016-01-15 begin 点击修改支付方式的链接出现的效果 
 */
function dealInvoice(){
 	var opt = $(".ncc-receipt-info .invoice-info .invoice-list");
 	var status = opt.attr("title");
 	if(status == "hide"){
 		opt.removeClass("hide").addClass("show");
 		opt.attr("title","show");
 		$(".ncc-receipt-info .invoice-info .title a").removeClass("show-inline").addClass("hide");
 		$(".ncc-receipt-info .invoice-info .info").removeClass("show").addClass("hide");
 		$(".ncc-receipt-info .invoice-info").css("border","2px solid #ff9000");
 	}
}
/* PJH 2016-01-15 end 点击修改支付方式的链接出现的效果 */

/**
 * PJH 2016-01-15 begin 保存支付方式
 */
function saveInvoice(){
	/* 保存支付方式 */
	console.info("send");

	var opt = $(".ncc-receipt-info .invoice-info .invoice-list");
	opt.removeClass("show").addClass("hide");
	opt.attr("title","hide");
	$(".ncc-receipt-info .invoice-info .title a").removeClass("hide").addClass("show-inline");
	$(".ncc-receipt-info .invoice-info .info").removeClass("hide").addClass("show");
	$(".ncc-receipt-info .invoice-info").css("border","none").css("border-bottom","1px solid #f0f0f0");
}
/* PJH 2016-01-15 end 保存支付方式 */