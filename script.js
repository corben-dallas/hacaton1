const array = [3,5,1,2,10];

// function sortItems(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
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

// const sort2 = arr => {
// 	let max = arr[0];
// 	let index = 0;
// 	let length = arr.length;
// 	console.log(arr);

// 	for(let i = 0; i < length; i++) {
// 		for (let j = 1; j < length; j++) {
// 			if (arr[j] > max) {
// 				max = arr[j];
// 				index = j;
// 			}
// 		}
// 		let temp = arr[index];
// 		arr[index] = arr[arr.length - index];
// 		arr[arr.length - index] = temp;
// 		max = arr[0];
// 		length = length - 1;
// 	}
// 	return arr;
// }
// console.log('result', sort2(array));

// /////////////////////////////////////////////////////

// const sort3 = arr => {
// 	for (var i = 0; i < arr.length; i++) { 
// 		const k = arr[i];
// 		let j = i;

// 		while (j > 0 && arr[j - 1] > k) { 
// 			arr[j] = arr[j - 1]; 
// 			j--; 
// 		}

// 		arr[j] = k;
// 	}

// 	return arr;
// }



// const result = sort3(array);
// console.log('result', result);

const tree = {
	value: 1,
	next: [
		{
			value: 2,
			next: [
				{
					value: 3,
					next: [],
				},
				{
					value: 4,
					next: [],
				},
				{
					value: 5,
					next: [],
				},
			],
		},
		{
			value: 6,
			next: [
				{
					value: 7,
					next: [],
				},
			],
		},
	]
};

const findChilds = (tree) => {
	console.log(tree.value);
	
	if (tree && tree.next && tree.next.length === 0) {
		console.log('no childs');
	}

	for (let i = 0; i < tree.next.length; i++) {
		const child = tree.next[i];
		findChilds(child);
	}
}

findChilds(tree);
