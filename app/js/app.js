'use strict';


// Declare app level module which depends on filters, and services
angular.module('homeroomApp', [
  'ngRoute',
  'homeroom.services',
  'homeroom.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'SplashController'});
  $routeProvider.when('/criteria', {templateUrl: 'partials/criteria.html', controller: 'CriteriaController'});
  $routeProvider.when('/students', {templateUrl: 'partials/students.html', controller: 'StudentsController'});
  $routeProvider.when('/generate', {templateUrl: 'partials/generate.html', controller: 'GenerateController'});
  $routeProvider.when('/details', {templateUrl: 'partials/details.html', controller: 'DetailsController'});
  $routeProvider.otherwise({redirectTo: '/splash'});
}]);
