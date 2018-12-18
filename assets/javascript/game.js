/*
function name(params) {
    
}

//function above or func below is jQuery

function (param) {  }
*/

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

$(document).ready(function(){

// Array of Number Options (19-120). FINISH BELOW IF CORRECT
var number = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var number = Math.floor(Math.Rand*121)+19

// Computer selected number options (19-120) will be held here. VARIABLE CAPTAIN PLANET EX. ???

var computerNumber = "";

// Array of Values for individual beer vessels: 10,5,2,1

var pint = 10;
var mug = 5;
var chalice = 2;
var flute = 1;

// Holds the total of numbers user selects by clicking beer vessels. Adds pint, mug, chalice, flute click events.
// substitue class used for crystal below. ??? all together or one for each
var sum = 0
    $(".pint .mug .chalice .flute").on('click',function (){
        var crystalVal = this.attr("value");
        sum +=parseInt(crystalVal);
    })

// ???var vesselTotal = "";

// Game counters for Wins and Losses

var winCounter = 0;
var lossCounter = 0;

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)

$(function(){

    // jQuery methods go here... MODIFY THOSE FROM CALCULATOR ACTIVITY???
  
  });

// Reset Computer selected number (19-120)

// ??? initializecomputerNumber();

// Reset the total of numbers user selects by clicking beer vessels

// ??? initializevesselTotal();

// Computer selected number chosen randomly from (19-120).

// We print the solution in console (for testing).
console.log(chosen???);

//CRITICAL LINE
  // ??? Here we *reset* the guess and success array at each round. Works with above.
 


// checkNumbers() function  ??? NECESSARY ???
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.  



// roundComplete() function
// Here we will have all of the code that needs to be run after a vessel selection is made.



// HTML UPDATES
  // ============


// This will print the array of total of vessel selection values onto the page. 
// How will it add them?



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


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function


// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Runs the code to log selections.

  /* ??? EDIT AND REPEAT FOR ALL FOUR IMAGES
  
  $(".shrink-button").on("click", function() {
          captainPlanet.animate({ height: "100px" });
        });

*/

  // Runs the code that ends each round.
  


});