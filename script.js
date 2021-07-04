const array = [1,3,7,5,2,8,3];

// function sortItems(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length - 1; j++) {
// 			if (array[j] > array[j + 1]) {
// 				let temp = array[j];
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 			}
// 		}
// 	}

// 	return array;
// }
// console.log('result', sortItems(array));

// /////////////////////////////////////////////////////////////

const sort2 = arr => {
	let max = arr[0];
	let length = arr.length;

	for(let i = 0; i < arr.length; i++) {
		for (let j = 0; j < length; j++) {
			if (arr[j] > max) {
				max = arr[j];
				let temp = arr[j];
				arr[j] = arr[arr.length - 1];
				arr[arr.length - 1] = temp;
			}
		}
		length = length - 1;
	}
	return arr;
}

console.log('result', sort2(array))