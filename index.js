'use strict';

const mockData = require('./mockData.js').data;

//Array Gender
const genders = ['M', 'F', 'X'];

//Array location
const locations = ['rural', 'city'];

// Empty profile object 
let profile = {
  first_name: "", last_name: "", age: null, gender: "", gender_interest: "", location: "", min_age_interest: null, max_age_interest: null
};

//first name
while (true) {
  let first_name = prompt("What is your first name?");
  if (first_name === "") {
    console.log("You did not fill in your first name !");
  } else {
    profile.first_name = first_name;
    break;
  }
}

//last name
while (true) {
  let last_name = prompt("What is your last name?");
  if (last_name === "") {
    console.log("You did not fill in your last name !");
  } else {
    profile.last_name = last_name;
    break;
  }
}

//age
while (true) {
  let age = Number(prompt("What is your age?"));
  if (age === 0) {
    console.log("please fill in your age !");
  }
  else if (age < 18) {
    console.log("You are still not 18 !");
    continue;
  } else {
    profile.age = age;
    break;
  }
}

//gender
while (true) {
  let gender = prompt("What is your gender? (F, M, X)");
  if (gender === "") {
    console.log("You did not fill in your gender !");
  } else if (genders.includes(gender)) {
    profile.gender = gender;
    break;
  } else {
    console.log("Please fill in your gender ! ( F, M, X)");
  }
}

//gender interest
while (true) {
  let gender_interest = prompt("Which genders are you interested in dating? (F, M, X)");
  if (gender_interest === "") {
    console.log("You did not fill in which genders are you interested !");
  } else if (genders.includes(gender_interest)) {
    profile.gender_interest = gender_interest;
    break;
  } else {
    console.log("Please fill in which genders are you interested  ! ( F, M, X)");
  }
}

//location
while (true) {
  let location = prompt("Where do you live? (rural , city )");
  if (location === "") {
    console.log("You did not fill in your location !");
  } else if (locations.includes(location)) {
    profile.location = location;
    break;
  } else {
    console.log("Please fill in your location ! ( rural , city)");
  }
}

//min_age_interest
while (true) {
  let min_age_interest = Number(prompt("What is the minimum age you are intrested for dating?"));
  if (min_age_interest === 0) {
    console.log("please fill in the minimum age you are intrested for dating !");
  }
  else if (min_age_interest < 18) {
    console.log("That is not possible! a date under 18 !");
    continue;
  } else {
    profile.min_age_interest = min_age_interest;
    break;
  }
}

//max_age_interest
while (true) {
  let max_age_interest = Number(prompt("What is the maximum age you are intrested for dating?"));
  if (max_age_interest === 0) {
    console.log("please fill in the maximum age you are intrested for dating !");
  } else if (max_age_interest < 18) {
    console.log("That is not possible! a date under 18 !");
    continue;
  } else if (max_age_interest > 99) {
    console.log("That is too old to start a date!");
    continue;
  } else if ((profile.min_age_interest) > (max_age_interest)) {
    console.log(" Minimum age that you are intrested in is higher than maximum age ! Please check that again!  ")
    //console.log(profile.min_age_interest);
    //console.log(max_age_interest);
  }
  else {
    profile.max_age_interest = max_age_interest;
    break;
  }
}

let result = [];
for (const item of mockData) {

  if (profile.min_age_interest <= item.age
    && profile.max_age_interest >= item.age
    && item.min_age_interest <= profile.age
    && item.max_age_interest >= profile.age
    && item.gender_interest === profile.gender
    && profile.gender_interest === item.gender
    && profile.location === item.location
  ) {
    result.push(item);
  }
}

// print out their name, age and location.
console.log(`The number of matching results are : ` + result.length);
for (const item of result) {
  console.log(` ${item.first_name} ${item.last_name}, ${item.age} from ${item.location}.`);
}

