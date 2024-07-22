// Remove numbers
// We can either remove numbers or convert the numbers into their textual representations. 
// We can use regular expressions to remove the numbers. 

// 1. Using split() and join() methods
let str1 = "Hello 123 World 456";
let modifiedStr1 = str1.split('').filter(char => isNaN(char)).join('');

console.log(modifiedStr1); // Outputs: "Hello  World "
   /* 
   
   filter() : It is a type of method to create a new array with element that pass certain condition defined 
   by provided function.
   join() : It is a type of method to join all the elements of an array into
   char => isNAN(char) 
   This is a arrow function passed as argument in filter() method 
   t takes each element (char) 
   from the array and checks if it is not a number 
   (isNaN(char) returns true if char is NaN, i.e., not a number).
   
  
//Here
// step 1 
// We split the string into an array of characters using the split() method.
// step 2
// We filter the array to remove the numbers using the filter() method. The filter() method takes a
// function as an argument. 
// The function checks if the character is a number or not. 
// If it is a number, it returns false. Otherwise, it returns true. The filter() method returns a new   
// array containing only the characters that return true.

 */

