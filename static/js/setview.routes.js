SetView.config(function($routeProvider) {
  var app = 'static/js/apps/';

  $routeProvider
  .when('/', {
    controller: 'HomeController',
    controllerAs: 'HomeCtrl',
    templateUrl: app + 'home/home.tpl.html'
  });
});
