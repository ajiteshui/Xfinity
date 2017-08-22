'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'appService', function($scope, appService) {
	function success(data){
		$scope.data = data;
	}

	function error(){
		console.log('error');
	}
	appService.getData().then(success, error);
}]);