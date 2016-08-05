var SetView = angular.module('SetView', ['ngRoute', 'ngCookies']).run(run);

function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}
