/**
 * Created by longman on 2017/4/5.
 */
(function (angular) {
    "use strict";

    // start your ride
    //1. 创建模块 - homepage
    // 2. 每个模块管理自己的路由和页面,需要在 config函数中注入$routeProvider的对象进行路由管理
    var app = angular.module('app.homepage', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/home_page',  {
            templateUrl:'../homepage/view.html',
            controller: 'homepageCtrl'
        })
    }]);
    app.controller('homepageCtrl', ['$scope', function($scope){

    }])

})(angular);