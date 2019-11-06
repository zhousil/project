$(function(){
    $("#main .card .cardContent1").hover(function(){
        $(this).find("img:first-child").stop(true).animate({"left":"0"},300);
        $("#main .card .cardContent1 img:last-child").stop(true).fadeIn(300);        
    },function(){
        $(this).find("img:first-child").stop(true).animate({"left":"76px"},300);
        $("#main .card .cardContent1 img:last-child").stop(true).fadeOut(300);                
    })
    $("#main .cardTitle li").mouseover(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        let index = $(this).index();
        $("#main .cardContent>div").eq(index).fadeIn();   
        $("#main .cardContent>div").eq(index).siblings().hide();   
    })
    // 正则判断格式
    $("#main .cardContent .cardContent2 input").blur(function(){
        let val = $(this).val();
        let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        let res=reg.test(val);
        if(res){
            $(this).siblings(".alert").html("格式正确！" )
            $(this).siblings(".alert").css("color","green");          
        }else{
            $(this).siblings(".alert").html("格式错误！" )  
            $(this).siblings(".alert").css("color","red");                               
        }
    })
    // 输入后x才显示出来
    $("#main .cardContent .cardContent2 input").keyup(function(){
        let val = $(this).val();
        if(val.length==0){
            $(this).next().hide();
        }else{
            $(this).next().show();            
        }
    })
    // 点击x清空内容
    $("#main .cardContent .cardContent2 .delete").click(function(){
        $(this).prev().prop("value","");
    })
})