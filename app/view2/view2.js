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
		$scope.categories = [];
		$scope.names = [];
		$scope.finalObj = {};
		angular.forEach($scope.data, function(value){
			if($scope.categories.indexOf(value.category) == -1){
				$scope.categories.push(value.category);
			}
			if($scope.names.indexOf(value.name) == -1){
				$scope.names.push(value.name);
			}
			if(!$scope.finalObj[value.category]){
				$scope.finalObj[value.category] = {};
			}
			if(!$scope.finalObj[value.category][value.name]){
				$scope.finalObj[value.category][value.name] = {};
			}
			$scope.finalObj[value.category][value.name]	= value.amount;
		});
	}

	function error(){
		console.log('error');
	}
	appService.getData().then(success, error);
}]);