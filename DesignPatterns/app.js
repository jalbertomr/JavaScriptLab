// Module Pattern

// Basket Module

var basketModule = (function () {

    var basket = [];

    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    // return an object which is exposed public
    return {

        // add items to our basket
        addItem: function( item ) {
            basket.push( item );
        },

        //Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },

        // Public alias to a private function
        doSomeThing: doSomethingPrivate,

        // Get the total value of the items in the basket
        getTotal: function() {
            var q = this.getItemCount(), price = 0;

            while(q--) {
                price += basket[q].price;
            }

            return price;
        }
    };
})();
