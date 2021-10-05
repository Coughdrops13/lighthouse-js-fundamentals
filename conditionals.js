const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("make sure you pick out a scarf!");
}

console.log(" Now you're ready to go outside!");

const temperature = -41;

if (temperature < 0) {
  console.log("Make sure to pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside.");

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside ins't such a great idea...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}