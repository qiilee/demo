LovelyGallery

功能特点：
超过200个令人惊叹的3D＆2D硬件加速的转换与过渡画廊！
易于使用的视觉过渡建设者 -创建自己的自定义转换，并用它与滑块！
5显示模式（正常，反应灵敏，全宽，全宽+响应，全宽+ responsiveUnder智能大小调整和重新定位，图像，视频和文字层响应模式，包括字体大小，行高等）。
（大多是独特的）功能（YouTube和Vimeo的视频，自动暂停幻灯片自动播放和自动预览图像，如果视频正在播放，暂停悬停，图像预压，回路，另一张幻灯片或任何网址链接图层， yourLogo链接，深度链接，随机启动，随机播放幻灯片等功能）。
无限种用法（图像滑块，图像滑块文字，内容滑块，视频图库滑块，混合内容滑块，iframe等..）。
3种类型自动隐藏功能的导航控制（缩略图模式，将鼠标悬停缩略图按钮，按钮）。
所见即所得的编辑器与预览功能（马上来测试你的滑块），出口/进口和复制/禁用的滑块，幻灯片和层功能。
无限变化的硬件加速动画（滑动/ 4方向或褪色/输出（层）无数宽松类型，可选旋转和缩放，并的层可以滑动或淡出在其他层出现之前）。
使用任何HTML内容（包括图像，内嵌的视频，文字，表格，Flash内容和你所需要的任何东西！）。
支持所有主要的浏览器（包括IE7-11，我们建议您使用Chrome浏览器，Safari或Firefox）。
网络范围内的激活和处理新的网站在网络中的 多站点准备。（未提供）
本地化准备好了，你可以翻译整个插件，包括管理用户界面。（未提供）
翻译插件的支持（如qTranslate）创建多语言滑块。（未提供）
皮肤编辑器，你可以修改皮肤从您的WordPress管理。（未提供）
支持wordpress，discuz、phpcms、dedecms等。（未提供）
样品滑块。
用于移动设备的 触摸控制。
键盘导航。
内置功能强大的API。（未提供）
在一个页面上的多个滑块。
非常详细的文档。（未提供）
配置方法文档。
搜索引擎友好。
20套（可扩展和替换）皮肤支持。
分层的皮肤文件中包含PSD格式。（未提供）
幻灯模板。（未提供）
幻灯模块（可无限扩展）功能。
开发者文档。（未提供）
免费的支持和未来的自动更新功能更新。（未提供）


使用方法：

//配置文件
<script type="text/javascript">
lsjQuery(document).ready(function() {
                if(typeof lsjQuery.fn.lovelygallery == "undefined") { lsShowNotice('lovelygallery_1','jquery'); }
                    else if(typeof lsjQuery.transit == "undefined" || typeof lsjQuery.transit.modifiedForlovelygallery == "undefined") { lsShowNotice('lovelygallery_1', 'transit'); }
                        else {
                            lsjQuery("#lovelygallery_1").lovelygallery({ <!-- 特效：#lovelygallery_1 #lovelygallery_2 #lovelygallery_3 ... #lovelygallery_200 -->
                                width : '1000px', <!-- 宽度：1000px -->
                                height : '450px', <!-- 高度：450px -->
                                responsive : true, <!-- 响应：true false -->
                                responsiveUnder : 0, <!-- 响应下：0 -->
                                sublayerContainer : 0, <!-- 响应容器：0 -->
                                autoStart : true, <!-- 自动播放：true false -->
                                pauseOnHover : false, <!-- 鼠标移至区域暂停：true false -->
                                firstLayer : 1, <!-- 第1张幻灯的z-index层：1 -->
                                animateFirstLayer : true, <!-- 第一层动画是否播放：true false -->
                                randomSlideshow : false, <!-- 随机播放其中一张幻灯：true false -->
                                twoWaySlideshow : true, <!-- 第二层动画等待时是否播放：true false -->
                                loops : 0, <!-- 循环播放：0（无限播放） 1-n（1或自定次数） -->
                                forceLoopNum : true, <!-- 强制循环播放：true false -->
                                autoPlayVideos : true, <!-- 自动播放视频：true false -->
                                autoPauseSlideshow : 'auto', <!-- 自动暂停播放特效：auto pause -->
                                youtubePreview : 'maxresdefault.jpg', <!-- 视频背景图片：true false -->
                                keybNav : true, <!-- 键盘左右键控制是否开启：true false -->
                                touchNav : true, <!-- 触摸控制是否开启：true false -->
                                skin : 'lovely', <!-- 皮肤样式（共20套）：borderlessdark borderlessdark3d borderlesslight borderlesslight3d carousel darkskin defaultskin fullwidth fullwidthdark glass lightskin lovely lovely3d lovelyglass lovelygreen lovelypink lovelyskyblue lovelyviolet lovelyyellow minimal -->
                                skinsPath : 'images/bg/skins/', <!-- 皮肤样式路径：images/bg/skins/ -->
globalBGColor : 'transparent', <!-- 全局背景颜色：transparent -->
navPrevNext : true, <!-- 左右控制图标显示：true false -->
                                navStartStop : true, <!-- 播放暂停控制图标显示：true false -->
                                navButtons : true, <!-- 导航控制按钮显示：true false -->
                                hoverPrevNext : true, <!-- 左右控制图标鼠标移上显示：true false -->
                                hoverBottomNav : true, <!-- 底部控制图标鼠标移上显示：true false -->
                                showBarTimer : true, <!-- 时间控制条显示：true false -->
                                showCircleTimer : false, <!-- 时间控制圆显示：true false -->
                                thumbnailNavigation : 'hover', <!-- 缩略图显示：hover（鼠标移上去显示） always（总是显示） bullets（不显示） -->
                                tnWidth : 100, <!-- 缩略图高度：100 -->
                                tnHeight : 60, <!-- 缩略图宽度：60 -->
                                tnContainerWidth : '60%', <!-- 缩略图容器高度：60% -->
                                tnActiveOpacity : 35, <!-- 缩略图活动透明度：35 -->
                                tnInactiveOpacity : 100, <!-- 缩略图不活动透明度：100 -->
                                imgPreload : true, <!-- 图片预加载：true false -->
                        		yourLogo : false, <!-- 自定义logo：true false -->
                                yourLogoStyle : 'left: 10px; top: 10px;', <!-- 自定义logo样式：left: 10px; top: 10px; -->
                                yourLogoLink : false, <!-- 自定义logo超链接：true false -->
                                yourLogoTarget : '_self', <!-- 自定义logo超链接打开方式：_self new _blank _parent _top -->
                                cbInit : function(element) { }, <!-- 这个事件当幻灯片完成建立DOM和成功加载。如果你想要做的的元素对幻灯片开始东西，你将不能够直到幻灯片已加载，你必须使用这个事件。 -->
                                cbStart : function(data) { }, <!-- 调用cbStart的当幻灯片已经开始。 -->
                                cbStop : function(data) { }, <!-- 调用由用户停止当幻灯片。 -->
                                cbPause : function(data) { }, <!-- Fireing当幻灯片是暂时搁置（例如，通过“悬停”功能暂停）。 -->
                                cbAnimStart : function(data) { }, <!-- 调用cbAnimStart的当滑块开始滑动变化（动画开始）。 -->
                                cbAnimStop : function(data) { }, <!-- Fireing当滑块完成幻灯片的变化（动画结束）。 -->
                                cbPrev : function(data) { }, <!-- 调用滑块时，将改变以往由用户通过前面的按钮，键盘导航，触摸控制幻灯片。 -->
                                cbNext : function(data) { } <!-- 调用滑块时，将改变用户通过下一步“按钮，键盘导航，触摸控制下一张幻灯片。 -->
                            });
                        }
            });
        </script>


//过渡效果配置文件
<div id="lovelygallery_1" style="width: 1000px; height: 450px; margin: 0px auto; margin-bottom: 70px;"><div class="lg-layer"  style="slidedirection: right; slidedelay: 7200; durationin: 1500; durationout: 1500; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; timeshift: 0; transition2d: all; transition3d: 15; ">

<h5  class="lg-s3" style="position: absolute; top: 149px; left: 81px; slidedirection : fade; slideoutdirection : right; durationin : 1500; durationout : 1000; easingin : easeInOutQuint; easingout : easeInQuart; delayin : 0; delayout : 0; rotatein : 30; rotateout : 35; scalein : .5; scaleout : 5; showuntil : 701; padding-top: 5px; padding-right: 15px; padding-bottom: 5px; padding-left: 15px; font-family: 'Oswald'; font-size: 22px; color: #94e60f; background: black; border-radius: 3px; white-space: nowrap;"> 和 </h5>

slidedelay: 7200; <!-- 幻灯播放持续时间：7200:（毫秒ms） -->

durationin: 1500; <!-- 幻灯播放滑入持续时间：1500:（毫秒ms） -->

durationout: 1500; <!-- 幻灯播放离开持续时间：1500:（毫秒ms） -->

slidedirection : bottom; slideoutdirection : top; <!-- 幻灯图层载入效果：top bottom right left fade slide mixed vertical horizontal topbottom topright topleft bottomtop bottombright bottomleft righttop rightbottom rightleft lefttop left bottom leftright -->

easingin: linear;; <!-- 幻灯过渡：easeInOutQuad easeOutQuart linear easeInOutBack easeOutBack -->

easingout: linear; <!-- 幻灯过渡：linear -->

delayin: 0; <!-- 幻灯播放滑入延迟：0; -->

delayout: 0; <!-- 幻灯播放离开延迟：0; -->

timeshift: 0; <!-- 时间控制：0; -->

rotatein : -20; <!-- 幻灯旋转角度滑入度数：-20; -->
 
rotateout : 35; <!-- 幻灯旋转角度离开度数：35; -->
 
scalein : .5; <!-- 幻灯绽放滑入延迟：0; -->
 
scaleout : 5; <!-- 幻灯绽放离开延迟：0; -->
 
showuntil : 701; <!-- 显示时间控制：0;（不限时间） 1;（1次幻灯播放） 701; -->

transition2d: all; <!-- 过渡特效2d：all; 1,2,3,4,5,6,7,8,9,10,11,12,13;（113种） -->
transition2d: 1,2,3,4,5,6,7,8,9,10,11,12,13;
transition2d: 1,3,5,7,11,25,33,45,72,80,81,85,93;

transition3d: all; <!-- 过渡特效3d：all; 1,2,3,4,5,6,7,8,9,10,11,12,13;（100种） -->
transition3d: 1,2,3,4,5,6,7,8,9,10,11,12,13;
transition2d: 1,3,5,7,11,25,33,45,72,80,81,85,93;

//背景图片，同时也是缩略图，如果不需要其它动画图层，可以只用一张背景图片，也可以用多张。
<img src="images/001/001_bg.jpg" class="lg-bg" alt="Slide background">
<img src="images/001/001_bg_001.jpg" class="lg-bg" alt="Slide background">
<img src="images/001/001_bg_002.jpg" class="lg-bg" alt="Slide background">

//第1层图片。
<img class="lg-s1"  src="images/001/009_001.jpg"  style="position: absolute; top: 0px; left: -465px; slidedirection : fade; slideoutdirection : left;  durationin : 1000; durationout : 9000; easingin : linear; easingout : linear; delayin : 0; delayout : 500; showuntil : 1; ">

//第1层第1图片。
<img class="lg-s-1"  src="images/001/001_001.png"  style="position: absolute; top: 134px; left: -178px; slidedirection : left; slideoutdirection : left;  durationin : 800; durationout : 18000; easingin : easeOutQuart; easingout : easeInOutQuint; delayin : 100; delayout : 0; rotatein : -5; scalein : .5; showuntil : 1; width: 1300px; ">

//第2层图片。
<img class="lg-s2"  src="images/001/001_004.png"  style="position: absolute; top: 330px; left: 476px; slidedirection : right; slideoutdirection : left;  durationin : 4000; durationout : 10000; easingin : easeOutQuint; easingout : easeInQuad; delayin : 0; delayout : 0; rotatein : 20; rotateout : -10; scalein : 2.5; scaleout : .3; showuntil : 1; ">

//url的添加（如果添加全局图片链接，需要在最后的</div>之前添加。）
<a href="http://yourdomain.com/" target="_blank"  class="lg-link"  style="position: absolute; top: 0px; left: 0px; display: block; slidedirection : bottom; slideoutdirection : top; durationin : 2500; durationout : 1500; easingin : easeOutElastic; easingout : easeOutElastic; delayin : 2000; delayout : 0; showuntil : 0;"></a>

//url的添加（class="lg-s2"是指定第几层并且播放动画。）
<a href="http://yourdomain.com" target="_blank"  class="lg-s2"  style="position: absolute; top: 0px; left: 0px; display: block; slidedirection : bottom; slideoutdirection : top; durationin : 2500; durationout : 1500; easingin : easeOutElastic; easingout : easeOutElastic; delayin : 2000; delayout : 0; showuntil : 0; width: 100%; height: 100%;"><img src="images/001/banner_001.gif"  style=""></a></div>

//url的添加（class="lg-s1"是指定第几层的单张图片。）
<a href="http://yourdomain.com" target="_blank"  class="lg-s1"  style="position: absolute; top: 371px; left: 829px; display: block; slidedirection : fade; durationin : 1000; durationout : 1500; easingin : linear; easingout : easeInOutQuint; delayin : 10000; delayout : 0; showuntil : 0"><img src="images/001/009_008.png"  style="z-index:100;"></a>

//链接之前的动画层
<img class="lg-s2"  src="images/001/banner_001.gif"  style="position: absolute; top: 30px; left: 500px; display: block; slidedirection : bottom; slideoutdirection : top; durationin : 2500; durationout : 1500; easingin : easeOutElastic; easingout : easeOutElastic; delayin : 2000; delayout : 0; showuntil : 0;">

//动画层和链接同时应用
<img class="lg-s2"  src="images/001/banner_001.gif"  style="position: absolute; top: 30px; left: 500px; display: block; slidedirection : bottom; slideoutdirection : top; durationin : 2500; durationout : 1500; easingin : easeOutElastic; easingout : easeOutElastic; delayin : 2000; delayout : 0; showuntil : 0;"><a href="http://yourdomain.com" target="_blank"  class="lg-s2"  style="position: absolute; top: 0px; left: 0px; display: block; slidedirection : bottom; slideoutdirection : top; durationin : 2500; durationout : 1500; easingin : easeOutElastic; easingout : easeOutElastic; delayin : 2000; delayout : 0; showuntil : 0;"><img src="images/001/link.gif"  style="width: 1000px; height: 450px;"></a>

注意：修改图片时若缺少1张则无法播放缺少的那张幻灯，显示loading...。


//尺寸

images\css\base.css

查找

.gallery_sizer {
	max-width: 960px;
	margin: 0px auto;
}

修改为

.gallery_sizer {
	max-width: 1000px;
	margin: 0px auto;
}

//顶部距离

查找

body {
	padding-top: 35px;
}

修改为

body {
	padding-top: 0px;
}





注：此幻灯仅供参考与学习，请勿用于商业用途。











