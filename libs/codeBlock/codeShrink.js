// build time:Fri Feb 28 2020 09:01:04 GMT+0800 (China Standard Time)
$(function(){var e=$('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');$(".code-area").prepend(e);$(".code-expand").on("click",function(){if($(this).parent().hasClass("code-closed")){$(this).siblings("pre").find("code").show();$(this).parent().removeClass("code-closed")}else{$(this).siblings("pre").find("code").hide();$(this).parent().addClass("code-closed")}})});
//rebuild by neat 