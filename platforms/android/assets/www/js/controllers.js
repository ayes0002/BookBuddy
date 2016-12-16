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

.controller('SearchCtrl', ['$scope', 'Data', function($scope, Data) {
  $scope.search = function(searchBook){
    Data.getBooks(searchBook.query)
        .then(function successCallback(response) {
            console.log(response);
            $scope.data = response.data;
            $scope.data.GoodreadsResponse.search.query.__cdata = searchBook;
            console.log(searchBook.query);
            $scope.results = response.data.GoodreadsResponse.search.results.work;
            console.log($scope.results);
        }, function errorCallback(error) {
            alert("Error " + error);
        });
  }
}])

.controller('DetailsCtrl', ['$scope', '$stateParams', 'Data', function($scope, $stateParams, Data) {
    console.log($stateParams);
}])

.controller('EventsCtrl', [ '$scope', 'Data', function($scope, Data) {
    Data.getEvents()
        .then(function successCallback(response){
            console.log(response.data);
            $scope.eData = response.data;
            $scope.events = response.data.GoodreadsResponse.events.event;
    }, function errorCallback(error){
       alert("Error " + error); 
    });
}]);