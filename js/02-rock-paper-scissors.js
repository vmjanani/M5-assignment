// Variable declaration.
let user;
let computer;
let compare;
let play = true;


//Calls the game function to run.
rockPaperScissorsGame();


//Game function will run all requested functions to complete the game experience.
function rockPaperScissorsGame(){

    // Game will run as long as 'play' is 'true'
    while(play === true) {

        userOption();
        computerOption();
        compareOptions();
        finalResults();
        playAgain();

        console.log(user, computer, compare, play);

    };
    
    //If 'play' is 'false', game will end.
    if(play === false){
        alert('Thanks for playing.');
    };

};

//Function collects user input.
function userOption(){

    //User selection is taken.
    user = prompt('Pick \"Rock\", \"Paper\", or \"Scissors\":').toUpperCase();

    //User selection is evaluated.  Game will continue once validation passes.
    if (user !== 'ROCK' && user !== 'PAPER' && user !== 'SCISSORS'){''
         alert('Try Again.');
         userOption();
    };

    return user;

};

//Function collects computer input.
function computerOption(){

    //Computer selection is taken randomly.
     computer = Math.round(Math.random()*2);

     //Comptuer selection is converted to an assigned string value.
     if (computer === 0){
        return computer = 'ROCK';
     } else if (computer === 1){
        return computer = 'PAPER';
     } else if (computer === 2) {
        return computer = 'SCISSORS';
     };

};

//Function reviews user and computer selections
function compareOptions(){

    //Carparison value is based on the user and computer values.
    if (user === computer){
        return compare = 0;
    } else if (user === 'ROCK' & computer === 'PAPER'){
        return compare = 1;
    } else if (user === 'ROCK' & computer === 'SCISSORS'){
        return compare = 2;
    } else if (user === 'PAPER' & computer === 'ROCK'){
        return compare = 3;
    } else if (user === 'PAPER' & computer === 'SCISSORS'){
        return compare = 4;
    } else if (user === 'SCISSORS' & computer === 'ROCK'){
        return compare = 5;
    } else if (user === 'SCISSORS' & computer === 'PAPER'){
        return compare = 6;
    } else {
        return alert('Error has occured in compareOptions()');
    };
    
};

//Function determines who won the game.
function finalResults(){

    //Winner is determined by the results from compareOptions().
    switch(compare){
        case 0:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nIT\'S A TIE!');
            break;
        case 1:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nPAPER covers ROCK. \n\nCOMPUTER WINS!');
            break;
        case 2:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nROCK destroys SCISSORS. \n\nYOU WIN!');
            break;
        case 3:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nPAPER covers ROCK. \n\nYOU WIN!');
            break;
        case 4:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nSCISSORS cut PAPER. \n\nCOMPUTER WINS!');
            break;
        case 5:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nROCK destroys SCISSORS. \n\nCOMPUTER WINS!');
            break;
        case 6: 
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nSCISSORS cut PAPER. \n\nYOU WIN!');
            break;
        default:
            alert('An error has occured in finalResults()');
            break;   
        };

};

//Function determines if user wants to continue playing.
function playAgain(){

    return play = confirm('Want to play again?');

};
