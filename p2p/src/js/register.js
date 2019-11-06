var inputs = document.querySelectorAll("form .form-control");
var text = document.querySelectorAll("form .text");
var x = document.querySelectorAll("form .glyphicon-remove");
var next = document.querySelector("#next");
    // for (var a = 0; a < inputs.length; a++) {
        var result ={"username":false,"pwd":false,"pwd2":false};     
        // inputs[a].index=a;        
        inputs[0].onchange = function () {
            // var index=this.index;
            var val = this.value;
            var reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
            var res = reg.test(val);
            if (res) {
                text[0].innerHTML = "格式正确";
                text[0].style.color = "green";
                result.username=true;
            } else {
                text[0].innerHTML = "格式错误";
                text[0].style.color = "red";
                result.username=false;
            }
            if(val==""){
                text[0].innerHTML = "此项不能为空";
                text[0].style.color = "red";
                result.username=false;
            }
        }
        inputs[1].onchange = function () {
            // var index=this.index;
            var val = this.value;
            var reg = /^[a-zA-Z]\w{5,17}$/;
            var res = reg.test(val);
            if (res) {
                text[1].innerHTML = "格式正确";
                text[1].style.color = "green";
                result.pwd=true;                
            } else {
                text[1].innerHTML = "格式错误";
                text[1].style.color = "red";
                result.pwd=false;
            }
            if(val==""){
                text[1].innerHTML = "此项不能为空";
                text[1].style.color = "red";
            }
        }
        inputs[2].onchange=function(){
            var val = this.value;
            var val1=inputs[1].value;
            if(val==val1){
                text[2].innerHTML = "密码一致";
                text[2].style.color = "green";
                result.pwd2=true;                 
            }else{
                text[2].innerHTML = "两次密码不一致";
                text[2].style.color = "red";  
                result.pwd2=false; 
            }
        }

        // next.onclick=function(){
        //     for(var i in result){
        //         if(result[i]==false){
        //             alert(i+"有误");     
        //             return false;
        //             // $("."+result[i]).css("border","1px solid #f00");
        //         }   
        //     }
        // }
        inputs[0].onkeyup = function () {
                x[0].classList.remove("hide");
                x[0].onclick=function(){
                        inputs[0].value = "";
                        this.classList.add("hide");
                        text[0].innerHTML='';
                } 
                if (this.value.length == 0) {
                    x[0].classList.add("hide");
                    text[0].innerHTML='';     
                }
        }
        inputs[1].onkeyup = function () {
            x[1].classList.remove("hide");
            x[1].onclick=function(){
                    inputs[1].value = "";
                    this.classList.add("hide");
                    text[1].innerHTML='';
            } 
            if (this.value.length == 0) {
                x[1].classList.add("hide");
                text[1].innerHTML='';     
            }
    };
    
    // }   