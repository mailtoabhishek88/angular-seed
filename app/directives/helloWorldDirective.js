
angular.module('myApp').directive('helloWorld',function(){
		//scope : true , false, isolated
			alert('Directive starts');
			return {
				restrict : "EA",
				//Isoloated scope example
				scope : {
					movie : '=', // two way binding
					rating : '@' ,// one way binding : changes done is directive will not reflect in parent.
					displayMovieName : '&' // functional binding - Not working right now
				},
				template : "<input type='text' ng-model='movie'><h5>Movie name : {{movie}}</h5>"+
				"<input type='text' ng-model='rating'><h5>Movie Rating : {{rating}}</h5>" +
				"<button ng-click='displayMovieName(movie)'>display Movie Name</button>",
				/*compile : function(scope,attr,elem){
					//alert('compile starts');
					return {
						pre : function($scope,attr,elem){
							alert('pre starts');
							$scope.displayMovieName = function(name){
								alert('Movie Name : ' + name);
							}
						},
						post : function($scope,attr,elem){
							alert('post starts');

						}
					}
				},*/
				link : function($scope,attr,elem){
					//not working now
					alert('link starts');
					//console.log('linkess');
					$scope.displayMovieName = function(name){
						alert('Movie Name : ' + name);
					}
				}
			};

		});

//Currently compile and link are not working together. Only one is working.
//Reason : Compile and link dont work together.In the directive definition object, 
//if you only define link, that's like shorthand for having an empty compile function with an empty preLink function with your 
//code in the postLink function. As soon as you define compile, link is ignored by angular, because compile should return the linking functions.

//If you only return one function from compile, then it'll be executed post link.

//Or, put differently, link is just a shortcut to the postLink function that gets called after the scope has been linked by compile.