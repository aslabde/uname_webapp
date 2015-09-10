'use strict';

/**
 * @ngdoc overview
 * @name unameWebAppApp
 * @description
 * # unameWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('unameWebAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
