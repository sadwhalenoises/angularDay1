function fib(terms: number){
    let n1: number = 0, n2: number = 1, nextTerm: number

    console.log('Fibonacci Sequence:')

    for (let i: number = 1; i <= terms; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fib(5);