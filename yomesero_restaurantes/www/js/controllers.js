angular.module('starter.controllers', [])

.controller('homeController',function($scope,$state, items){
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
  $scope.create_item = function(){
    $state.go("create_item");
  };
})

.controller('FoodsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
  $scope.create_item = function(){
    $state.go("create_item");
  };
})

.controller('DrinksCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
  $scope.create_item = function(){
    $state.go("create_item");
  };
})

.controller('DessertsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
  $scope.create_item = function(){
    $state.go("create_item");
  };
})

.controller('createController',function($scope,$state, $http){
  $scope.data = {};

  $scope.create_item = function(){
    if($scope.data.item_name !== undefined && $scope.data.item_price !== undefined && $scope.data.item_time !== undefined && $scope.data.item_description !== undefined && $scope.data.item_type !== undefined){
      var cat="https://frozen-springs-8168.herokuapp.com/create_from_json?";
      cat+="item_name=";
      cat+=$scope.data.item_name;
      cat+="&item_description=";
      cat+=$scope.data.item_description;
      cat+="&item_type=";
      cat+=$scope.data.item_type;
      cat+="&item_time=";
      cat+=$scope.data.item_time;
      cat+="&item_price=";
      cat+=$scope.data.item_price;
      cat = cat.replace(/ /g,"%20");
      $http.get(cat);
      $state.go('tab.home');
    }
    else{
      alert("Todos los campos son obligatorios");
      console.log("Todos los campos son obligatorios");
    }
  }

});