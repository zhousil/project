$(function () {
    // 进入页面第一件事是刷新数据
    reSet();
    // 猜你喜欢hover
    $("#guess .content .product").hover(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).find(".oldPrice").show();
    }, function () {
        $("#guess .content .product").removeClass("active");
        $(this).find(".oldPrice").hide();
    })
    // 购物车-全选
    $("#lists .allCheck").click(function () {
        let check = $(this).prop("checked");
        $("#lists input").prop("checked", check);
        reSet();
    })
    // 单选与全选的关系
    $("#lists .products .singleIn").click(function () {
        let flag = true;
        $("#lists .products .singleIn").each(function () {
            if (!$(this).prop("checked")) {
                flag = false;
            }
        })
        if (flag) {
            $("#lists .allCheck").prop("checked", true);
        } else {
            $("#lists .allCheck").prop("checked", false);
        }
        reSet();
    })
    // 加减数量
    $("#lists .products .add").click(function () {
        let num = parseInt($(this).prev().val());
        $(this).prev().val(num + 1);
        let single = parseInt($(this).parent().prev().html());
        $(this).parent().next().html((single * $(this).prev().val()).toFixed(2));
        reSet();
    })
    $("#lists .products .reduce").click(function () {
        let num = parseInt($(this).next().val());
        if (num > 1) {
            $(this).next().val(num - 1);
            let single = parseInt($(this).parent().prev().html());
            $(this).parent().next().html((single * $(this).next().val()).toFixed(2));
        }
        reSet();
    })
    // 保存上次的输入值
    let oldNum = "";
    $("#lists .products .number").focus(function () {
        oldNum = $(this).val();
    })
    // 手动输入数量计算小计
    $("#lists .products .number").blur(function () {
        let num = parseInt($(this).val());
        let single = parseInt($(this).parent().prev().html());
        if (num >= 1) {
            $(this).parent().next().html((num * single).toFixed(2));
            reSet();
        } else {
            num = oldNum;
            $(this).val(num);
        }
    })
    // 小计
    $("#lists .product1 .changeNum>.number").each(function () {
        $(this).parent(".changeNum").next().html(
            (parseInt($("#lists .product1 .singlePrice").html()) * parseInt($(this).val())).toFixed(2)
        )
    })
    // 删除按钮
    $("#lists .products .delete").click(function () {
        if (confirm("确认删除此商品？")) {
            $(this).parent().parent().remove();
        }
        reSet();
    })
    // 移到我的关注
    $("#lists .products .attention").click(function () {
        $(this).parent().parent().remove();
        reSet();
    })
    // 删除选中商品
    $("#lists .totalPrice .delete").click(function () {
        $("#lists .products>div>input").each(function () {

            if ($(this).prop("checked") == true) {
                $(this).parent().remove()
            }
        })
        reSet();
    })
    // 总价
    function reSet() {
        let allVal = 0,
            allPrice = 0;
        $("#lists .products>div").each(function () {
            let val = parseInt($(this).find(".number").val());
            let price = parseInt($(this).find(".littlePrice").html());
            if($(this).find(".singleIn").prop("checked")){
                allVal += val;            
                allPrice += price;
            }

        })
        $("#lists .totalPrice .proNum").html("&emsp;" + allVal + "&emsp;");
        $("#lists .totalPrice .price").html(parseInt(allPrice).toFixed(2));
    };
})