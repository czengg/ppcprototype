
angular.module('ppcprototypeApp')

.controller('TestCtrl', [ '$scope', 'ContentFactory', function ($scope, ContentFactory) {
  console.log('TestCtrl');
  console.log(ContentFactory);
}])