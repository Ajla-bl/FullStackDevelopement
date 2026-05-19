function showmessage(){
    alert('this is my first function')
}
showmessage()



function sum(number1,number2){
    return number1 + number2;

}
console.log(sum(32,42));



function toCelsius(Fahrenheit){
    return(5/9)*(Fahrenheit - 32)
}

var result = toCelsius(54);
console.log("54 fahrenheit is equal to "+result+"degrees")


function calculator(num1,num2){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

calculator(11,2);


