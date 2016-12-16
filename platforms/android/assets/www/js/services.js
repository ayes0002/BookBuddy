angular.module('starter.services', [])

.factory('Data', function($http) {

  return {
    getBooks: function(query){
        return $http({method: 'GET', url:'https://www.goodreads.com/search/index.xml?key=M1Ws98BVrlSFLiwCrwZOQ&q=' + query});
        //        return $http({method: 'GET', url:'http://localhost:8100/search/index.xml?key=M1Ws98BVrlSFLiwCrwZOQ&q=' + query})
    },
//    searchOne: function(query, search){
//        return $http({method: 'POST', url:'http://localhost:8100/search/index.xml?key=M1Ws98BVrlSFLiwCrwZOQ&q=' + query})
//    }
    getEvents: function(){
        return $http({method: 'GET', url:'https://www.goodreads.com/event/index.xml?search[country_code]=CA&key=M1Ws98BVrlSFLiwCrwZOQ&q'});
    }
  };
});
