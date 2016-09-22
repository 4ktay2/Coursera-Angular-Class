(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

 ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyShoppingController(ShoppingListCheckOffService) {
   var buy = this;

   buy.items = ShoppingListCheckOffService.getBuyItems();

   buy.markAsBought = function(itemIndex, name, quantity) {
      ShoppingListCheckOffService.boughtItem(itemIndex, name, quantity);
   };

 }


 AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
   var bought = this;
   bought.items = ShoppingListCheckOffService.getBoughtItems();
 }


 function ShoppingListCheckOffService() {
    var service = this;
    var buyitems = [
       { name: "Cookies", quantity: 5 },
       { name: "Milk", quantity: 1},
       { name: "Apples", quantity: 4},
       { name: "Bread", quantity: 1},
       { name: "Soap" , quantity: 1}
     ];
    //console.log("buyitems: ",buyitems);
    service.getBuyItems = function () {
       return buyitems;
     };

     var bought = [];

     service.getBoughtItems = function() {
       return bought;
     };
     service.boughtItem = function(itemIndex, name, quantity) {
       //find item name/quantity given the index = itemIndex
      var item = { name: name,
         quantity: quantity
       };

      bought.push(item);
      buyitems.splice(itemIndex,1);
     };


 }

})();
