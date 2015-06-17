// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.foods', {
    url: '/foods',
    views: {
      'tab-foods': {
        templateUrl: 'templates/tab-foods.html',
        controller: 'FoodsCtrl'
      }
    }
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('restaurants', {
    url: '/restaurants',
    templateUrl: 'templates/restaurants.html',
    controller: 'RestaurantsCtrl'
  })

  .state('tab.drinks', {
      url: '/drinks',
      views: {
        'tab-drinks': {
          templateUrl: 'templates/tab-drinks.html',
          controller: 'DrinksCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.desserts', {
    url: '/desserts',
    views: {
      'tab-desserts': {
        templateUrl: 'templates/tab-desserts.html',
        controller: 'DessertsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});

app.controller('HomeCtrl', function($scope) {})

app.controller('FoodsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
});

app.controller('DrinksCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
});

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


app.controller('DessertsCtrl', function($scope, $state, items) {
  $scope.items = [];
  items.getItems().success(function(data){
    $scope.items = data;
  });
});

app.controller('RestaurantsCtrl', function($scope, $state, restaurants) {
  $scope.restaurants = [];
  restaurants.getRestaurants().success(function(data){
    $scope.restaurants = data;
  });
});


app.provider('items', function itemsProvider() {

  this.$get = function itemsFactory($http) {
    var factory = {};
    factory.getItems = function(){
    return $http.jsonp('http://json2jsonp.com/?url=http://frozen-springs-8168.herokuapp.com/items.json&callback=JSON_CALLBACK');
  };
  return factory;
  };
});

app.provider('restaurants', function restaurantsProvider() {

  this.$get = function restaurantsFactory($http) {
    var factory = {};
    factory.getRestaurants = function(){
    return $http.jsonp('http://json2jsonp.com/?url=http://frozen-springs-8168.herokuapp.com/restaurants.json&callback=JSON_CALLBACK');
  };
  return factory;
  };
});