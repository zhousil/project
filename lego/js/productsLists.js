$(function () {
    // 二级菜单
    $("#lists li").hover(function () {
        $(this).children("div").show();
        $(this).find("p").addClass("active");
    }, function () {
        $(this).children("div").hide();
        $(this).find("p").removeClass("active");
    })
    // 主体部分
    //配置轮播的参数
    $("#bannerBig").tyslide({
        boxh: 430, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 4, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 22, //控制按钮高度
        radius: 14, //控制按钮圆角度数
        controlsColor: "#d8d8d8", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isNumber: true //是否需要数字
    });
    $("#header>div>img,#lists").hover(function () {
        $("#lists").stop().slideDown(400);
    }, function () {
        $("#lists").stop().slideUp(400);
    })
    // 右侧手风琴
    $("#main .right li").mouseover(function () {
        $(this).find(".spread").show();
        $(this).find(".style1").hide();
        $(this).siblings().find(".spread").hide()
        $(this).siblings().find(".style1").show()
    })
    // 图书折扣区hover
    $("#discount .content .product").hover(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).find(".oldPrice").show();
    }, function () {
        $("#guess .content .product").removeClass("active");
        $(this).find(".oldPrice").hide();
    })
    // 右侧手风琴
    $("#newbook .right>ul>li").mouseover(function () {
        $(this).find(".spread").removeClass("hide");
        $(this).find(".style1").addClass("hide");
        $(this).siblings().find(".spread").addClass("hide");
        $(this).siblings().find(".style1").removeClass("hide");
    })
    // 猜你喜欢
    $("#like .tab>img").click(function () {
        if ($("#like .content .inBox2").css("display") == "none") {
            $("#like .content .inBox1").fadeOut();
            $("#like .content .inBox2").fadeIn();
        } else {
            $("#like .content .inBox1").fadeIn();
            $("#like .content .inBox2").fadeOut();
        }
    })
    // 独家提供
    // 选项卡注册事件
    let len = 0;
    $("#provide .tab ul li").mouseover(function () {
        clearInterval(time);    
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        len = index;        
        $("#provide .content .outBox").stop(true).animate({
            "left": -(index * 1184)
        }, 300);
        $("#provide .bottom li").eq(index).addClass("active").siblings().removeClass("active");
    })
    // 下方圆点注册事件
    $("#provide .bottom li").mouseover(function () {
        clearInterval(time);    
        $(this).addClass("active").siblings().removeClass("active");
        let index = $(this).index();
        len = index;
        $("#provide .content .outBox").stop(true).animate({
            "left": -(index * 1184)
        }, 300);
        $("#provide .tab ul li").eq(index).addClass("active").siblings().removeClass("active");
    })
    // 右边点击事件
    $("#provide .right").click(function () {
        len++;
        if (len <= 6) {
            $("#provide .content .outBox").stop(true).animate({
                "left": -(len * 1184)
            }, 300);
            $("#provide .bottom li").eq(len).addClass("active").siblings().removeClass("active");
            $("#provide .tab ul li").eq(len).addClass("active").siblings().removeClass("active"); 
        } else {
            len = 6;
            $("#provide .content .outBox").stop(true).animate({
                "left": -(len * 1184)
            }, 300);
        }
    })
    // 左边点击事件
    $("#provide .left").click(function () {
        len--;
        if (len>=0) {
            $("#provide .content .outBox").stop(true).animate({
                "left": -(len * 1184)
            }, 300);
            $("#provide .bottom li").eq(len).addClass("active").siblings().removeClass("active");
            $("#provide .tab ul li").eq(len).addClass("active").siblings().removeClass("active"); 
        } else {
            len = 0;
            $("#provide .content .outBox").stop(true).animate({
                "left": -(len * 1184)
            }, 300);
        }
    })

    let time = null;
    let num = 0;

    time = setInterval(function(){
        num++;
        if(num<=6){
            $("#provide .content .outBox").stop(true).animate({"left":-(num * 1184)},300)
            $("#provide .bottom li").eq(num).addClass("active").siblings().removeClass("active");
            $("#provide .tab ul li").eq(num).addClass("active").siblings().removeClass("active");   
        }else{
            num = 0;
            $("#provide .content .outBox").stop(true).animate({"left":-(num * 1184)},300) 
            $("#provide .bottom li").eq(num).addClass("active").siblings().removeClass("active");
            $("#provide .tab ul li").eq(num).addClass("active").siblings().removeClass("active");           
        }
    },3000)
})