var app = angular.module('myApp', ['ngRoute']);

app.factory("services", ['$http', function($http) {
  var serviceBase = 'services/',
	obj = {};
	
    obj.getExposition = function(){
        return $http.get(serviceBase + 'exposition');
    }
    obj.getToile = function(toileID){
        return $http.get(serviceBase + 'toile?id=' + toileID);
    }

    obj.insertCustomer = function (customer) {
		return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
			return results;
		});
	};

	obj.updateToile = function (id, toile) {
	    return $http.post(serviceBase + 'updateToile', {id:id, toile:toile}).then(function (status) {
	        return status.data;
	    });
	};

	obj.deleteCustomer = function (id) {
	    return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
	        return status.data;
	    });
	};

    return obj;   
}]);

app.controller('listCtrl', function ($scope, services) {
    services.getExposition().then(function(response){
        $scope.toiles = response.data.result;
    });
});

app.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, customer) {
    var toileID = ($routeParams.toileID) ? parseInt($routeParams.toileID) : 0;
    $rootScope.title = (toileID > 0) ? 'Modification de la Toile' : 'Ajout d\'une Toile';
    $scope.buttonText = (toileID > 0) ? 'Mettre à jour la Toile' : 'Ajouter cette toile';
      var original = (customer.data.result == undefined) ? "" : customer.data.result[0];
      original._id = toileID;
      $scope.customer = angular.copy(original);
      $scope.customer._id = toileID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.customer);
      }

      $scope.deleteCustomer = function(customer) {
        $location.path('/');
        if(confirm("Are you sure to delete customer number: "+$scope.customer._id)==true)
        services.deleteCustomer(customer.customerNumber);
      };

      $scope.saveCustomer = function(customer) {
        $location.path('/');
        if (toileID <= 0) {
            services.insertCustomer(customer);
        } else {
            services.updateToile(toileID, customer);
        }
    };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'exposition',
        templateUrl: 'partials/exposition.html',
        controller: 'listCtrl'
      })
      .when('/edit-toile/:toileID', {
        title: 'Renseigner une toile',
        templateUrl: 'partials/edit-toile.html',
        controller: 'editCtrl',
        resolve: {
          customer: function(services, $route){
 //           var toileID = $route.current.params.toileID;
            return services.getToile($route.current.params.toileID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);