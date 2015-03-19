
var app = angular.module('ppcprototypeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMaterial',
  'btford.socket-io',
  'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('blue-grey');

  $urlRouterProvider.otherwise("/welcome");

  $stateProvider
    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html"
    })
    .state('location', {
      url: "/location",
      templateUrl: "templates/location.html",
      controller: 'LocationCtrl'
    })
    .state('overview', {
      url: "/overview",
      templateUrl: "templates/overview.html",
      controller: 'OverviewCtrl'
    })
    .state('content', {
      url: "/content/:id",
      templateUrl: "templates/content.html",
      controller: 'ContentCtrl'
    })
    .state('congratulations', {
      url: "/congratulations",
      templateUrl: "templates/congratulations.html"
    })
    .state('tester', {
      url: "/tester",
      templateUrl: "templates/tester.html",
      controller: 'TesterCtrl'
    });
});