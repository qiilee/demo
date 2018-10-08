window.onload=function()
{
	var oFlaseBox=document.getElementById('flaseplayer');
	var oLBtn=getClass(oFlaseBox,'leftBtn')[0];
	var oRBtn=getClass(oFlaseBox,'rightBtn')[0];
	var aLi=oFlaseBox.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var aAr=[
		{w:400,h:300,l:300,t:0,opa:60,z:1},
		{w:500,h:350,l:150,t:0,opa:80,z:2},
		{w:600,h:400,l:0,t:0,opa:100,z:3},
		{w:500,h:350,l:-60,t:0,opa:80,z:2},
		{w:400,h:300,l:-100,t:0,opa:60,z:1}
	];
	
	oLBtn.onclick=function(){goImg(true);};
	oRBtn.onclick=function(){goImg(false);};
	
	function goImg(toLeft)
	{
		if (toLeft)
		{aAr.push(aAr.shift());}
		else
		{aAr.unshift(aAr.pop());}
		for(var i=0;i<aLi.length;i++)
		{
			stratMove(aLi[i],{'width':aAr[i].w,'height':aAr[i].h,'left':aAr[i].l,'top':aAr[i].t,'opacity':aAr[i].opa},false);
			aLi[i].style.zIndex=aAr[i].z;
		}
	}
};
// 获取class对象
function getClass(oParent,iClass)
{
	var arr=[];
	var aObj=oParent.getElementsByTagName('*');
	for(var i=0;i<aObj.length;i++)
	{
		if(aObj[i].className==iClass)
		{
			arr.push(aObj[i]);
		}
	}
	return arr;
}

//获取计算后样式
function getStyle(obj,attr)
{
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];;
}