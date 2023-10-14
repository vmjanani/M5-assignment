let number01;
let number02;
let operator;
let result;
let again = true;

performCalcuation();

function performCalcuation() {
 
    while(again === true){

        numberOne();
        numberTwo();
        operaterUsed();
        calculation();
        moreCalculations();

        console.log(number01, number02, operator, result);

    }

};

// COLLECT FIRST NUMBER FROM USER
function numberOne(){

    number01 = parseInt(prompt('Enter your first number:'));

    if (isNaN(number01)){
        alert('Error.  Please enter a valid number.');
        numberOne();
    };

};

// COLLECT SECOND NUMBER FROM USER
function numberTwo(){

    number02 = parseInt(prompt('Enter your second number:'));

    if (isNaN(number02)){
        alert('Error.  Please enter a valid number.');
        numberTwo();
    };

};

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function operaterUsed(){

    operator = String(prompt('Select one of the following operators: (+,-,*,/);'));

    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
        alert('Erorr.  Please enter a valid operator.');
        operaterUsed();
        
    };

    return operator;

};

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
function calculation(){

    switch(operator){
        case '+':
            result = addValues(number01, number02);
            break;
        case '-':
            result = subtractValues(number01, number02);
            break;
        case '*':
            result = multiplyValues(number01, number02);
            break;
        case '/':
            result = divideValues(number01, number02);
    default: 
        break;
    };

    alert(number01 + ' ' + operator + ' ' + number02 + ' = ' + result);

};

function moreCalculations(){

        return again = confirm('Would you like to do another calculation?');

};


function calculate(){};

// ADD FUNCTION
function addValues(one,two){

    return one + two;

};
// SUBTRACT FUNCTION
function subtractValues(one, two){

    return one - two;
};
// MULTIPLY FUNCTION
function multiplyValues(one, two){

    return one * two;

};
// DIVIDE FUNCTION
function divideValues(one,two){

    return one / two;

};
