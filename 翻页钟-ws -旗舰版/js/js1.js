//闪烁变量----由于点点闪烁变量不能共用一个，所以必须分别定义各自的点点变量，这也导致了函数也得定义两个
var tf1=true;//定义时 分的点点闪烁变量
var tf2=true;//定义秒 毫秒的闪烁变量


///闪烁函数
///时 分的点点闪烁函数	
function dot1(imgs1,imgs2){
		if(tf1){
			imgs1.src='img/dot1.jpg';
			imgs2.src='img/dot1.jpg';
			tf1=false;
		}else{
			imgs1.src='img/dot.jpg';
			imgs2.src='img/dot.jpg';
			tf1=true;
		}
	}
///秒 毫秒的点点闪烁函数	
function dot2(imgs1,imgs2){
		if(tf2){
			imgs1.src='img/dot1.jpg';
			imgs2.src='img/dot1.jpg';
			tf2=false;
		}else{
			imgs1.src='img/dot.jpg';
			imgs2.src='img/dot.jpg';
			tf2=true;
		}
	}

///判断数字位数的函数：
///判断是否是两位数的函数
function toDou2(n){
		if(n<10){//如果是个位
			return '0'+n;//转为字符串，目的是能让它当数组用
		}else{
			return n.toString();//转为字符串，目的是能让它当数组用
		}
	}
	
///判断是否是3位数的函数--专门针对毫秒用
function toDou3(n){
		if(n>9&&n<100){//如果是两位数
			return '0'+n;
		}
		if(n<10){//如果是1位数
			return '00'+n;
		}
		if(n<1000&&n>99){//如果是三位数
			return n.toString();
		}
	}


///程序说明：
//下面一共开启两个setInterval(); 目的是为了让毫秒的点点与 时分秒的点点闪烁不同步
///clock()是时分秒的函数
///smail()是毫秒的函数
window.onload=function(){
var imgs=document.getElementsByTagName('img');//获取所有图片	
//imgs数组中的元素索引：0 1代表时        2 3代表点        4 5代表分         6 7代表秒           8 9 代表点        10 11 12代表毫秒
	
///时 分 秒 区///////////
	function clock(){//时 分 秒的函数
	var time=new Date();//获取时间
	var h=time.getHours();//时
	var m=time.getMinutes();//分
	var s=time.getSeconds();//秒
	
	//由于上面获取方法会在返回01~09之类的数字时，只返回1位，所以必须用位数判断函数来处理返回值（返回值是数字类型）	
	
	//先调用两位数判断函数，处理时和分
		h=toDou2(h);
		m=toDou2(m);
		//时
		imgs[0].src='img/'+h[0]+'.jpg';
		imgs[1].src='img/'+h[1]+'.jpg';	
		
		
		//时 分 的点点调用闪烁函数	
		dot1(imgs[2],imgs[3]);
		//分
		imgs[4].src='img/'+m[0]+'.jpg';
		imgs[5].src='img/'+m[1]+'.jpg';
		
		
		//先调用两位数判断函数，处理秒
		//秒
		s=toDou2(s);
		imgs[6].src='img/'+s[0]+'.jpg';
		imgs[7].src='img/'+s[1]+'.jpg';
}
	clock();//避免F5刷新时全00现象，即：首次加载完页面后先调用一次
	setInterval(clock,1000);//时 分 秒的定时器
	
///毫秒区///////////
//毫秒的闪动函数  和 毫秒数字显示
	function smil(){//毫秒函数
		var ti=new Date();
		var s=ti.getSeconds();//秒
		var smil=ti.getMilliseconds();//毫秒	
		dot2(imgs[8],imgs[9]);//调用点点闪动函数
		//先调用3位数判断函数 处理毫秒---特殊的地方：毫秒的判断是3位数判断，所以用toDou3()来判断
		smil=toDou3(smil);
		imgs[10].src='img/'+smil[0]+'.jpg';
		imgs[11].src='img/'+smil[1]+'.jpg';
		imgs[12].src='img/'+smil[2]+'.jpg';
	}
	setInterval(smil,100);//毫秒的定时器
	
}
