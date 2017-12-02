angular.module('myApp').service('myService', function($window){

		this.saveItem = function(key,value){
			$window.sessionStorage.setItem(key,value);
		};

		this.getItem = function(key){
			return $window.sessionStorage.getItem(key);
		};		

});

