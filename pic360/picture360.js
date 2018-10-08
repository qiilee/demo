/*
 * jQuery Pic360 Plugin
 * version: 1.0.0 (2011.5.22)
 * @requires jQuery v1.4.4 or later
 * @author Yongliang Wen
 * @email wenzongxian@gmail.com
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {
$.fn.pic360 = function() {
	var first_img = this.find('img:first');
	var all_img = this.find('img');
	var img_count = all_img.length;
	if(img_count==0) return;
	var img_width = first_img.width();
	var chg_width = parseInt(img_width/img_count);/* 感应区宽度*/
	var imgs_left = first_img.offset().left;
	this.toggle();
	all_img.toggle();
	first_img.toggle();
	this.width(img_width);/* 设置容器宽度 */
	this.height(first_img.height());/* 设置容器高度 */
	var mouseX = 0;
	var start = false;
	var step = 0;
	var curr_step = 0;/* 当前感应区 */
	var curr_img = 0;/* 当前图片 */
	this.mouseover(function(e){/*鼠标移到本DIV*/
		start = true;
		if(start){
			mouseX = e.screenX;
			/* 获取当前感应区 */
			curr_step=parseInt((mouseX-imgs_left)/chg_width);
			step = curr_step;
		}

	})
	this.mouseout(function(e){/*鼠标移出本DIV*/
		start = false;
	})
	this.mousemove(function(e){
		if(start){
			curr_step=parseInt((e.screenX-imgs_left)/chg_width);
			if(curr_step!=step){
				$(all_img[curr_img]).toggle();/* 隐藏当前图片 */
				if(curr_step>step){
					curr_img = curr_img+1;
					if(curr_img>=img_count) curr_img=0;
				}else{
					curr_img = curr_img-1;
					if(curr_img<0) curr_img=img_count-1;
				}				
				$(all_img[curr_img]).toggle();
				step=curr_step;
			}
		}
	})
};
})(jQuery);
/**
 * 初始化所有Pic360对象
 */
$(document).ready(function(){
	$('.PIC360').each(function(){$(this).pic360()})
})

//$('#console').append('curr_img'+curr_img+'&nbsp;step'+step+'&nbsp;curr_step'+curr_step+'<br/>');
