/*var app = angular.module('myApp', [
  'ngRoute',
  'ui.router'
]);
*/
angular.module('myApp').controller('aboutController',function($scope,$state){

	$scope.goToHome = function(state){
		$state.go(state);
	};

});