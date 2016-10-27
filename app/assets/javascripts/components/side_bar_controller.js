app.controller('sideBarCtrl', ["$scope", "rowService", "$rootScope", 'currUser', 'componentService', function($scope, rowService, $rootScope, currUser, componentService){

  $scope.currentUser = currUser;

  $scope.selectedRow = false;
  $scope.selectedComponent = false;

  $scope.showOptions;

  $scope.setOptions = function(name) {
    console.log("show suboptions: ", name);
    $scope.showOptions = name;
  }

  $scope.resetOptions = function() {
    console.log("dont show the suboptions")
    $scope.showOptions = undefined;
  }

  $scope.initiateComponents = function(type, option){
    rowService.buildNewComponent(type, $scope.selectedRow, option);
  };

  $scope.componentTypes = function(){

    return componentService.componentKeys();
  };

  $scope.baseComponents = function() {
    return componentService.getBase().data;
  };

  $rootScope.$on('selected.row', function(ev, id){
    if($scope.selectedRow === id){
      $scope.selectedRow = false;
    } else {
      $scope.selectedRow = id;
    }
  });
}]);
