'use strict';

angular.module('myApp').controller('homeController',['$scope','$http' ,'$q',function($scope,$http,$q){
		var self = this;

		self.title = 'Home';
		self.data = {};

		self.getEmployeeDetails = function(){
			var deferred = $q.defer();
			$http.get('api/employee.json').then(function(response){
				//self.data = response.data;
				 //response.data;

				 deferred.resolve(response);
			});
			return deferred.promise;
		};


		self.getEmployeeDetails().then(function(response){
				self.data =  response.data;
		});



}]);