window.onhashchange=show;
window.onload=show;
function show(){
    var filename = location.hash.substr(1);    
    if(filename.indexOf('/')==-1){
        $("#main").load('./components/'+filename+'.html')||'index';
    }else{
        var arr = filename.split('/');
        
        $("#main").load('./components/'+arr[0]+'.html',function(){
            $("#right").load('./components/'+filename+'.html');
            $("#menu>ul>li>a").removeClass("active");
            $('#menu').find('[href="#'+filename+'"]').addClass('active');
        })
    }
}