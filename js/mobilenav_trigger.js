// 移动端（窄屏幕）下菜单键的简易适配
// 没有技术含量（悲）

$("#topnav_menu").click(function(){
    $("#mobile_menu").css("display","flex");
    $("#mobile_menu_graybg").css("display","block");
})

$("#mobile_menu_graybg").click(function(){
    $("#mobile_menu").css("display","none");
    $("#mobile_menu_graybg").css("display","none");
})