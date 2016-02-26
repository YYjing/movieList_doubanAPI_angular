/*
* @Author: Administrator
* @Date:   2016-02-19 13:14:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-02-21 09:34:49
*/

'use strict';
;(function(){
	var http = angular.module('movieCat.services.http',[]);
	// 在服务中定义业务逻辑定义模块：jsonp
	http.service('$yuHttp',['$document','$window',function($document,$window){
		// 首先判断传入的参数URL data callback,定义服务的方式和面向对象编程类似
		this.jsonp = function(url,data,cb){
			// 首先明确引入的链接形式是'http://..../...?a=1&b=2&callback=abcd1234567'
			// 一般回调函数名称是随机变量
			var cbFn = 'movie_cat'+Math.random().toString().replace('.','');
		// 将自定义的回调函数名称和传入的函数对应，拿到数据
		$window[cbFn] = cb;
		// 检测url形式
		  var queryString = url.indexOf('?') == -1 ? '?':'&';
			// 遍历data拼接数据
			for(var key in data){
					queryString += key + '=' + data[key] + '&'
			}
			// 拼接回调获取查询字符串
			queryString += 'callback=' + cbFn;
			// 创建标签，添加dom
			var scEle = $document[0].createElement('script');
			scEle.src = url + queryString;
			$document[0].body.appendChild(scEle);
		}
	}])
})(angular);
