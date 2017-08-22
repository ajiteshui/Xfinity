'use strict';

angular.module('myApp.version.version-service', [])

.service('appService', ['$http', function($http) {
  return {
	getData : function() {
		return $http.get('components/data.JSON').then(function(response){
			return response.data;
		}, function(error){
			return error;
		})
	}
  }
}]);
