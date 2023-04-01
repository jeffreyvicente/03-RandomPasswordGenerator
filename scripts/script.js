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

//Prompts the user for the password length
function passwordLength(){
  var length = prompt("How long do you want the password to be?");
  if (length < minPasswordLength || length > maxPasswordLength){
    alert("The length must be greater than " + 8 + " and less than " + maxPasswordLength + ". \nPlease try again!!");
    passwordLength();

  }
}

//Prompts the user if the password requires lower case values
function lowerLetterCase(){
  var letterCaseInput = confirm("Do you want LOWER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE lower case characters!");
  }else{
    alert("You have chosen to EXCLUDE lower case characters!");
  }
}

//Prompts the user if the password requires upper case values
function upperLetterCase(){
  var letterCaseInput = confirm("Do you want UPPER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE upper case characters!");
  }else{
    alert("You have chosen to EXCLUDE upper case characters!");
  }
}

//Prompts the user if the password requires special values
function symbolsPrompt(){
  var letterCaseInput = confirm("Do you want SPECIAL characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE special characters!");
  }else{
    alert("You have chosen to EXCLUDE special characters!");
  }
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  lowerLetterCase();
  upperLetterCase();
  symbolsPrompt();

  //Orginal project code commented out for testing. 
  /* 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  */
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


