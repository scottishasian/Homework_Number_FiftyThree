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
		const result = arr.reduce((total, amount) => total + amount);
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

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
