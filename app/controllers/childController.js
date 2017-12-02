angular.module('myApp').controller('childController',function($scope){
	$scope.timeOfDay = new Date();

	//alert('childController starts');
	//$scope.name = 'das';

	$scope.fireEmitEvent = function(msg){
		var obj = {};
			obj.name = $scope.name;
			obj.msg = msg;
		$scope.$emit('emitEvent',obj);
	};

	$scope.$on('broadCastEvent', function(event,obj){
		alert('This is : '+obj.msg + ' Emp Name : '+obj.name);
	});

});