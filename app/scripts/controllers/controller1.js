angular.module('unameWebAppApp', []).
  controller('controller1', ['$scope', 'Market', function($scope, Market) {
    // Instantiate an object to store your scope data in (Best Practices)
    $scope.data = {};

    Market.query(function(response) {
      // Assign the response INSIDE the callback
      $scope.data.players = response;
    });
  }])
