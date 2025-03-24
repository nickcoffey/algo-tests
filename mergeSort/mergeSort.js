// 'use strict'

function _mergeArrays(arrA, arrB) {
	const mergedArr = [];
	for (let [i, arrAItem] of arrA.entries()) {
		const arrBItem = arrB[i];
		if (arrAItem < arrBItem) {
			mergedArr.push(arrAItem);
			mergedArr.push(arrBItem);
		} else {
			mergedArr.push(arrBItem);
			mergedArr.push(arrAItem);
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
		return _mergeArrays(leftArr, rightArr);
	}

	return _mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
}

const testArray = [38, 27, 43, 10];
console.log(mergeSort(testArray));
