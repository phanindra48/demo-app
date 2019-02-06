var mainModule = angular.module('paginationApp', []);
mainModule.factory('users', function($http, $q) {
  var self = this;
  var defer = $q.defer();
  $http.get('http://localhost:5200/api/users').success(function(users) {
    defer.resolve(users);
  });
  return defer.promise;
});
