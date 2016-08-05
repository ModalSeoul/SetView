SetView.factory("AuthService", AuthService);
AuthService.$inject = ['$cookies', '$http'];

// This service probably will remain dormant.
// Unsure about this site taking user-data at this point in time.
function AuthService($cookies, $http, $location) {
  var AuthService = {
    login: login,
    register: register
  };

  return AuthService;

  function login(username, password) {
    return $http.post('/api/auth/login/', {
      username: username,
      password: password
    }).then(loginSuccessFn, loginErrorFn);

    function loginSuccessFn(data, status, headers, config) {
     window.location = '/';
    }

    function loginErrorFn(data, status, headers, config) {
      window.location = '/login';
    }
  }

  function register(email, username, password) {
    return $http.post('/api/users/', {
      email: email,
      username: username,
      password: password
    }).then(registerSuccessFn, registerErrorFn);

    function registerSuccessFn(data, status, headers, config) {
      AuthService.login(username, password);
      window.location = '/login';
    }

    function registerErrorFn(data, status, headers, config) {
      alert("Registration error.");
    }
  }
}
