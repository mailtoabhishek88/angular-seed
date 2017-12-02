'use strict';

angular.module('myApp').controller('homeController',['$scope','$http' ,'$q','$state','$window','myService','myFactory',
									function($scope,$http,$q,$state,$window,myService,myFactory){
		//var self = this;

		$scope.title = 'Home';
		$scope.data = {};
		$scope.name = 'abhishek';
		$scope.movie = 'Ice Age';
		$scope.rating = 5;

		//alert('homeController starts');

		//Session Storage
		//SAVE VAUE / using service
		myService.saveItem("SavedString","I'm a value saved with SessionStorage");
    	//$window.sessionStorage.setItem("SavedString","I'm a value saved with SessionStorage");
    
	    //RETRIEVE VALUE
	    $scope.sessionKey = myService.getItem("SavedString");
	    console.log($scope.sessionKey);
	    //alert(configurableProvider.name);

	    myFactory.saveItem("SavedString1","I'm a value saved with SessionStorage1");
    	//$window.sessionStorage.setItem("SavedString","I'm a value saved with SessionStorage");
    
	    //RETRIEVE VALUE
	    $scope.sessionKey1 = myFactory.getItem("SavedString1");
	    console.log($scope.sessionKey);


		$scope.getEmployeeDetails = function(){
			var deferred = $q.defer();
			$http.get('api/employee.json').then(function(response){
				//self.data = response.data;
				 //response.data;
				 deferred.resolve(response);
			});
			return deferred.promise;
		};


		$scope.getEmployeeDetails().then(function(response){
			$scope.data =  response.data;
		});

		$scope.goToHome = function(stateName){
			$state.go(stateName);
		}

		$scope.goToState = function(stateName){
			$state.go(stateName);
		}

		$scope.$on('emitEvent', function(event,obj){
			alert('This is : '+obj.msg + ' Emp Name : '+obj.name);
		});

		$scope.fireBroadCastEvent = function(msg){
			var obj = {};
			obj.name = $scope.name;
			obj.msg = msg;
			$scope.$broadcast('broadCastEvent',  obj);
		};

		$scope.displayMovieName = function(movieName){
			alert(movieName);
		};

}]);




angular.module('myApp').factory('myFactory', function($window){

		var obj = {};
		
		obj.saveItem = function(key,value){
			$window.localStorage.setItem(key,value);
		};

		obj.getItem = function(key){
			return $window.localStorage.getItem(key);
		};

		return obj;		

});

/*angular.module('myApp').provide('configurable', function(){

		this.privateName = ''
		
		this.setName = function(name){
			this.privateName = name;
		};

		this.$get = function(){
			return {
				name : this.privateName
			}
		};

});*/