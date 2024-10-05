// Import functions from helpers.js
import { showWelcomeMessage, metersToCentimeters, addNumbers, reverseText } from './helpers.js';

// Call the functions with example values
showWelcomeMessage('Ayomide', 'Musa');
showWelcomeMessage('Gerald John', 'Aguyaoy');
showWelcomeMessage('Lucas', 'Nunes');

console.log('5 meters in centimeters: ' + metersToCentimeters(5));
console.log('Adding 4 and 7: ' + addNumbers(4, 7));
console.log('Reversed text of "Hello": ' + reverseText('Hello'));
