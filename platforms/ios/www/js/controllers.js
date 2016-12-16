angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', 'Data', function($scope, Data) {
    Data.getBooks()
    .then(function successCallback(response) {
        console.log(response);
        $scope.j = response.data;
        console.log($scope.j);
    }, function errorCallback(error) {
        alert("Error " + error);
    });   
}])

.controller('SearchCtrl', ['$scope', 'Data', '$ionicLoading', function($scope, Data, $ionicLoading) {
    $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...',
      duration: 700
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };
    $scope.search = function(searchBook){
        $scope.show();
        Data.getBooks(searchBook.query)
            .then(function successCallback(response) {
                $scope.data = response.data;
                $scope.data.GoodreadsResponse.search.query.__cdata = searchBook;
                $scope.results = response.data.GoodreadsResponse.search.results.work;
            }, function errorCallback(error) {
                alert("Error " + error);
            });
    }
}])

.controller('DetailsCtrl', ['$scope', '$stateParams', 'Data', function($scope, $stateParams, Data) {
    Data.searchOne($stateParams)
        .then(function successCallback(response){
            console.log(response);
            $scope.data = response.data;
            $scope.details = $scope.data.GoodreadsResponse.book;
    }, function errorCallback(error){
        alert("Error " + error);
    })
}])

.controller('EventsCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.searchEvents = function(dStart, dEnd){
        console.log(dStart);
        console.log(dEnd);
        Data.getEvents()
            .then(function successCallback(response){
                console.log(response.data);
                $scope.eData = response.data;
                $scope.events = response.data.GoodreadsResponse.events.event;
        }, function errorCallback(error){
           alert("Error " + error); 
        });
    }
}]);