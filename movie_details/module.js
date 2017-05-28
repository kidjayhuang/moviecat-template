/**
 * Created by longman on 2017/4/7.
 */
(function(angular){
    //创建模块
    var app = angular.module('app.details', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/movie/details/:id',{
            templateUrl:'../movie_details/view.html',
            controller:'detailsController'
        })
    }]);
    app.controller('detailsController', ['$scope', '$routeParams', 'httpService',  function($scope, $routeParams, httpService){
        var id = $routeParams.id;
       // console.log('--------detaial------', id);
        //jsonp的请求
        httpService.jsonp('http://api.douban.com/v2/movie/subject/' + id, {}, function(data){
            console.log('data:', data);
            $scope.movie = data;
            $scope.$apply();
        });
    }])
})(angular)