function findPrime(num: number){
    for(let i: number = 2; i <= num - 1; i++){
        if(num % i == 0){
            return "not a prime number";
            break;
        }
    }
    return num + " is a prime number!"
}

console.log(findPrime(11));
console.log(findPrime(6));