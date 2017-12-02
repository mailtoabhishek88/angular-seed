'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router'
]).config(['$locationProvider','$routeProvider','$stateProvider', function($locationProvider,$routeProvider,$stateProvider) {
  //$locationProvider.hashPrefix('/');

  //$routeProvider.otherwise({redirectTo: '/'});
  alert('No.1 : Config');

  $stateProvider
  	.state('home',{
  		url :'/home',
  		templateUrl :'templates/home.html',
  		controller : 'homeController',
  		controllerAs : 'homeCtrl'
  	})
  	.state('about',{
  		//url :'/about',
  		templateUrl :'templates/about.html',
      controller : 'aboutController'
  	})

}]);


angular.module('myApp').run(function(){

  alert('No. 2 : run');
});
