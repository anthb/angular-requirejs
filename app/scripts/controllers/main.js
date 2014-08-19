'use strict';

/**
 * @ngdoc function
 * @name wnwangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wnwangularApp
 */

define([
    'angular',
    'app',
    'services/cartService'
], function(angular, app, cartService) {

    // Use inline annotation on controller functions to avoid minifcation issues. Pass in an array listing the service dependencies.
    return angular.module('wnwangularApp')
        .controller('MainCtrl', ['$scope', '$http', 'cartService', function($scope, $http, cartService) {

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];


            $scope.doSomething = function(product) {

                // Need to handle the state. Add or Modify 

                if(product.qty < 1) {
                
                    alert('You need to add a quantity of ' + product.ProductName + ' before you can add it to the cart');

                } else {

                    alert(product.qty + ' of ' + product.ProductName + ' has been added to your cart.');
                }
            }

            $scope.selectNumberOptions = [];
            for(var i = 0; i <= 20; i++) {
                $scope.selectNumberOptions.push(i);
            }

            // Implement HTTP methods when using REST Service.
            $http.get('data/products.json')
                .success(function(data, status, headers, config) {

                    // Success Code here
                    $scope.products = data;
                    $scope.ProductPrice = 'ProductPrice';
                    
                    // product.qty is now coming from the products.json - This needs to come from cart.json and should be transferred via a cartService.
                    //cartService();
                    
                })
                .error(function(data, status, headers, config) {

                    // Error code here
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
        }]);

});