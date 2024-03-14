/*
New Concept Pursued: Regular Expressions

In this code, regular expressions are used to validate the email format.
*/

const form = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');
const outputSection = document.getElementById('outputSection');
const output = document.getElementById('output');

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const userEmail = userInput.value.trim();

  if (userEmail !== '') {
    if (emailRegex.test(userEmail)) {
      output.innerHTML = `<p>Thank you for signing up with email: "${userEmail}". You will receive our weekly yoga knowledge newsletter shortly.</p>`;
      outputSection.style.display = 'block'; // Show the output section
    } else {
      output.innerHTML = '<p>Please enter a valid email address.</p>';
      outputSection.style.display = 'block'; // Show the output section
    }
  } else {
    output.innerHTML = '<p>Please enter your email address.</p>';
    outputSection.style.display = 'none'; // Hide the output section
  }
});
