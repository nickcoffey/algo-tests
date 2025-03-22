// 'use strict'
const fs = require("fs");

function isPrime(number) {
	let factorFound = false;
	for (let factor = 2; factor <= Math.floor(Math.sqrt(number)); factor++) {
		if (number % factor === 0) {
			factorFound = true;
			break;
		}
	}
	return !factorFound;
}

function areSetsEqual(setA, setB) {
	return setA.size === setB.size && [...setA].every((x) => setB.has(x));
}

const primeNums = new Set();
for (let number = 2; primeNums.size < 1000; number++) {
	if (isPrime(number)) {
		primeNums.add(number);
	}
}

// sourced from wikipedia
const knownPrimes = new Set(
	JSON.parse(fs.readFileSync("knownPrimes.json", "utf8")),
);

console.log(areSetsEqual(primeNums, knownPrimes));
