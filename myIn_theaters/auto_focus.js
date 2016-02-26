/*
 * @Author: Administrator
 * @Date:   2016-02-19 13:47:20
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-02-24 08:14:26
 */

'use strict';;
(function(angular) {
  //自定义指令是先定义模块然后定义指令
  var module = angular.module('movie_auto_focus', []);
  module.directive('auto_focus', ['$scope', '$location ', function($scope, $location) {
    // 自定义指令必须有return
    return {
      restrict: 'A', //定义元素 A、E、C、M
      link: function($scope, iEle, iAttrs, $location) {
        var $scope.$location = $location;
        // var path = $scope.$location.path();

        /*        iEle.on('click', function() {
                  var aLink = iEle.children().attr('href').replace(/#(\/.+?)\/d/, '$1');
                  var type = aLink.replace(/#(\/.+?)\/\d/, '$1');
                  console.log(aLink); //所有的操作是类似jQuery但是功能没那么齐全
                  iEle.parent().children().removeClass('active');
                  iEle.addClass('active');
                })*/
        // 使用事件监听，监听对象必须是$scope的变量
        $scope.$watch('$location.path()', function(now) {
          var aLink = iEle.children().attr('href').replace(/#(\/.+?)\/d/, '$1');
          var type = aLink.replace(/#(\/.+?)\/\d/, '$1');
          if (now.startsWith(type)) { //如果元素和路径匹配执行
            iEle.parent().children().removeClass('active');
            iEle.addClass('active');
          }
          console.log(aLink); //所有的操作是类似jQuery但是功能没那么齐全
        })

        iEle.on('click', function() {
          var aLink = iEle.children().attr('href').replace(/#(\/.+?)\/d/, '$1');
          var type = aLink.replace(/#(\/.+?)\/\d/, '$1');
          console.log(aLink); //所有的操作是类似jQuery但是功能没那么齐全
          iEle.parent().children().removeClass('active');
          iEle.addClass('active');
        })
      }
    }
  }])
})(angular);
