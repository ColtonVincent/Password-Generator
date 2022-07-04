// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function writePassword(){
  var passwordLength = prompt("enter length here");
  passwordLength = parseInt(passwordLength);
  if (passwordLength >128 || passwordLength <8) {
    alert("Password length incorrect.");
    writePassword(); 
    return;
  }
  var passwordCharacters = ""
  var upperCase = confirm("can you use upperCase?");
  if (upperCase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    
  }
  var lowerCase = confirm("can you use lowerCase?");
  if (lowerCase) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";

    
  }
  var numeric = confirm("can you use numeric characters?");
  if (numeric) {
    passwordCharacters += "0123456789";

    
  }
  var specialCharacters = confirm("can you use special characters?");
  if (specialCharacters) {
    passwordCharacters += "!@#$%^&*()_-+=[]{}\|:;'";

    
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
