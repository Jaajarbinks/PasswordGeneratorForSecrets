// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "i", "j", "k", "l", "m", "n", "o", "p", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "."];

function generatePassword() {
  var password = [];
  var returnpassword = [];
  let allchar = [];
  // password length bt 8-128
  // prompt the user
  // lowercase, uppercase,symbols,numbers
passwordlength = window.prompt("enter amount between 8 and 128 character.")

// using a loop to make my char. work for every class
passwordsymbols = window.confirm("would you like to add symbols to your password?") 
if (passwordsymbols) {
password = password.concat(symbols);
var randomnumber = Math.floor((Math.random() * symbols.length) + 0);
allchar = allchar.concat(symbols[randomnumber])
}

passwordnumbers = window.confirm("would you like to add numbers to your password?")
if (passwordnumbers) {
  password = password.concat(numbers);
  var randomnumber = Math.floor((Math.random() * numbers.length) + 0);
  allchar = allchar.concat(numbers[randomnumber])
}

passwordlowercase = window.confirm("would you like to add lowercase to your password?");
if (passwordlowercase) {
  password = password.concat(lowercase)
  var randomnumber = Math.floor((Math.random() * lowercase.length) + 0);
  allchar = allchar.concat(lowercase[randomnumber])
}
passworduppercase = window.confirm("would you like to add uppercase to your password?");
if (passworduppercase) {
  password = password.concat(uppercase)
  var randomnumber = Math.floor((Math.random() * uppercase.length) + 0);
  allchar = allchar.concat(uppercase[randomnumber])
}



// console.log(allchar);

// validate the input
// generate password based on criteria
for (let i = 0; i < passwordlength; i++) {
  var randomnumber = Math.floor((Math.random() * password.length) + 0);
  returnpassword = returnpassword.concat(password[randomnumber]);
// console.log(randomnumber);
}

for (let i = 0; i < allchar.length; i++) {
  var randomnumber = Math.floor((Math.random()* returnpassword.length) + 0);
  returnpassword = returnpassword.splice(allchar);
}

returnpassword = returnpassword.join("")
// display password on page
  return returnpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
