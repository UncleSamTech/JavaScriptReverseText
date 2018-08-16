/*A JavaScript function that is used for reversing any string passed to it from back to front
written by Samuel Iwuchukwu*/

function reverseString(string_value){
//This is the variable that holds the new reversedString.
//It is declared with an empty string here
var reversedString = "";
//this is used for looping through each of the characters starting from the last value to the first value with index 0
for(var i = string_value.length - 1 ; i >= 0; i--){
//The value is added to the string each time the variable is reversed
reversedString += string_value[i];
}
//The reversed string is returned here
return reversedString; 
}
