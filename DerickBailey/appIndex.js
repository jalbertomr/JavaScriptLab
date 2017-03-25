// Build Your own Curry Function
// file: appIndex.js

var curry = require("./curry");

function add(a, b) {
    return a + b;
}

var curryAdd = curry(add);

curryAdd();
