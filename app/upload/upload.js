'use strict';

angular.module('myApp.upload', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/upload', {
        templateUrl: 'upload/upload.html',
        controller: 'uploadCtrl',
        controllerAs: 'vm'
      });
    }])

    .controller('uploadCtrl',['Upload','$window',function(Upload,$window){
      var vm = this;
      vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
          vm.upload(vm.file); //call upload function
        }
      };

      vm.upload = function (file) {
        Upload.upload({
          url: 'http://127.0.0.1:5000/uploadData', //webAPI exposed to upload the file
          data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
          if(Array.isArray(resp.data)){ //validate success
            vm.image = resp.data;
            $window.alert('Successfully uploaded');
          } else {
            $window.alert(resp.data);
          }
        }, function (error) { //catch error

          $window.alert('Error status: ' +error);
        });
      };
    }]);
