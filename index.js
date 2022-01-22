function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;
    if (word[i] != word[j]) return false
    else {
      return true;
    }

  }
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  the function should look at the first letter and make sure it is equal to the last letter, second letter equal to second last letter, etc.
  Therefore, function should iterate through each letter and see if letters match. if they do, return true, if not return false
*/

/*
  Add written explanation of your solution here
  function does what pseudocode describes, iterates through letters to ensure they are the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
