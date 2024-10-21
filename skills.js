function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Finds the smallest 7-digit prime number.
 * 
 * This function starts from the smallest 7-digit number (1,000,000) and increments
 * until it finds a prime number or reaches a 15-digit number limit.
 * 
 * @returns {number|string} The smallest 7-digit prime number, or a message indicating
 *                          no prime number was found before reaching 15 digits.
 */
function findSmallest7DigitPrime() {
    let num = 1000000; // Start from the smallest 7-digit number
    const maxLimit = 999999999999999; // 15-digit number limit
    while (!isPrime(num)) {
        num++;
        if (num > maxLimit) {
            return "No prime number found before reaching 15 digits";
        }
    }
    return num;
}

function calculatenumbers(var1, var2) {
    return var1 + var2;
}

// Store results
const smallest7DigitPrime = findSmallest7DigitPrime();
const sumResult = calculatenumbers(5, 10);

// Print results and summary
console.log("Smallest 7-digit prime number:", smallest7DigitPrime);
console.log("Sum of 5 and 10:", sumResult);
console.log("Summary: Calculated the smallest 7-digit prime number and the sum of 5 and 10.");