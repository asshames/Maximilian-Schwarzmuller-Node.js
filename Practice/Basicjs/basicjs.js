const name = 'Max';
var schoolName = 'B.B. Govt. School';
let age = 29;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby, UserschoolName) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby +
    ' and the user\'s school name: ' +
    UserschoolName
  );
}

console.log(summarizeUser(name, age, hasHobbies, schoolName));
