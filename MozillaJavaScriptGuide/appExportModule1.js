//appExportModule1.js
//export { name1, name2, ..., nameN };
//export { variable1 as name1, variable2 as name2, ..., nameN };
//export let name1, name2, ..., nameN: //tambien var
//export let name1 = ..., name2 = ..., ..., nameN; //tambien var, const

//export default expression;
//export default function(...) { ... };      //tambien class y function*
//export default function name(...) { ... }; //tambien class y function*
//export { name1 as default, ...}

//export * from ...;
//export { name1, name2, ..., name3} from ...;
//export { import1 as name1, import2 as name2, ..., nameN} from ...; // nameN identificador a
//                                                                      ser exportado

function cube(x) {
    return x * x * x;
}
const foo = Math.PI + Math.SQRT2;

export default { cube, foo };
