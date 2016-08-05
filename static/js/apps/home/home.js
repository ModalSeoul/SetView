SetView.controller('HomeController', HomeController);

function HomeController($scope, $location, SetService, $http) {
  SetService.list().success(function(data){
    console.log(data);
    $scope.data = data;
    // Yo why the hell did this have to be done???
    for (var set in data) {
      $http.get('/api/images/' + data[set].images[0] + '/').success(function(r) {
        r.source = r.source.split('/imgs/');
        r.source = r.source[0] + '/' + r.source[1];
        console.log(r.source);
        $scope.data[set].image = r.source;
        console.log(r);
      });
    }
  });
}
