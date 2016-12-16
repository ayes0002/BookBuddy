angular.module('starter.services', [])

.factory('Data', function($http) {

  return {
    getBooks: function(query){
        return $http({method: 'GET', url:'https://www.goodreads.com/search/index.xml?key=M1Ws98BVrlSFLiwCrwZOQ&q=' + query});
    },
    searchOne: function(book){
        return $http({method: 'GET', url:'https://www.goodreads.com/book/show/' + book.id + '.xml?key=M1Ws98BVrlSFLiwCrwZOQ'})
    },
    getEvents: function(){
        return $http({method: 'GET', url:'https://www.goodreads.com/event/index.xml?search[country_code]=CA&key=M1Ws98BVrlSFLiwCrwZOQ&q'});
    }
  };
});
