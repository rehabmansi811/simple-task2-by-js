// Initialize the sum of the values.
var sum = 0;

// Initialize a counter to keep track of the number of values entered.
var count = 0;

// Prompt the user for a value.
while (true) {
  const value = prompt(" pleas enter a numerical value: ");

  // Check if the value is numeric.
  if (!isNaN(value)) {
    // Add the value to the sum.
    sum += parseInt(value) ;

    // Increment the counter.
    count++;

    // If the sum is greater than 100 or the value is 0, stop receiving values from the user.
    if (sum > 100 || value === "0") {
      break;
    }
  } else if (isNaN(value)) {
    // Prompt the user to enter a valid numeric value.
     document.write("Please enter a valid numeric value.");
  }
  else
  document.write("The total larger than 100 ");
}

// Print the total sum of the entered values.
document.write("The total sum of the entered values is: " + sum);