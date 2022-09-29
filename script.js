// 1a.
let warmHugs = "Hi \, I\'m Olaf and I like warm hugs."

// 1b.
console.log(warmHugs.toUpperCase());

// 1c.
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
// Or
// console.log(warmHugs.replace("like", "love"));

// 2a.
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b.
console.log(beenImpaled.slice(18, 36));
console.log(beenImpaled.slice(-18));
// 3a.
let dotDotDot = "...";

// 3b.
let skullBones = `I don't have a skull${dotDotDot}or bones`; 

// 4.
console.log(Math.PI);

// 5.
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber ++;
// Or
// let randomNumber = Math.ceil(Math.random()*3);
// Or
let randomNumber = Math.floor(Math.random()*3 = 1);

// Bonus:
// 6.
console.log(" Let It Go!".repeat(2).toUpperCase().trim());

// 7a.
let reindeers = "Reindeers are better than people.";

// 7b.
console.log(reindeers.replace(/ /gi, "_"));

// 8.
console.log(Math.sqrt(2));

// 9.
let newRandomNumber = Math.floor((Math.random()*(17)+7))

console.log(newRandomNumber);