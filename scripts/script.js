// Assignment code here

var minPasswordLength = 8;
var maxPasswordLength = 128;

var characterLibrary = "";
var alphaLowerLibrary = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperLibrary = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var numberLibrary = "0123456789"
var symbolsLibrary = "!@#$%^&*()";

//Test generatePassword function without entering values
/*
var temp3 = "";

for (index = 0; index < 10 ; index++){
var templib = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789"
var temp2 = templib.length;
console.log("This is the temp2 value " + temp2);
var tempChar = templib.charAt(Math.random(Math.floor) * templib.length);
console.log("This is the temp char value " + tempChar);

//temp3 = temp3 + tempChar;
temp3 += tempChar;
console.log("Temp 3 value "+ temp3);

}
*/

function generatePassword(passwordLength){

  passwordContainer = "";
  for(index = 0; index < passwordLength; index++){
    var randomChar = characterLibrary.charAt(Math.random(Math.floor) * characterLibrary.length);
    passwordContainer += randomChar;
    //Test condition printed in console. 
    //console.log ("This is the value in generatePassord " + passwordContainer);
  }

  return passwordContainer;
  
}

//Prompts the user for the password length
function passwordLength(){
  var length = prompt("How long do you want the password to be?");
  if (length < minPasswordLength || length > maxPasswordLength){
    alert("The length must be greater than " + 8 + " and less than " + maxPasswordLength + ". \nPlease try again!!");
    passwordLength();
  }



  return length;
}

//Prompts the user if the password requires lower case values
function lowerLetterCase(){
  var letterCaseInput = confirm("Do you want LOWER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE lower case characters!");
    characterLibrary += alphaLowerLibrary;
    //Test condition printed in console. 
    //console.log("This is from the lower Case function: " + characterLibrary)
  }else{
    alert("You have chosen to EXCLUDE lower case characters!");
  }
  return letterCaseInput;
}

//Prompts the user if the password requires upper case values
function upperLetterCase(){
  var letterCaseInput = confirm("Do you want UPPER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE upper case characters!");
    characterLibrary += alphaUpperLibrary;
    //Test condition printed in console. 
    //console.log("This is from the Uper Case function: " + characterLibrary)
  }else{
    alert("You have chosen to EXCLUDE upper case characters!");
  }
  return letterCaseInput;
}

//Prompts the user if the password requires special values
function symbolsPrompt(){
  var letterCaseInput = confirm("Do you want SPECIAL characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE special characters!");
    characterLibrary += symbolsLibrary;
    
    //Test condition printed in console. 
    //console.log("This is from the Symbols function: " + characterLibrary)

  }else{
    alert("You have chosen to EXCLUDE special characters!");
  }
  return letterCaseInput;
}

function numberPrompt(){
  var letterCaseInput = confirm("Do you want NUMBERS characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE numnbers!");
    characterLibrary += numberLibrary;
    
    //Test condition printed in console. 
    //console.log("This is from the Number function: " + characterLibrary)

  }else{
    alert("You have chosen to EXCLUDE numbers!");
  }
  return letterCaseInput;
}

function passwordVerification(length, lower, upper, symbol, number){

  //Test condtion to check if the variables in the method are passing properly
  //console.log("This is a test of passing variables into a function " + length +" "+ lower + " " + upper + " " + symbol);
  var userInput = confirm("Would you like to continue with the following password characters? \n\nPassord Length: " + length + "\nLower Case: " + lower + "\nUpper Case: " + upper + "\nSymbols: "+ symbol + "\nNumbers: " + number +"\n\nYes - Press OK \nNo - Press Cancel ");

  if(userInput == false){
    writePassword()
  }

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Clears out characterLibrary when a user attempts to create a new passord. If not cleared the characters from the previous library will be used. 
  characterLibrary = ""
  var length = passwordLength();
  var lower = lowerLetterCase();
  var upper = upperLetterCase();
  var symbol = symbolsPrompt();
  var number = numberPrompt();

  //Test case to verify data in console log.
  //console.log("Printing out the library " + characterLibrary);

  

 
  if(characterLibrary == "")
  {
    console.log("characterLibrary is blank");
    alert("You have chosen no character, please try again.");
  }else{
    passwordVerification(length, lower, upper, symbol, number);
    applyPassword();

  }


  //Console check to ensure return values from the methods above are returned properly.
  /*
  console.log("This is the password lenght output "+ length);
  console.log("This is the lower case output "+ lower);
  console.log("This is the upper case output "+ upper);
  console.log("This is the symbol output "+ symbol);
  */


  //generatePassword(length);

  //Orginal project code commented out for testing. 
  function applyPassword(){
  var password = generatePassword(length);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


