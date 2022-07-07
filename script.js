// Assignment Code
var generateBtn = document.querySelector("#generate");
  var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
  var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialCharactersChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","{","}",'/',"|", ":", ";", ","," ' ",' "'];

var generatedPwd ;
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

  var upperCase = confirm("can you use upperCase?");
  if (upperCase) {
   let passwordChar = upperCaseChar[Math.floor((Math.random()*  (upperCaseChar.length -1)))];
   generatedPwd.push(passwordChar);

    
  }
  var lowerCase = confirm("can you use lowerCase?");
  if (lowerCase) {
    let passwordChar = lowerCaseChar[Math.floor((Math.random()*  (lowerCaseChar.length -1)))];
   generatedPwd.push(passwordChar);

    
  }
  var numeric = confirm("can you use numeric characters?");
  if (numeric) {
    let passwordChar = numericChar[Math.floor((Math.random()*  (numericChar.length -1)))];
   generatedPwd.push(passwordChar);

    
  }
  var specialCharacters = confirm("can you use special characters?");
  if (specialCharacters) {
    let passwordChar = specialCharactersChar[Math.floor((Math.random()*  (specialCharactersChar.length -1)))];
   generatedPwd.push(passwordChar);

    
  }

    


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
