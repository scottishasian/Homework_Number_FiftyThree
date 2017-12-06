var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd );
		return arr;
	},

	square: function (arr) {
		let newArray = [];
		arr.forEach(function(number){
			newArray.push(number * number)
		});
		return newArray;

	},

	sum: function (arr) {
		let result = arr.reduce((total, amount) => total + amount);
		return result;

	},

	findDuplicates: function (arr) {  //Had to use internet help.
		let newArray = [];
		arr.forEach(function(number, index) {
			if(arr.indexOf(number, index + 1) > -1){
				if(newArray.indexOf(number) === -1){
					newArray.push(number);
				}
			};
		})
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		let newArray = [];
		arr.filter(function(number){
			if(number != valueToRemove){
				newArray.push(number);
			}
		})
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
	// 	let newArray = [];
  //
	// 	arr.findIndex(function(number){
	// 		if(number === itemToFind){
	// 			newArray.push(number)
	// 		}
	// 	});
  //
	// 	return newArray;
  //
	// },


	sumOfAllEvenNumbersSquared: function (arr) {
		let newArray = [];
		let newerArray = [];
		let count = 0;
		arr.filter(function(number){
			if(number % 2 === 0){
				newArray.push(number)
				}
		})
		newArray.forEach(function(number){
			let result = number * number;
			newerArray.push(result);
		})
		let added = newerArray.reduce((total, amount) => total + amount);

		return added;
	}

}

module.exports = arrayTasks
