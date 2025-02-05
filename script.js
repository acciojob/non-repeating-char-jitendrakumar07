function firstNonRepeatedChar(str) {
 // Write your code here
	 let charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }


}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

