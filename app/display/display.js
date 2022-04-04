'use strict';

angular.module('myApp.display', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/display', {
        templateUrl: 'display/display.html',
        controller: 'displayCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('displayCtrl', function($http) {
      var vm = this;

      $http({
        method : "GET",
        url : "http://127.0.0.1:5000/readData"
      }).then(function mySuccess(response) {
        vm.image = response.data;
      }, function myError(response) {
        vm.image = response.statusText;
      });
    });
