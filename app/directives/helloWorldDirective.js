(function(){

	var myApp = angular.module('myApp', []);

	myApp.directive('helloWorld',function(){
			return {
				template : 'Hello World!!'
			};

		});

})();