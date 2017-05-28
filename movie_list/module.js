/**
 * Created by longman on 2017/4/5.
 */
(function (angular) {
    "use strict";

    // start your ride
    //1. 创建模块 - homepage
    // 2. 每个模块管理自己的路由和页面,需要在 config函数中注入$routeProvider的对象进行路由管理
    var app = angular.module('app.movie_list', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/:category/:page?',  {
            templateUrl:'../movie_list/view.html',
            controller: 'in_theatersCtrl'
        })
    }]);
    app.controller('in_theatersCtrl', ['$scope', '$http', 'httpService',  '$routeParams', '$route',
        function($scope, $http, httpService, $routeParams, $route){
        //这里发送ajax请求，将本地data.json请求过来，把数据展现出来
        /*$http.jsonp('http://api.douban.com//v2/movie/in_theaters?callback=JSON_CALLBACK').success(function(data){
            console.log(data);
            $scope.list = data;
        }).error(function(){

        })*/
            console.log($routeParams);
        $scope.isLoading = true;//初始化让loading条显示出来
        var page = $routeParams.page;

        $scope.totalSize = 10;//每一页取10条数据
        page = (page - 0) || 1;//如果怕个为undefined情况下，初始化为1
        //每一页的数量设置成5个
        //page 1 count 0 1 2 3 4
        // page 2 coubt 5 6 7 8 9
        $scope.page = page; // 当前的页码
        httpService.jsonp('http://api.douban.com/v2/movie/' + $routeParams.category, {
            start:(page-1)*$scope.totalSize, //page的值从1开始，start的值需要减一
            count:$scope.totalSize,
            q: $routeParams.q
        }, function(data){
            console.log(data);
            $scope.list = data;
            $scope.total  = data.total // 设置总条目
            $scope.totalPage = Math.ceil( $scope.total/$scope.totalSize);//获得总页数
            $scope.isLoading = false;//隐藏loading条
            $scope.$apply()//触发数据的脏检查，更新视图
        });
        //点击进行分页切换
        $scope.gopage = function(newpage){
            if(newpage<1 || newpage>$scope.totalPage)
                return;
            $scope.page = newpage;
            //修改路由的锚点的值，需要注入一个对象$route,调用updateParams方法更新锚点值
            $route.updateParams({
                page:   $scope.page//修改锚点值变量
            })
        }

    }])

})(angular);