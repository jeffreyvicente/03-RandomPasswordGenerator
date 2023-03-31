// Assignment code here

/*
password length
password must be between 8 and 128
prompt for character types
upper lower case prompt
Create check for all the above

*/
var minPasswordLength = 8;
var maxPasswordLength = 128;

function passwordLength(){
  var length = prompt("How long do you want the password to be?");
  if (length < minPasswordLength || length > maxPasswordLength){
    alert("The length must be greater than " + 8 + " and less than " + maxPasswordLength + ". \nPlease try again!!");
    passwordLength();

  }
}

function lowerLetterCase(){
  var letterCaseInput = confirm("Do you want lower case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  
 
  if (letterCaseInput == true){
    alert(letterCaseInput);
    
  }else{
    alert(letterCaseInput);
  }


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  lowerLetterCase();

  //Orginal project code commented out for testing. 
  /* 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  */
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


