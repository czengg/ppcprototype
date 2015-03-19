
angular.module('ppcprototypeApp')

.controller('TesterCtrl', [ '$scope', 'ContentFactory', '$http', function ($scope, ContentFactory, $http) {

  $scope.items = ContentFactory;

  $scope.send = function (_id) {
    $http.post('/api/send/', {_id: _id}).success(function (response) {
      console.log(response);
    });
  };

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

.controller('OverviewCtrl', [ '$scope', 'ContentFactory', 'Notification', function ($scope, ContentFactory, Notification) {
  $scope.items = ContentFactory;

}])

.controller('ContentCtrl', [ '$scope', '$stateParams', 'ContentFactory', 'Notification',
  function ($scope, $stateParams, ContentFactory, Notification) {

  $scope.content = ContentFactory[$stateParams.id - 1];

}])

;
