(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('Path',"https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.foundItems = function(searchTerm) {
    //MenuSearchService.getMatchedMenuItems(searchTerm);
  //  if(searchTerm.length>0) (
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function(response) {
    narrow.items = response.data;
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
//) else (return "no search term";)
};
}


MenuSearchService.$inject=['$http', 'Path']
  function MenuSearchService($http, Path) {
    var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var promise = $http({
      method: "GET",
      url: (Path),
      params: {
        category: name
      }})
      .then(function(response) {
    var foundItems = response.data;
    console.log(response.data);
    })
    promise.then(function(result){
      return result;
    });
//;
  //return promise;
};
}
  // promise.then(function(response) {
  //   console.log(response.data);
  //   var foundItems=[];
  //   var menu_items = response.data;


    //if searchTerm matches response.data name then push to foundItems array
    // return foundItems array
  // })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //
  // };




})();
