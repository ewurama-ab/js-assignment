var randomNumber = Math.floor(Math.random() * 50 + 1);
var guess=1;

document.getElementById('submitGuess').onclick = function()
{
var guesses = document.getElementById("guessBox").value;

    if(guesses == randomNumber)
    {
        alert("Yes! You guessed right!");
    }
    else if (guesses > randomNumber)
    {
        guess++;
        alert("Try a smaller number!");
    }
    else if (guesses < randomNumber)
    {
        guess++;
        alert("Try a bigger number!"); 
    }
    else
    {
        guess++;
        alert("Oops! I don't understand that! Try again!");
    }
}
