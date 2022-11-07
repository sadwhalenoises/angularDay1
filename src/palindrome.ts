function pali(str: String){
    if(str === str.split("").reverse().join("")){
        return str + " is a palidrome!"
    }else{
        return str + " not a palidrome!"
    }
}

console.log(pali("abba"))
console.log(pali("hello"))