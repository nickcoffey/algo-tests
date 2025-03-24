// 'use strict'
const fs = require("fs");

function _mergeArrays(arrA, arrB) {
	const mergedArr = [];

	while (true) {
		const aItem = arrA[0];
		const bItem = arrB[0];

		if (aItem === undefined) {
			mergedArr.push(...arrB);
			break;
		} else if (bItem === undefined) {
			mergedArr.push(...arrA);
			break;
		} else if (aItem < bItem) {
			mergedArr.push(aItem);
			arrA.splice(0, 1);
		} else {
			mergedArr.push(bItem);
			arrB.splice(0, 1);
		}
	}
	return mergedArr;
}

function mergeSort(arr) {
	const left = 0;
	const right = arr.length;
	const mid = Math.floor(arr.length / 2);

	const leftArr = arr.slice(left, mid);
	const rightArr = arr.slice(mid, right);

	if (leftArr.length === 1 && rightArr.length === 1) {
		return _mergeArrays(rightArr, leftArr);
	} else if (leftArr.length === 1 && rightArr.length > 1) {
		return _mergeArrays(mergeSort(rightArr), leftArr);
	}

	return _mergeArrays(mergeSort(rightArr), mergeSort(leftArr));
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		// Assume the current position holds
		// the minimum element
		let min_idx = i;

		// Iterate through the unsorted portion
		// to find the actual minimum
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min_idx]) {
				// Update min_idx if a smaller element is found
				min_idx = j;
			}
		}

		// Move minimum element to its
		// correct position
		let temp = arr[i];
		arr[i] = arr[min_idx];
		arr[min_idx] = temp;
	}
	return arr;
}

function areArraysEqual(arrA, arrB) {
	return (
		arrA.length === arrB.length && [...arrA].every((x, i) => arrB[i] === x)
	);
}

// const testArrays = JSON.parse(fs.readFileSync("testArrays.json", "utf8"));
// for (let testArray of testArrays) {
// 	console.log(
// 		areArraysEqual(
// 			[...testArray].sort((a, b) => a - b),
// 			mergeSort([...testArray]),
// 		),
// 	);
// }

const bigArray = [];
for (let i = 0; i < 500_000; i++) {
	bigArray.push(Math.floor(Math.random() * 1_000_000) + 1_000_000);
}

console.time("selectionSort");
console.log(selectionSort([...bigArray]));
console.timeEnd("selectionSort");

console.time("mergeSort");
console.log(mergeSort([...bigArray]));
console.timeEnd("mergeSort");

// console.time("builtinSort");
// console.log([...bigArray].sort((a, b) => a - b));
// console.timeEnd("builtinSort");
