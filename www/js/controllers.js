angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('FoodsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
})

.controller('DrinksCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('DessertsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
})

.controller('RestaurantsCtrl', function($scope, $state, restaurants) {
  $scope.restaurants = [];
  restaurants.getRestaurants().success(function(data){
    $scope.restaurants = data;
  });
});
