function isPalindrome(word) {
  // return new array of substrings
  const splitString = word.split("");
  //Reversing new array of elements
  const reverseString = splitString.reverse();

  //Joining all array elements into  a string
  const joinArray = reverseString.join("");

  //Checking for truthyness of joinArray element
  if(joinArray === word) {
    return true;
  }else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Create an isPalindrome() using function declaration
  split to  return a new array of substrings
  then reverse the characters and finally join the elements and log the output
*/

/*
  Add written explanation of your solution here
  Using function declaration I created a named function isPalindrome().
  From within the function scope I created three constant variables:
  splitString - takes our parameter and using split() method returns a new array of substrings of string elements.
  reverseString - takes our output from splitString and passes a reverse() method to that array reversing the indexes of our array elements.
  joinArray - takes output from reverseArray and passes the join() method that concantenates our array elements into a new string.
  Finally using control flow(if..else statement), checked for strict equality between our parameter and joinArray checking for truthyness of the condition.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("eve"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
