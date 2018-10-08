	//运动框架
	function stratMove(obj,json,fn)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){doMove(obj,json,fn);},30);
	}
	function doMove(obj,json,fn)
	{
		var iCur=0;
		var attr=null;
		var dope=true;
		for(attr in json)
		{
			if(attr=="opacity")
			{
				iCur=parseInt(getStyle(obj,attr)*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj,attr));
			}
			
			if(isNaN(iCur)){iCur=0;}
			
			var iSpeed=(json[attr]-iCur)/6;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			if(iCur != json[attr])
			{
				dope=false;
			}
			if(attr=="opacity")
			{
				obj.style.opacity=(iCur+iSpeed)/100;
				obj.style.filter="alpha(opacity:"+(iCur+iSpeed)+")";
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+"px";
				document.title=obj.offsetWidth+","+obj.offsetHeight;
			}
		}
		if(dope)
		{
			clearInterval(obj.timer);
			if(fn)
			{
				obj.style.background="red";
				fn.call(obj);
			}
		}
		
	}