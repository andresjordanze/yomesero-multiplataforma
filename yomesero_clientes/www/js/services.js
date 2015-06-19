angular.module('starter.services', [])

.provider('items', function itemsProvider() {

  this.$get = function itemsFactory($http) {
    var factory = {};
    factory.getItems = function(){
    return $http.jsonp('https://jsonp.afeld.me/?callback=JSON_CALLBACK&url=https://frozen-springs-8168.herokuapp.com/items.json');
    //return $http.jsonp('http://json2jsonp.com/?url=http://frozen-springs-8168.herokuapp.com/items.json&callback=JSON_CALLBACK');
  };
  return factory;
  };
})

.provider('restaurants', function restaurantsProvider() {

  this.$get = function restaurantsFactory($http) {
    var factory = {};
    factory.getRestaurants = function(){
    return $http.jsonp('https://jsonp.afeld.me/?callback=JSON_CALLBACK&url=https://frozen-springs-8168.herokuapp.com/restaurants.json');
    //return $http.jsonp('http://json2jsonp.com/?url=http://frozen-springs-8168.herokuapp.com/restaurants.json&callback=JSON_CALLBACK');
  };
  return factory;
  };
});