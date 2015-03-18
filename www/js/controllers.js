
angular.module('ppcprototypeApp')

.controller('TestCtrl', [ '$scope', 'ContentFactory', function ($scope, ContentFactory) {
  console.log('TestCtrl');
  console.log(ContentFactory);
}])

.controller('LocationCtrl', [ '$scope', '$mdDialog', '$location', function ($scope, $mdDialog, $location) {
  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .content('This App Would Like to Use Your Current Location')
      .ok('OK')
      .cancel("Don't Allow")
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $location.url('/overview')
    });
  };
}])

.controller('OverviewCtrl', [ '$scope', 'ContentFactory', function ($scope, ContentFactory) {
  $scope.items = ContentFactory;
}]);