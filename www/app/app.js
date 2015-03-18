
var app = angular.module('ppcprototypeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/welcome");

  $stateProvider
    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html"
    })
    .state('location', {
      url: "/location",
      templateUrl: "templates/location.html"
    })
    .state('overview', {
      url: "/overview",
      templateUrl: "templates/overview.html"
    })
    .state('content', {
      url: "/content",
      templateUrl: "templates/content.html"
    })
    .state('congratulations', {
      url: "/congratulations",
      templateUrl: "templates/congratulations.html"
    })
    .state('tester', {
      url: "/tester",
      templateUrl: "templates/tester.html"
    });
});