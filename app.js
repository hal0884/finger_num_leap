var LeapController = function($scope, $http, $location, $routeParams) {
  $scope.test = true;
  $scope.finger_num = 0
  Leap.loop({enableGestures: true}, function(frame){
    $scope.finger_num = frame.fingers.length
    $scope.$digest();
  });
}
