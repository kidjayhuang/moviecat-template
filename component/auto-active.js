/**
 * Created by longman on 2017/4/6.
 */
//创建指令，给li 动态的获取焦点
(function(angular){
    var app = angular.module('app.autoActive', []);
    app.directive('autoActive', ['$location', function($location){
        return {
            restrict:'EAC',
            link: function(scope, element, attrs){ //指令一旦添加到元素上去，就会执行link函数
                //element: 使用该指令的元素的jqlite对象
                //attrs:使用该指令的元素的属性
                scope.location = $location;
                //锚点值的变化 --> 动态添加和删除样式
                scope.$watch('location.url()', function(newValue){
                    console.log('---------', newValue);
              //      var aLink = element.children().attr('href').substr(1);
                    var aLink = element.children().attr('href');
                    console.log(aLink);
                    console.log(attrs);
                    if(aLink.indexOf(newValue) > -1){
                        element.parent().children().removeClass(attrs.autoActive);
                        element.addClass(attrs.autoActive);
                    }
                });//只能监听scope上面函数或者属性

            }
        }
    }])

})(angular)