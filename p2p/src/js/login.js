var as = document.querySelectorAll(".card>.title>a");
var inputs = document.querySelectorAll("form input");
var text = document.querySelectorAll("form .text");
var x = document.querySelectorAll("form .glyphicon-remove");
// 标题切换
(function () {
    for (var i = 0; i < as.length; i++) {
        as[i].onclick = function () {
            (function () {
                for (var j = 0; j < as.length; j++) {
                    as[j].style.color = "#ccc";
                }
            })()
            this.style.color = "#333";
        }
    }
})();
// input框
(function () {
    for (var a = 0; a < inputs.length; a++) {
        inputs[a].index=a;        
        inputs[a].onblur = function () {
            var index=this.index;
            var val = this.value;
            var reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
            var res = reg.test(val);
            if (res) {
                text[index].innerHTML = "格式正确";
                text[index].style.color = "green";
            } else {
                text[index].innerHTML = "格式错误";
                text[index].style.color = "red";
            }
        }
        inputs[a].onkeyup = function () {
                var index=this.index;
                x[index].classList.remove("hide");
                x[index].onclick=function(){
                        inputs[index].value = "";
                        this.classList.add("hide");
                        text[index].innerHTML='';
                } 
                if (this.value.length == 0) {
                    var index=this.index;
                    x[index].classList.add("hide");
                    text[index].innerHTML='';     
                }
        }

    }
})();
