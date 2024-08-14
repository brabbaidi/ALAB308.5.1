/* Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;

}


function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))


// Take an array of numbers and return the sum.
function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}


// Take an array of numbers and return the average.
function averageArray(numbers) {
  if (numbers.length === 0) {
      return 0;
  }
  
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  
  return sum / numbers.length;
}


// Take an array of strings and return the longest string.
function longestString(strings) {
  if (strings.length === 0) {
      return "";
  }
  
  var longest = strings[0];
  
  for (var i = 1; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
          longest = strings[i];
      }
  }
  
  return longest;
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(strings, length) {
  return strings.filter(function(string) {
      return string.length > length;
  });
}

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n, currentNumber = 1) {
  if (currentNumber > n) {
      return;
  }
  
  console.log(currentNumber);
  printNumbers(n, currentNumber + 1);
}


