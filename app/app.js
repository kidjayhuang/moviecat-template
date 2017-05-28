(function (angular) {
    "use strict";

    // start your ride
    // 1. 创建主模块
  /*  var app = angular.module('app', ['app.homepage', 'app.in_theaters', 'app.coming_soon', 'app.httpService']) //主模块依赖其他的子模块*/
    var app = angular.module('app', ['app.homepage', 'app.movie_list', 'app.httpService', 'app.autoActive', 'app.details'])
    app.controller('mainController', ['$scope', '$location', function($scope, $location){
        $scope.query = '';
        $scope.search = function(){//修改锚点，重新路由
            console.log(  $scope.query);
            ///search?q=西游记
            $location.url('/search?q='+ $scope.query) // /search?q=西游记
        }
    }])
})(angular);