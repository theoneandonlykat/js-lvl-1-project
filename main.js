function initialize()
{
    vaultCode = (Math.floor(Math.random()*3)+1).toString() + (Math.floor(Math.random()*3)+1) + (Math.floor(Math.random()*3)+1);
    console.log("Your current code is " + vaultCode);
    guessCode = "";
    outputCode = document.getElementById("currentCode");
    list = document.getElementById("lists");

    timer = 7;
    timerAmt = document.getElementById("timerAmount");
    timerAmt.innerHTML = "Current Timer: " + timer;
    gameOver = false;

    again = document.getElementById("playAgain");
    again.style.visibility = 'hidden';
}

function guessOne()
{
    if (!gameOver)
    {
        if (guessCode.length>=3)
    {
        console.log("Can't guess more than 3 numbers");
    }
    else
    {
        guessCode += 1;
        outputCode.innerHTML = "Current Code: " + guessCode;
        console.log(guessCode);
    }
    }
}
function guessTwo()
{
    if (!gameOver)
    {
        if (guessCode.length>=3)
        {
            console.log("Can't guess more than 3 numbers");
        }
        else
        {
            guessCode += 2;
            outputCode.innerHTML = "Current Code: " + guessCode;
            console.log(guessCode);
        }
    }
}
function guessThree()
{
    if (!gameOver)
    {
        if (guessCode.length>=3)
        {
            console.log("Can't guess more than 3 numbers");
        }
        else
        {
            guessCode += 3;
            outputCode.innerHTML = "Current Code: " + guessCode;
            console.log(guessCode);
        }
    }
}
function clearGuess()
{
    if (!gameOver)
    {
        guessCode = "";
        outputCode.innerHTML = "Current Code: " + guessCode;
        console.log("Cleared!");
    }
}

function addGuess()
{
    if (!gameOver)
    {
        var guess = document.createElement('li');
        guess.appendChild(document.createTextNode(guessCode + " " + checkCloseness()));
        list.appendChild(guess);
    }
}
function checkCloseness()
{
    if (parseInt(guessCode)<parseInt(vaultCode))
    {
        console.log("Your guess was low");
        return "Low";
    }
    else if (parseInt(guessCode)==parseInt(vaultCode))
    {
        console.log("Your guess was correct");
        return "Correct";
    }
    else{
        console.log("Your guess was high");
        return "High";
    }
}
function checkGuess()
{
    if (!gameOver)
    {
        console.log("Guess submitted");
        if (guessCode.length>=3)
        {
            if (guessCode==vaultCode)
            {
                console.log("ya got it");
                addGuess();
                gameOver=!gameOver;
                endGame()
            }
            else
            {
                console.log("ya didn't get it");
                addGuess();
                timer--;
                timerAmt.innerHTML = "Current Timer: " + timer;
                clearGuess();
                if (timer<=0)
                {
                    gameOver=!gameOver;
                    endGame()
                }
            }
        }
        else
        {
            console.log("Haven't inputted enough digits");
        }
    }
}
function endGame()
{
    let finish = document.getElementById("fin");
    if (timer > 0)
    {
        finish.innerHTML = "Congratulations, you've cracked the code!";
    }
    else
    {
        finish.innerHTML = "Unfortunately, you didn't manage to crack the code in time and the police arrived to arrest you.";
    }
    again.style.visibility = 'visible';
}
