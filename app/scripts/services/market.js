'use strict';

/**
 * @ngdoc service
 * @name unameWebAppApp.Market
 * @description
 * # Market
 * Factory in the unameWebAppApp.
 */
angular.module('unameWebAppApp')
  .factory('Market', function ($resource) {
    return $resource('http://localhost:8080/unamebeta/market/getallplayers',{})
  });
