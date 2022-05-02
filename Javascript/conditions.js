const age = 17;
const isOldEnough = age >= 18;

console.log(isOldEnough);

if (age >= 18) {
  console.log("you are eligible for driver's license");
} else {
  console.log("you are not eligible for driver's license");
}

//Ternary operators
//syntax: condition ? istrue  : isfalse;

const result =
  age >= 18
    ? "you are eligible for driver's license"
    : "you are not eligible for driver's license";
console.log(result);

//Else-if Statement: if you have multiple scenarios;
//Gym workout: chest,back,biceps and triceps,abs,leg,restday;

const day = "thrusday";

if (day === "monday") {
  console.log("Today's workout is for chest");
} else if (day === "tuesday") {
  console.log("Today's workout is for back");
} else if (day === "wednesday") {
  console.log("Today's workout is for biceps and triceps");
} else if (day === "thrusday") {
  console.log("Today's workout is for abs");
} else if (day === "friday") {
  console.log("Today's workout is for leg");
} else if (day === "saturday" && !(day === "sunday")) {
  console.log("rest day");
} else {
  console.log("there is no such day");
}

//switch statement

switch (day) {
  case "monday":
    console.log("Today's workout is for chest");
    break;

  case "tuesday":
    console.log("Today's workout is for back");
    break;

  case "wednesday":
    console.log("Today's workout is for biceps and triceps");
    break;

  case "thrusday":
    console.log("Today's workout is for abs");
    break;

  case "friday":
    console.log("Today's workout is for leg");
    break;

  case "saturday":
    console.log("Rest day");
    break;

  case "sunday":
    console.log("rest day");
    break;

  default:
    console.log("there is no such day");
    break;
}
