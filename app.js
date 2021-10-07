/*JavaScript Programming Ex3
Dates
Derek Nazzoni
*/

let registration = new Date(2020, 0, 7, 8, 25);
console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

let now = new Date();
console.log(now);

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of Week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);
console.log(`Milliseconds: ${now.getMilliseconds()}`);

now.setFullYear(1999);
console.log(`${now.toDateString()} ${now.toTimeString()}`);

console.log('__________________');
console.log('EXERCISE 3');

let birthDate = new Date(1989, 10, 13);
console.log(birthDate);
console.log("What is the date 1 billion seconds from my birthday and how old am I or will be that year.");
let seconds = 1000000000;
let days = (seconds / 86400);
let nextDate = birthDate.getDate() + days;
let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
newDate.setDate(nextDate);
console.log(newDate);
let age = newDate.getFullYear() - birthDate.getFullYear();
console.log(`My age of year ${newDate.getFullYear()} is or will be ${age} `);

