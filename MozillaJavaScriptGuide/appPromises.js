// Promise

let myFirstPromise = new Promise((resolve, reject) => {
    // we can resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function(){
        resolve('Success!');  //Yea! todo salio bien
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message. it probably will be
   console.log('Yea!' + successMessage)
});
