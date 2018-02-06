//appTemplateLiterals.js
// Multiline strings

console.log('string text line1\n' +
           'string text line2');
//string text line1
//string text line2
//con template literals

console.log(`string text line1
string text line2`);
//string text line1
//string text line2

//Expression Interpolation
var a=5;
var b=10;
console.log('Fiftheen is ' + ( a + b) + ' and\nnot ' + (2 * a + b));
//Fiftheen is 15 and
//not 20

//with some syntactic sugar, easy to read
console.log(`Fiftheen is ${a + b} and
not ${2 * a + b}`);
//Fiftheen is 15 and
//not 20

//Nesting Templates
//in ES5
var item = { isCollapsed : false };
function isLargerScreen(){ return false;}

var classes = 'header'
console.log('item.isCollapsed:' + item);
classes += (isLargerScreen() ?
           '': item.isCollapsed ?
           ' icon-expander' : ' icon-collapser');

console.log(classes);
//header icon-collapser

//in ES2015 with template literals and not nesting
const classes2 = `header ${ isLargerScreen() ? '' :
   (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
console.log(classes2);
//header icon-collapser

//in ES2015 with nested template literals
const classes3 = `header ${ isLargerScreen() ? '' :
`icon-${(item.isCollapsed ? 'expander' : 'collapser')}` }`; // note the parens
console.log(classes3);
//header icon-collapser

//Tagged Templates
var person = 'Beto'
var age = 47
var strings = ['Esto ', ' es un']

function myTag(strings, personExp, ageExp) {
    var str0 = strings[0];  'Esto '
    var str1 = strings[1];  ' es un '

    //there is a techinically a string after
    //the final expresion (in our example)
    //but it is empty (""), so disregard.
    //var str2 = strings[2];

    var ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    }else{
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${person} is a ${age}`;
console.log(output);
//that Beto is a youngster

//Tag functions don't need to return a string
function template(strings, ...keys) {
    console.log("strings--keys:" + strings + '---' + keys);
    return( function(...values) {
        console.log('values: ' + values);
        var dict = values[values.lenght - 1 ] || {};
        console.log('dict: ' + dict);
        var result = [strings[0]];
        console.log('result: ' + result);
        keys.forEach( function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template`${0}${1}${0}!`;
console.log( t1Closure('Y','A') );

var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});

//Raw strings
function tag(strings) {
    console.log('strings.raw[0]: '+strings.raw[0]);
    console.log('strings: ' + strings);
}

tag`string text line1 \n string text line2`;
//logs string text line1 \n string text line2
//including the two characters '\' and 'n'

//string.raw() method
var str = String.raw`Hi\n${2+3}!`;

console.log(str);
//Hi\n5!
console.log(str.length);
//6
console.log(str.split('').join(','));
//H,i,\,n,5,!

function latex(str) {
    return { "cooked": str[0], "raw": str.raw[0] }
}

console.log(latex`\unicode`);
//{cooked: undefined, raw: "\unicode"}
