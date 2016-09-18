(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.foodList = "";
  $scope.answer = "";

  $scope.calcTooMuch = function(){
    //$scope.answer = "buttonWorks";
    if ($scope.foodList.length==0) { $scope.answer = "Please enter data first";

    } else {
    var arr = $scope.foodList.split(',');
    var count = arr.length;
    if (count<4) { $scope.answer = "Enjoy!";

  } else { $scope.answer = "Too much!";

    }
  }
  };


}

})();
