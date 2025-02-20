function firstNonRepeatedChar(str) {
  let charCount = {};

  // Count occurrences of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find and return the first character that occurs only once
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeated character is found, return null
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
