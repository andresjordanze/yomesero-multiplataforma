// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
  $urlRouterProvider.otherwise('/tab/home')
  $stateProvider

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeController'
      }
    } 
  })

  .state('create_item', {
    url: '/create_item',
    templateUrl: 'templates/create_item.html',
    controller: 'createController' 
  })

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.foods', {
    url: '/foods',
    views: {
      'tab-foods': {
        templateUrl: 'templates/tab-foods.html',
        controller: 'FoodsCtrl'
      }
    }
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

  .state('tab.desserts', {
    url: '/desserts',
    views: {
      'tab-desserts': {
        templateUrl: 'templates/tab-desserts.html',
        controller: 'DessertsCtrl'
      }
    }
  });

});

