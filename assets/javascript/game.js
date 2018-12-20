/*
Here's how the app works:

There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

Option 1 Game design notes 
The random number shown at the start of the game should be between 19 - 120.

Each crystal should have a random hidden value between 1 - 12.
*/

//START CODE HERE
// Creating variables

$(document).ready(function(){
console.log("hello");
// Array of Number Options (19-120). FINISH BELOW IF CORRECT
// var number = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var number = Math.floor(Math.random() * 121)+19;
console.log(number);
// Computer selected number options (19-120) will be held here. VARIABLE CAPTAIN PLANET EX. ???

var computerNumber = "";

$(".number").append(number);

// We print the solution in console (for testing).
console.log(computerNumber);

// Array of Values for individual beer vessels: 10,5,2,1

var pint = 10;
var mug = 5;
var chalice = 2;
var flute = 1;

var numberOptions = [10, 5, 2, 1];

var vesselsTotal = "pint" + "mug" + "chalice" + "flute";



// Holds the total of numbers user selects by clicking beer vessels. Adds pint, mug, chalice, flute click events.
// ??? all together or one for each
var sum = 0
    $(".pint .mug .chalice .flute").on('click',function (){
        var vesselsTotal = this.attr("value");
        sum +=parseInt(vesselsTotal);
    })

// Game counters for Wins and Losses

var winCounter = 0;
var lossCounter = 0;

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)

$(function(startGame){

    // jQuery methods go here... MODIFY THOSE FROM CALCULATOR ACTIVITY???
    function initializecomputerNumber() {
        
    }  

    function initializevesselTotal() {
        pint = "";
        mug = "";
        chalice = "";
        flute = "";

        $("#pint, #mug, #chalice, #flute").empty();
      }


  });
// End of start game code on line above. Incorporate a #score???


// roundComplete() function
// Here we will have all of the code that needs to be run after a vessel selections are made.

/* Add vessel values addition code with if else statements??? EDIT CODE BELOW. DO NOT UNDERSTAND THIS WELL.

$(".number").on("click", function() {

    // Check if we've already run a calculation, if so... we'll just.
    if (isCalculated) {
      return false;
    }

    // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
    //SHOULD SAY IF PINT CHOSEN ADD 10 TO VESSELS TOTAL and SUB IN PINT MUG CHALICE FLUTE FOR 1ST AND 2ND NUMBER ETC
    if (isOperatorChosen) {
      secondNumber += $(this).val();
      $("#second-number").text(secondNumber);

    }

    //ADDITONAL IF STATEMENTS FOR MUG, CHALICE, AND FLUTE ???
    else {
      firstNumber += $(this).val();
      $("#first-number").text(firstNumber);
    }

  });

//EDIT CODE BELOW ESPECIALLY OPERATOR (SHOULD ONLY BE ADDITION)

  $(".operator").on("click", function() {

    // Check if a first number has already been selected
    // Or we've already run a calculation, if so we just exit.
    if (!firstNumber || isCalculated) {
      return false;
    }

    // Set isOperatorChosen to true so we start writing to secondNumber
    isOperatorChosen = true;

    // Store off the operator
    operator = $(this).val();

    // Set the HTML of the #operator to the text of what was clicked
    $("#operator").text($(this).text());

  });
  $(".equal").on("click", function() {

    // If we already clicked equal, don't do the calculation again
    if (isCalculated) {
      return false;
    }

    // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
    isCalculated = true;

    /* Use parseInt to convert our string representation of numbers into actual integers
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    NECESSARY??? */

    // Based on the operator that was chosen.
    // Then run the operation and set the HTML of the result of that operation
    if (operator === "plus") {
      score = pint + mug + chalice + flute;
    }

   
    else if (operator === "power") {
      score = Math.pow(pint, mug, chalice, flute);
    }

    $("#score").text(score);

  });
  $(".clear").on("click", function() {

    // Call initializeCalculater so we can reset the state of our app

    /*
$(function(startGame){


    function initializecomputerNumber() {
        
    }  

    function initializevesselTotal() {
        pint = "";
        mug = "";
        chalice = "";
        flute = "";

        $("#pint, #mug, #chalice, #flute").empty();
      }


  });
    */

  });





// HTML UPDATES
  // ============

// Print the computer number to the page


// This will print the array of total of vessel selection values onto the page. 




// If our computer number selection values equals the user vessel selections.
  // (meaning that we guessed all the letters to match the solution)...
  


    // Add to the win counter



    // Give the user an alert
    


    // Update the win counter in the HTML


    // Restart the game



    // If number selectioin values go over the computer chosen number

        // Add to the loss counter
        
        
    
        // Give the user an alert
        
        
    
        // Update the loss counter in the HTML
       
        
    
        // Restart the game
