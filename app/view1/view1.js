'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'appService', function($scope, appService) {
	function success(data){
		$scope.data = data;
	}

	function error(){
		console.log('error');
	}
	appService.getData().then(success, error);

	$scope.sortBy = function(key) {
		$scope.reverse = ($scope.key === key) ? !$scope.reverse : false;
		$scope.key = key;
	  };
}]);