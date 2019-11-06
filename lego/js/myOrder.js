$(function(){
    total()  
    // 导航栏选项卡
    $("#nav ul li").mouseover(function(){
        $(this).addClass("bgcff");
        $(this).siblings().removeClass("bgcff");
        $(this).find("a").addClass("colfff");
        $(this).siblings().find("a").removeClass("colfff");
    })
    // 待付款待收货的数量
    let num1=num2=num3=0;
    $("#main .right .orderList .pay").each(function(){
        if($(this).html()=="待付款"){        
            num1++;         
            $("#main .right .listTitle ul .tab1 span").html(num1);
        }else if($(this).html()=="待收货"){
            num2++;         
            $("#main .right .listTitle ul .tab2 span").html(num2); 
        }else if($(this).html()=="待评价"){
            num3++;
            $("#main .right .listTitle ul .tab3 span").html(num3);             
        }
    })
    // 全选和反选
    $("#main .right .allCheck").click(function(){
        let val = $(this).prop("checked");
        $("#main .right input").prop("checked",val);
        total()
    })
    // 全选与单选
    $("#main .right .orderList li>input").click(function(){
    let flag=true;        
        $("#main .right .orderList li>input").each(function(){
            if(!$(this).prop("checked")){
                flag=false;
            }
        })
        if(flag){
            $("#main .right .allCheck").prop("checked",true);
        }
        else{
            $("#main .right .allCheck").prop("checked",false);
        }
        total()
    })
    // 单个商品删除
    $("#main .right .singleDelete").click(function(){
        $(this).parents("li").remove();
        total()
    })
    // 删除选中商品
    $("#main .right .delete").click(function(){
        $("#main .right .orderList ul li>input").each(function(){
           if($(this).prop("checked")==true){
               $(this).parent().remove()
           } 
        })
        total()
    })
    // 显示总商品数
    function total(){
        let count = 0;
        let allPrice = 0;
        $("#main .right .orderList ul li").each(function(){
            if($(this).find("input").prop("checked")==true){
                count++;
            let price = parseInt($(this).find(".price").html());
                allPrice+=price;                
            }  
         })
         $("#main .right .totalPrice .proNum").html(`&nbsp;&nbsp;${count}&nbsp;&nbsp;`);  
         $("#main .right .totalPrice .price").html(allPrice.toFixed(2));  
    };     
})