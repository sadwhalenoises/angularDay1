"use strict";
function pali(str) {
    if (str === str.split("").reverse().join("")) {
        return str + " is a palidrome!";
    }
    else {
        return str + " not a palidrome!";
    }
}
console.log(pali("abba"));
console.log(pali("hello"));
//# sourceMappingURL=palindrome.js.map