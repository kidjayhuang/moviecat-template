/**
 * Created by longman on 2017/4/6.
 */
(function(angular){
    //创建jsonp服务的模块
    var app = angular.module('app.httpService', []);
    app.factory('httpService', [ function(){
        return {
            //这里就是服务的内容
            jsonp: function(url, params, callback){
                //1. 拼接？后面的参数
                var querystring  = '?';
                console.log('------------', params)
                for(var key in params){
                    querystring += key + '=' + params[key] + '&';
                }
                url += querystring;
                var myCallback = 'myCallback_'+ Math.random().toString().substr(2); //定义和定义动态mycallback函数
                window[myCallback] = function(data){ // 服务器执行callback的函数， 会由豆瓣的服务器调用
                    console.log(data);
                    callback(data);//回调给控制器的函数中
                }
                url += 'callback='+ myCallback;
                var script = window.document.createElement('script');
                script.src = url;
                console.log('-----------', url);
                window.document.body.appendChild(script);
            }
        }
    }])
})(angular)