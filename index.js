function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('')
  if(word.toLowerCase() === reverseWord.toLowerCase()){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
*/
// declare a reverseWord function that reversess the input String
// If the reversedWord is equal to the initial word, return isPalindrome = true
// else, return false
/*
  Add written explanation of your solution here
*/
// the function palidrome is used to check if the reversed word is equal to the initial word. 
// Therefore, I declared a reverseWord function that should be equal to the initial word when reversed. 
// i changed it to toLowerCase to prevent flagging of palindrome words. 
// I used the if...else statement to return Boolean
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log ("=>", isPalindrome('mom'));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
