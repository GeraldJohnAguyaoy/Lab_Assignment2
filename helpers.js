// 1. Function to show a welcome message with first and last name
export function showWelcomeMessage(firstName, lastName) {
    console.log('Welcome ' + firstName + ' ' + lastName + ' to our student project!');
}

// 2. Function to convert meters to centimeters
export function metersToCentimeters(meters) {
    return meters * 100; // Simple conversion from meters to centimeters
}

// 3. Function to add two numbers
export function addNumbers(a, b) {
    return a + b; // Simple addition of two numbers
}

// 4. Function to reverse a text string
export function reverseText(text) {
    return text.split('').reverse().join(''); // Split the text, reverse it, and join back
}
