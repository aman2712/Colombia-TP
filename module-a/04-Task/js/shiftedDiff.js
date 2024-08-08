// get reference to DOM elements
const string1 = document.getElementById('string1')
const string2 = document.getElementById('string2')
const button = document.getElementById('calc')
const message = document.getElementById('message')

/**
 * Write a function that receives two strings and returns the number of characters we would need to rotate the first string forward to match the second.
 *
 * @param {String} first
 * @param {String} second
 * @return {Number}
 */

// track counter of rotations
let counter = 0

// function to calculate rotations
function shiftedDiff(first, second) {
	// split string to array, remove last element and rotate
	const firstArray = first.split('')
	const lastChar = firstArray.pop()
	let rotatedString = lastChar + firstArray.join('')
	counter += 1;
	// check if counter has exceeded length of second string + 1 which means combination will never be reached
	if(counter > second.length + 1){
		return -1
	}
	// return number of rotations if objective is reached
	else if(rotatedString === second){
		return counter
	}
	else{
		// if condition is not met, enter recursion until output is obtained
		return shiftedDiff(rotatedString, second)
	}
}

// add event listener on button
button.addEventListener('click', () => {
	counter = 0

	// return 0 if both strings are same
	if(string1.value === string2.value){
		message.innerHTML = 0;
		return;
	}

	// get output and add to DOM
	const turns = shiftedDiff(string1.value, string2.value)

	message.innerHTML = turns
})