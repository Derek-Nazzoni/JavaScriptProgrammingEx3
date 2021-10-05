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