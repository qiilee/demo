// 获取id
function id(obj) {
    return document.getElementById(obj);
}
// 增加class名称
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

function view() {
    return {
        w: document.documentElement.clientWidth || document.body.clientWidth,
        h: document.documentElement.clientHeight || document.body.clientHeight
    };
}
var viewHeight=function(){
	var section=document.getElementsByTagName("section");
	var iheight=view().h;
	section[0].style.height=iheight;
	for (var i = 0; i < section.length; i++) {
		section[i].style.height=iheight+"px";

	}
}
var waited_develop=function(){
    var waitedli=document.getElementsByClassName("nav_bar_ul")[0].children;
    // var waiteda=waitedli.children;
    console.log(waitedli);
    // console.log(waiteda);
    
    for (var i=1;i<waitedli.length;i++){
        if(waitedli[i].addEventListener){
            waitedli[i].addEventListener("click",myfunction,false);
                function myfunction(){
            alert("待开发");
        }

        }
        if(waitedli[i].attachEvent){
            waitedli[i].attachEvent("onclick",myfunction); 
            function myfunction(){
                alert("待开发");
            }
        }
    }
}
var tagSwitch=function() 
{
	var navP=document.getElementById("nav_bar");
	var next=document.getElementsByClassName("scroll");
    var con=document.getElementsByTagName("section");
    var tag=document.getElementsByTagName("aside")[0].children;
    con[0].style.display="block";
    tag[0].className="cur_a";
    for (var i = 0; i < tag.length; i++) {
    	tag[i].index=i;
    	tag[i].onclick=function(){
    		for (var n = 0; n < tag.length; n++) {
    			tag[n].className="";
    			con[n].style.display="none";
    		}
    		tag[this.index].className="cur_a";
    		con[this.index].style.display="block";
    	}
    }
    for (var i = 0; i < next.length; i++) {
    	next[i].index=i;
    	tag[i].index=i;
    	next[i].onclick=function(){
    		for (var n = 0; n < next.length; n++) {
    			tag[n].className="";
    			con[n].style.display="none";
    		}
    		con[this.index+1].style.display="block";
    		tag[this.index+1].className="cur_a";

    	}
    }
}
// html5--canvas
var canvashtml5 = document.getElementById("html5").getContext("2d");
var canvascss3=document.getElementById("css3").getContext("2d");
var canvasjs=document.getElementById("js").getContext("2d");
var canvasjq=document.getElementById("jq").getContext("2d");
var canvasbs=document.getElementById("bs").getContext("2d");
var canvasps=document.getElementById("ps").getContext("2d");
var canwidth=160;
var radius=70;
var canhtml5=function(){
	var deg = 0;
    var html5T = function(deg){
        var r = deg*Math.PI/180;   
        canvashtml5.clearRect(0,0,canwidth,canwidth);   
        canvashtml5.beginPath();  
        canvashtml5.strokeStyle = "#F1652A"; 
        canvashtml5.lineWidth = 10; 
        canvashtml5.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvashtml5.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        html5T(deg);
	        if(deg>324){
	            clearInterval(time);
	        }
	    }    
    },20);
}
var cancss3=function(){
	var deg = 0;
    var css3T = function(deg){
        var r = deg*Math.PI/180;   
       	canvascss3.clearRect(0,0,canwidth,canwidth);   
        canvascss3.beginPath();  
        canvascss3.strokeStyle = "#409AD8"; 
        canvascss3.lineWidth = 10; 
       	canvascss3.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvascss3.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        css3T(deg);
	        if(deg>324){
	            clearInterval(time);
	        }
	    }    
    },20);
}
var canvasTotal=function(){

}
var canjs=function(){
	var deg = 0;
    var jsT = function(deg){
        var r = deg*Math.PI/180;   
        canvasjs.clearRect(0,0,canwidth,canwidth);   
        canvasjs.beginPath();  
        canvasjs.strokeStyle = "#ECB12C"; 
        canvasjs.lineWidth = 10; 
        canvasjs.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasjs.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        jsT(deg);
	        if(deg>252){
	            clearInterval(time);
	        }
	    }    
    },20);
}
var canjq=function(){
	var deg = 0;
    var jqT = function(deg){
        var r = deg*Math.PI/180;   
        canvasjq.clearRect(0,0,canwidth,canwidth);   
        canvasjq.beginPath();  
        canvasjq.strokeStyle = "#75B143"; 
        canvasjq.lineWidth = 10; 
        canvasjq.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasjq.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        jqT(deg);
	        if(deg>288){
	            clearInterval(time);
	        }
	    }    
    },20);
}
var canbs=function(){
	var deg = 0;
    var bsT = function(deg){
        var r = deg*Math.PI/180;   
        canvasbs.clearRect(0,0,canwidth,canwidth);   
        canvasbs.beginPath();  
        canvasbs.strokeStyle = "#583F85"; 
        canvasbs.lineWidth = 10; 
        canvasbs.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasbs.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        bsT(deg);
	        if(deg>288){
	            clearInterval(time);
	        }
	    }    
    },20);
}

var ps=function(){
	var deg = 0;
    var psT = function(deg){
        var r = deg*Math.PI/180;   
        canvasps.clearRect(0,0,canwidth,canwidth);   
        canvasps.beginPath();  
        canvasps.strokeStyle = "#031A3A"; 
        canvasps.lineWidth = 10; 
        canvasps.arc(canwidth/2,canwidth/2,radius,0-1/2*Math.PI,r-1/2*Math.PI,false); //
        canvasps.stroke();
    };
    var time = setInterval(function(){
    	var con=document.getElementsByTagName("section")[2];
    	if (con.style.display=="block") {
    		deg+=4;
	        psT(deg);
	        if(deg>288){
	            clearInterval(time);
	        }
	    }    
    },20);
}

//judge


var checkUsername=function(){
	var username=document.getElementById("username").value;
	var usernamecheck=document.getElementById("check_username");
	usernamecheck.innerText="";
	var myreg=/^[\u4e00-\u9fa5 ]{2,20}$/;
	var myreg1=/^[a-zA-Z\/ ]{2,20}$/;
	if(username==""||username==null){
		usernamecheck.innerText="姓名不能为空";
	}
	else{
		if (myreg.test(username)||myreg1.test(username)) {
		usernamecheck.innerText="";		
		}
		else{
			usernamecheck.innerText="姓名格式错误";
		}
	}
}
var checkMail=function(){
	var usermail=document.getElementById("usermail").value;
	var usermailcheck=document.getElementById("check_usermail");
	usermailcheck.innerText="";
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(usermail==""||usermail==null){
		usermailcheck.innerText="邮箱不能为空";
	}
	else{
		if (myreg.test(usermail)) {
		usermailcheck.innerText="";		
		}
		else{
			usermailcheck.innerText="邮箱格式错误";
		}
	}
}
var checkTheme=function(){
	var usertheme=document.getElementById("usertheme").value;
	var userthemecheck=document.getElementById("check_usertheme");
	userthemecheck.innerText="";
	if(usertheme==""||usertheme==null){
		userthemecheck.innerText="主题不能为空";
	}
}

var checkCon=function(){
	var usercon=document.getElementById("usercon").value;
	var userconcheck=document.getElementById("check_usercon");
	userconcheck.innerText="";
	if(usercon==""||usercon==null){
		userconcheck.innerText="内容不能为空";
	}
}

var usernameon=document.getElementById("username");
usernameon.onblur=checkUsername;

var mymailon=document.getElementById("usermail");
mymailon.onblur=checkMail;

var mythemeon=document.getElementById("usertheme");
mythemeon.onblur=checkTheme;
var myconon=document.getElementById("usercon");
myconon.onblur=checkCon;



var scrollFunc = function (e) {
    var con=document.getElementsByTagName("section");
        var tag=document.getElementsByTagName("aside")[0].children;  
    
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件   
          
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            for (var i = 1; i < tag.length; i++) {
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";
                    tag[i-1].className="cur_a";
                    con[i-1].style.display="block";
                    break;
                }
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            
            for (var i = 0; i < tag.length-1; i++) {
                var n=0;
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";  
                    n=i+1;
                    tag[n].className="cur_a";
                    con[n].style.display="block";
                    break;
                }
            }

        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            for (var i = 1; i < tag.length; i++) {
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";
                    tag[i-1].className="cur_a";
                    con[i-1].style.display="block";
                    break;
                }
            }
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            for (var i = 0; i < tag.length-1; i++) {
                var n=0;
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";  
                    n=i+1;
                    tag[n].className="cur_a";
                    con[n].style.display="block";
                    break;
                }
            }
        }
    }
    // ScrollText(direct);
}
// 给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
// //滚动滑轮触发scrollFunc方法

//以下是调用上面的函数
var browser = myBrowser();
if ("IE" == browser) {
    document.onmousewheel = scrollFunc;  
}else{
    window.onmousewheel= scrollFunc;  
}

viewHeight();
tagSwitch();
canhtml5();
cancss3();
canjs();
canjq();
canbs();
ps();
waited_develop();