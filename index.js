
//## layout begin
$(window).load(function (){
    $("#content").css("opacity","1.0");
    layout();
});

$(window).resize(function(){
    layout();
});

function addrow_onclick(){      
    console.log("addrow_onclick;");          
    var li = $("<li>added by code</li>")
    $("#content").append(li);
}

function deleterow_onclick(){
    console.log("deleterow_onclick;");
    $("#content p").last().remove();
}

function article_onclick(){
    console.log("article_onclick:");
    //layout();
}

function layout(){
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
    var container = document.getElementById("container");
    var header= document.getElementById("header");
    var footer = document.getElementById("footer");
    var content = document.getElementById("content");
    var placeholder_top = document.getElementById("placeholder_top");
    var placeholder_bottom = document.getElementById("placeholder_bottom");

    var blankHeight = (clientHeight-header.offsetHeight-footer.offsetHeight-content.offsetHeight);
    //console.log("blankHeight:",blankHeight);
    if(blankHeight > 0){
        placeholder_bottom.style.height = placeholder_top.style.height = (blankHeight/2)+"px";
    }else if(blankHeight < 0){
        placeholder_bottom.style.height = placeholder_top.style.height = 0+"px";
    }
}
//## layout begin


//### language settings begin
function setCookie(name,value){ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
function getCookie(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
} 

function getQueryValue(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
}

function language_switcher_onclick(){
    var attr = document.getElementById("language_switcher").getAttribute("href");
    console.log("attr:", attr);
    if(attr){
        arrAttr = attr.split("=");
        if(arrAttr && arrAttr.length >= 2){
            var to_lang = arrAttr[1];
            console.log("to_lang:", to_lang);
            setCookie("lang", to_lang);
        }
    }
}
//### language settings end

window.onload = function(){
    var ua = navigator.userAgent;
    var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1; //如果输出结果是true就判定是android终端或者uc浏览器
    var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //根据输出结果true或者false来判断ios终端

    if(isAndroid){
        console.log("isAndroid");
    }else if(isIOS){
        console.log("isIOS");
    }else{
        console.log("other system!")
    }
}