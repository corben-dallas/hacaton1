const array = [5,3,-1,8,7,0,2];

function sortItems(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
}
console.log('result', sortItems(array));

// /////////////////////////////////////////////////////////////

// const sort2 = arr => {
// 	const max = arr[0];

// 	for(let i = 0; i < arr.length; )
// }
