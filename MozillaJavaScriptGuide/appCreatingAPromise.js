// Creating a Promise
/* para probar crear en la hoja index.html el codigo seguiente
<button id="btn">Make a promise!</button>
    <div id="log"></div>

<script type="text/javascript">
  todo el codigo de abajo
</script>
*/


'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)</br>');

    // we make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise( (resolve, reject) => {
        // The resolver function is called with the ability to resolve or reject the promise
        log.insertAdjacentHTML('beforeend', thisPromiseCount +
                               ') Promise started (<small>Async code started</small>)</br>');
        // this is only an example to create asynchronism
        window.setTimeout( function(){
            // we fulfill the promise !
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000)

    });

    p1.then(
        //log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                                   ') Promise fulfilled (<small>Async code terminated</small>)</br>');
        }
        )
    .catch(
        //log the rejection reason
        (reason) => {console.log('Handle Rejection Promise (' +  reason + ') here.' ); }
    );

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)</br>');
}
