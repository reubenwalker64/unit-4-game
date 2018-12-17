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

// Array of Number Options (19-120).



// Computer selected number options (19-120) will be held here.



// Array of Values for individual beer vessels: 10,5,2,1



// Holds the total of numbers user selects by clicking beer vessels



// Game counters for Wins and Losses



// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)

// Reset Computer selected number (19-120)



// Reset the total of numbers user selects by clicking beer vessels



// Computer selected number chosen randomly from (19-120).

// We print the solution in console (for testing).
console.log(chosen???);

//CRITICAL LINE
  // Here we *reset* the guess and success array at each round. Works with line 67 above.
 


// checkNumbers() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.  



// roundComplete() function
// Here we will have all of the code that needs to be run after a vessel selection is made.



// HTML UPDATES
  // ============


// This will print the array of total of vessel selection values onto the page. 
// How will it add them?



// If our number selectioin values equals the solution.
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
  

  // Runs the code that ends each round.
  