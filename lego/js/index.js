$(function () {
    // 二级菜单
    $("#lists li").hover(function () {
        $(this).children("div").show();
        $(this).find("p").addClass("active");
    }, function () {
        $(this).children("div").hide();
        $(this).find("p").removeClass("active");
    })
    //配置轮播的参数
    $("#bannerBig").tyslide({
        boxh: 430, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d8d8d8", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isNumber: true //是否需要数字
    });
    // 电子书选项卡
    $("#ebook>.left>.tab>ul>li").mouseover(function () {
        $("#ebook>.left>.tab>ul>li").css({
            "background": "white",
            "color": "black"
        });
        $(this).css({
            "background": "#ff6600",
            "color": "white"
        });
        let index = $(this).index();
        $("#ebook .content>div").hide();
        $("#ebook .content>div:eq(" + index + ")").stop().fadeIn("500");
    })
    $("#bannerSmall1").tyslide({
        boxh: 215, //盒子的高度
        w: 328, //盒子的宽度
        h: 215, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#bannerSmall2").tyslide({
        boxh: 215, //盒子的高度
        w: 328, //盒子的宽度
        h: 215, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#bannerSmall3").tyslide({
        boxh: 215, //盒子的高度
        w: 328, //盒子的宽度
        h: 215, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    // 电子书右边手风琴

    $("#ebook .right>ul>li").mouseover(function(){
        $(this).find(".spread").removeClass("hide");
        $(this).find(".style1").addClass("hide");
        $(this).siblings().find(".spread").addClass("hide");
        $(this).siblings().find(".style1").removeClass("hide");
    })
    // 服装轮播
    $("#clothsBanner1").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#clothsBanner2").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#clothsBanner3").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    // 服装选项卡
    $("#cloths .tab>ul>li").mouseover(function () {
        $("#cloths .tab>ul>li").css({
            "background": "white",
            "color": "black"
        });
        $(this).css({
            "background": "#ff6600",
            "color": "white"
        });
        let index = $(this).index();
        $("#cloths .content>div").hide();
        $("#cloths .content>div:eq(" + index + ")").stop().fadeIn("500");
    })
    // 户外选项卡
    $("#sports .tab>ul>li").mouseover(function () {
        $("#sports .tab>ul>li").css({
            "background": "white",
            "color": "black"
        });
        $(this).css({
            "background": "#ff6600",
            "color": "white"
        });
        let index = $(this).index();
        $("#sports .content>div").hide();
        $("#sports .content>div:eq(" + index + ")").fadeIn("500");
    })
    // 户外运动轮播
    $("#sportsBanner1").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#sportsBanner2").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#sportsBanner3").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    // 童装选项卡
    $("#children .tab>ul>li").mouseover(function () {
        $("#children .tab>ul>li").css({
            "background": "white",
            "color": "black"
        });
        $(this).css({
            "background": "#ff6600",
            "color": "white"
        });
        let index = $(this).index();
        $("#children .content>div").hide();
        $("#children .content>div:eq(" + index + ")").stop().fadeIn("500");
    })
    // 童装轮播
    $("#childBanner1").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#childBanner2").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    $("#childBanner3").tyslide({
        boxh: 334, //盒子的高度
        w: 427, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 6, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        radius: 0, //控制按钮圆角度数
        controlsColor: "#fff", //普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f", //当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    // 推广商品
    // 选项卡
    $("#goods .tab>ul>li").mouseover(function () {
        $(this).addClass("bgff");
        $(this).siblings().removeClass("bgff");
        let index = $(this).index();
        // $("#goods .content>div").hide();
        // $("#goods .content>div:eq(" + index + ")").fadeIn("500");
        if(index==0){
            $("#goods .outBox").stop().animate({"left":"0"},500);
        }else if(index==1){
            $("#goods .outBox").stop().animate({"left":"-1186px"},500);            
        }
    })
    // hover效果
    $("#goods .product").hover(function(){
        $(this).toggleClass("bgchange");
    },function(){
        $(this).toggleClass("bgchange");
    })
    // 返回顶部
    $("#gototop img").click(function(){
        $("html").stop().animate({"scrollTop":"0"},300);
    })
    // 楼层导航栏
let arr =["#91d56e","#f55826","#bb9fee","#fe7594","#c2ed51","#ff6600","#bb9fee","#c2ed51"]
$("#floorNav>ul>li").hover(function(){
    // 替换颜色
    // 获取索引
    let index = $(this).index();
    // 替换颜色
    $(this).find("div,p").css("backgroundColor",arr[index]);

    // 让p标签显示
    $(this).find("p").stop(true).animate({"left":"40px"},300);
},function(){
    // 还原颜色
    $(this).find("div,p").css("backgroundColor","#f2f2f2");
     // 让p标签隐藏
     $(this).find("p").stop(true).animate({"left":"0px"},300);
})
// 楼层跳转事件
$("#floorNav>ul>li:not(:last-child)").click(function(){
    // 获取索引
    let index = $(this).index();
    // 获取当前元素的纵坐标
    let top =  $(".navfloor").eq(index).offset().top;
    // 设置滚动条高度
    $("html,body").stop(true).animate({"scrollTop":top},1000);
})
$("#floorNav>ul>li:last-child").click(function(){
    $("html,body").stop(true).animate({"scrollTop":"0px"},1000);
})
// 领券中心
$("#card .ticket").hover(function(){
    $(this).find(".two").stop().animate({"right":"39px"},300);
},function(){
    $(this).find(".two").stop().animate({"right":"-100px"},300);    
})
})
// 领券中心-购物车
// $("#card .buybox").click(function(){
//     location.href = "../buybox.html";
// })
// 副搜索框
$(window).scroll(function(){
    let top=$("html,body").scrollTop();    
    if(top<700){
        $("#searchTwo").stop(true).slideUp(500);
    }else{
        $("#searchTwo").stop(true).slideDown(500);
    }
    
})