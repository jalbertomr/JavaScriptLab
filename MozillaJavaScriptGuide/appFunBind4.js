// Function.prototype.bind()

// Polyfill
/*La función bind() fue añadida a la especificación ECMA-262, 5a edición; por lo tanto podría no estar presente en todos los navegadores. Usted puede parcialmente simularla al insertar el siguiente código al inicio de sus scripts, permitiendo emplear muchas de las funcionalidades de bind() en implementaciones que no la soportan nativamente.
*/

if(!Function.prototype.bind) {
    Function.prototype.bind = function( oThis ) {
        if (typeof this !== 'function') {
            //closest thing possible to the ECMAScript5
            //internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call( arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP && oThis
                                    ? this : oThis,
                                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}
