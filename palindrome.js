function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

const testString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(testString);

console.log(result ? `${testString} is a palindrome.` : `${testString} is not a palindrome.`);
