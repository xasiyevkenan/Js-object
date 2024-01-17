const personalProfile = {
  firstName: "Kenan",
  lastName: "Xasiyev",
  age: 18,
  favoriteLanguage: "JavaScript",
  contactInfo: {
    phoneNumber: "0553209707",
    email: "xasiyevkenan48@gmail.com",
  },
};

let myOccupation = "occupation";

personalProfile["speciality"] = "Information Technology"; //for method 1
personalProfile.occupation = "Software Developer"; //for method 2

console.log(personalProfile.occupation); //method 1
console.log(personalProfile["occupation"]); //method 2
console.log(personalProfile[myOccupation]); //method 3

console.log(personalProfile);
console.log(personalProfile.age); //method 1
console.log(personalProfile["firstName"]); //method 2
console.log(personalProfile.contactInfo.email); //method 1
console.log(personalProfile["contactInfo"]["email"]); //method 2
console.log(personalProfile["contactInfo"].phoneNumber); //method 3
console.log(personalProfile.contactInfo.adress); //for undefined output
console.log(personalProfile["contactInfo"].adress); //for undefined output
console.log(personalProfile["contactInfo"]["adress"]); //for undefined output
