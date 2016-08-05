SetView.factory('SetService', SetService);


function SetService($http) {
  var endpoint = '/api/sets/';

  function create(post) {
    return $http.post(endpoint, post);
  }

  function list() {
    return $http.get(endpoint);
  }

  function get(id) {
    return $http.get(endpoint + id + '/');
  }

  function update(id, post) {
    return $http.put(endpoint + id + '/', post);
  }

  function dispose(id) {
    return $http.delete(endpoint + id + '/');
  }

  return {
    create: create,
    list: list,
    get: get,
    update: update,
    dispose: dispose,
  };
}
