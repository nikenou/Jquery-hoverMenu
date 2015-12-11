/*
2012, nikenou frontend Library v1.0dev

build time: July 04 11:16
*/

/**
 * @create: ouli
 * @hoverDelay 浮动菜单插件
 * @调用方式	
   $.fn.hoverDelay({
		hoverDuring: 300, //菜单展示速度
		outDuring: 100, //菜单消失速度
		hoverEvent: "", //鼠标移动上去事情
		outEvent: "" //鼠标离开事件
   })
 */
$.fn.hoverDelay=function(options){var defaults={hoverDuring:300,outDuring:100,hoverEvent:"",outEvent:""};var options=$.extend({},defaults,options);var hoverTimer,outTimer;this.each(function(){var obj=$(this);obj.hover(function(){clearTimeout(outTimer);hoverTimer=setTimeout(options.hoverEvent,options.hoverDuring)},function(){clearTimeout(hoverTimer);outTimer=setTimeout(options.outEvent,options.outDuring)})})};