$(function(){
    randomCode();
    $("#main").validate({
        // 制定规则
        rules:{
            user:{
                required: true,
                rangelength:[6,12]
            },
            pwd:{
                isPwd:true,
            },
            pwd1:{
                equalTo:"#psw"
            }
        },
        // 设置报错
        messages:{
            user:{
                required:"该项为必填项",
                rangelength:"字符过短"

            },
            pwd:{
                isPwd:"密码错误"
            },
            pwd1:{
                equalTo:"两次密码不一致"
            }
        }
    })

    jQuery.validator.addMethod("isPwd", function(value, element) {    
        var postcode=/^[a-zA-Z]\w{5,17}$/;
        return this.optional(element) || (postcode.test(value));
    }, "密码不符合规则！");
    // 手机号码位数
    
    // 获取验证码倒计时
    let num = 60;
    $("#main .getCode .get").click(function(){
        $("#main .getCode .get").html('还剩60秒')        
        $(this).prop("disabled",true);
        $("button").css("cursor","default")        
        let time = setInterval(function(){
            num--; 
            $("#main .getCode .get").html(`还剩${num}秒`)
            if(num<1){
                clearInterval(time);
                $("#main .getCode .get").html("获取验证码")
                $("button").prop("disabled",false);                
                $("button").css("cursor","pointer")
                num=60;
            }
        },1000)
    })
    // 随机验证码
    $(".verifyCode .code").click(function(){
        randomCode();
    })
        // 验证输入的验证码
        $(".verifyCode .verify").blur(function(){            
            if($(this).val()!=$(".verifyCode .code").html()){
                $(".verifyCode .wrong").removeClass("hide");                
            }else{
                $(".verifyCode .wrong").addClass("hide");                
                
            }
        })
        // 封装随机验证码
        function randomCode(){
            let num = parseInt(Math.random()*9+1);
            var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
            var str = '';
            for(let i = 0 ; i < 4 ; i ++ ){
                str += arr[Math.floor(Math.random() * arr.length)];
            }
            $(".verifyCode .code").html(str);
        }
})