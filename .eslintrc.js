module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    //"parser": "babel-eslint",
    //"extends": "rallycoding"  //packet npm install --save-dev eslint-rallycoding
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "no-console": 0
    }
    /*"rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }*/
};