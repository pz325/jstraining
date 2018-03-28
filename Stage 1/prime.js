/**
 * Find all primes up to max
 * @param {*} max 
 */
const get_primes = (max) => {
    let sieve = [], 
        i, 
        j, 
        primes = [];
    for (; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }

    return primes;
}

let max;

if (typeof window === 'undefined') {
    console.log('Run from Nodejs');
    max = 100;
} else {
    console.log('Run from a browser');
    max = 200;
}

const numPrimes = get_primes(max).length;

console.log(`There are ${numPrimes} primes under ${max}`);
