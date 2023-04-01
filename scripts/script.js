
//Password default conditions
var minPasswordLength = 8;
var maxPasswordLength = 128;

//String values with the possible password characters
var characterLibrary = "";
var alphaLowerLibrary = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperLibrary = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var numberLibrary = "0123456789"
var symbolsLibrary = "!@#$%^&*()";

/*
Generates the password depending on the user input.
Input: Password length from window prompt
Output: Generated password per the requested length
*/
function generatePassword(passwordLength){

  passwordContainer = "";   //Empty string to hold password during scipt
  for(index = 0; index < passwordLength; index++){
    var randomChar = characterLibrary.charAt(Math.random(Math.floor) * characterLibrary.length);    //Grabs the random character from the character library 
    passwordContainer += randomChar;    //Adds the random character to the empty string
    
    //Test condition printed in console. 
    //console.log ("This is the value in generatePassord " + passwordContainer);
  }

  //Retruns the password string
  return passwordContainer;
  
}

/*
Prompts the user for the password length
Input: User window input. User will input value
Output: Retruns the value entered from the window prompt
*/
function passwordLength(){
  var length = prompt("How long do you want the password to be?");  //Prompts the user for password length. 
  if (length < minPasswordLength || length > maxPasswordLength){    //Verfies if password meets requied condtion 
    //Informs the user that the password is the incorrect length and prompts the user to try again. 
    alert("The length must be greater than " + 8 + " and less than " + maxPasswordLength + ". \nPlease try again!!");
    passwordLength(); //Prompts for password length 
  }

  //Returns the length the user entered 
  return length;

}

/*
Prompts if password should have lower case values
Input: Confrim window appears. OK for yes. Cancel for no. 
Output: Retruns true or false value
*/
//Prompts the user if the password requires lower case values
function lowerLetterCase(){
  //Confrim window appears, prompts user if the user wants lower case values
  var letterCaseInput = confirm("Do you want LOWER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  //User validation, displays the user selection.
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE lower case characters!"); ////Alerts the user of their choice
    characterLibrary += alphaLowerLibrary;  //Adds the lower case values to the character library.
    
    //Test condition printed in console. 
    //console.log("This is from the lower Case function: " + characterLibrary)
  }else{
    alert("You have chosen to EXCLUDE lower case characters!"); ////Alerts the user of their choice
  }

  //Retruns ture or false value depending user selection
  return letterCaseInput;
}

/*
Prompts if password should have upper case values
Input: Confrim window appears. OK for yes. Cancel for no. 
Output: Retruns true or false value
*/
//Prompts the user if the password requires upper case values
function upperLetterCase(){
  var letterCaseInput = confirm("Do you want UPPER case characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE upper case characters!"); ////Alerts the user of their choice
    characterLibrary += alphaUpperLibrary;
    //Test condition printed in console. 
    //console.log("This is from the Uper Case function: " + characterLibrary)
  }else{
    alert("You have chosen to EXCLUDE upper case characters!");  ////Alerts the user of their choice
  }

  //Retruns ture or false value depending user selection
  return letterCaseInput;
}

/*
Prompts if password should have special characters
Input: Confrim window appears. OK for yes. Cancel for no. 
Output: Retruns true or false value
*/
//Prompts the user if the password requires special values
function symbolsPrompt(){
  var letterCaseInput = confirm("Do you want SPECIAL characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE special characters!");  //Alerts the user of their choice
    characterLibrary += symbolsLibrary;
    
    //Test condition printed in console. 
    //console.log("This is from the Symbols function: " + characterLibrary)

  }else{
    alert("You have chosen to EXCLUDE special characters!");  //Alerts the user of their choice
  }

  //Retruns ture or false value depending user selection
  return letterCaseInput;
}

/*
Prompts if password should have numbers
Input: Confrim window appears. OK for yes. Cancel for no. 
Output: Retruns true or false value
*/
function numberPrompt(){
  var letterCaseInput = confirm("Do you want NUMBERS characters in the password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("You have chosen to INCLUDE numnbers!");  //Alerts the user of their choice
    characterLibrary += numberLibrary;
    
    //Test condition printed in console. 
    //console.log("This is from the Number function: " + characterLibrary)

  }else{
    alert("You have chosen to EXCLUDE numbers!"); //Alerts the user of their choice
  }

  //Retruns ture or false value depending user selection
  return letterCaseInput;
}

/*
Prompts the user of their section from the previous prompts. 
Input: Confrim window appears. OK for yes. Cancel for no. If user cancels the user back to the input prompt
Output: No output
*/
function passwordVerification(length, lower, upper, symbol, number){

  //Test condtion to check if the variables in the method are passing properly
  //console.log("This is a test of passing variables into a function " + length +" "+ lower + " " + upper + " " + symbol);
  var userInput = confirm("Would you like to continue with the following password characters? \n\nPassord Length: " + length + "\nLower Case: " + lower + "\nUpper Case: " + upper + "\nSymbols: "+ symbol + "\nNumbers: " + number +"\n\nYes - Press OK \nNo - Press Cancel ");

  //If the user presses cacnel. The script will restart
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
  
  var length = passwordLength();  //Calls the passwordLength function to prompt the user for password length
  var lower = lowerLetterCase();  //Calls the lowerLetterCase function to prompt the user for lower case values
  var upper = upperLetterCase();  //Calls the upperLetterCase function to prompt the user for  upper case values
  var symbol = symbolsPrompt();   //Calls the symbolsPrompt function to prompt the user for symbols case valuse
  var number = numberPrompt();    //Calls the numberPrompt function to prompt the user for password length

  //Test case to verify data in console log.
  //console.log("Printing out the library " + characterLibrary);

  //Check if the user did not choose any values to add the the character library
  if(characterLibrary == "")
  {
    //Logged value used for debugging
    //console.log("characterLibrary is blank");
    alert("You have chosen no character, please try again."); //Alerts the user of the blank choices
  }else{
    passwordVerification(length, lower, upper, symbol, number); //Calls the password setting validation window
    applyPassword();  //Applys the password to the text box if section is not blank. 

  }

  //Console check to ensure return values from the methods above are returned properly.
  /*
  console.log("This is the password lenght output "+ length);
  console.log("This is the lower case output "+ lower);
  console.log("This is the upper case output "+ upper);
  console.log("This is the symbol output "+ symbol);
  */

  //Orginal project code commented out for testing. 
  function applyPassword(){
  var password = generatePassword(length);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


