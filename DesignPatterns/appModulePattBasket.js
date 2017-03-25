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

/*
basketModule.getTotal()
0
item2 = { name:"plata", price:12 }
Object {name: "plata", price: 12}
item1 = { name:"oro", price:34 }
Object {name: "oro", price: 34}
basketModule.addItem(item2)
undefined
basketModule.getTotal()
12
basketModule.addItem(item1)
undefined
basketModule.getTotal()
46
*/

// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log( basket );
