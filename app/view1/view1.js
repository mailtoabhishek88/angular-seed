// 'use strict';

// angular.module('myApp.view1', ['ui.router'])

// //Need to resolve $stateProvider issue
// .config(function($stateProvider) {
//   /*$stateProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   }),*/
//   $stateProvider.state('view2', {
//     templateUrl: 'view2/view2.html',
//     controller: 'View1Ctrl'
//   })
// })

// .controller('View1Ctrl', function($scope,$state) {

// 	var self = $scope;

// 	self.view1Var = 'var1';
// 	self.view2Var = 'var2';

//   self.goToState = function(){
//     $state.go('view2');
//   }

// });