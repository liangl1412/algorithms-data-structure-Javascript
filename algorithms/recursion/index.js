// The Fibonacci numbers are the numbers in the following integer sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
// Fn = Fn-1 + Fn-2
// with seed values
// F0 = 0 and F1 = 1.
const currentTime = Date.now();

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(40));


//                             fib(5)   
//                      /                \
//                fib(4)                fib(3)   
//              /        \              /       \ 
//          fib(3)      fib(2)         fib(2)   fib(1)
//         /    \       /    \        /      \
//   fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
//   /     \
// fib(1) fib(0)
const mem = [];
mem[1] = 1;
mem[2] = 1;
function fibMem(n, mem) {
    if (mem[n]) {
        return mem[n]
    } else {
        const val = fibMem(n-1, mem) + fibMem(n-2, mem);
        mem[n] = val;
        return mem[n];
    }
}

// console.log(fibMem(40, mem));


function fibDp(n) {
    const mem = [];
    mem[1] = 1;
    mem[2] = 1;
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i -1] + mem[i - 2];
    }
    return mem[n];
}

// console.log(fibDp(40));

console.log('Time spent:', Date.now() - currentTime);
