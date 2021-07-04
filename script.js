const array = [5,3,1,8,7];

const bubbleSort = arr => {
	for (let i = 0, end_i = arr.length - 1; i < end_i; i++) {
		let itWasSwapped = false;

		for (let j = 0, end_j = end_i - i; j < end_j; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				itWasSwapped = true;
			}
		}
		
		if (!itWasSwapped) break;
	}

	return arr;
};

console.log('result', bubbleSort(array));