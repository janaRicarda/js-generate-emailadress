//generate an email adress

function generateEmail(newUser) {
  const firstName = newUser.firstName.toLowerCase();
  const lastName = newUser.lastName.toLowerCase();
  return `${firstName}.${lastName}@example.com`;
  // function implementation
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

const email = generateEmail(newUser);
console.log(email);

//Guess the first and last name from the email

function getUserFromEmail(email) {
  // if the email does not contain a @, return null
  if (!email.includes("@")) {
    return null;
  }
  // if it does, split the email at @ and take the first entry in consideration
  const splitEmail = email.split("@");
  const name = splitEmail[0];

  // if such part does not have a ., return null
  if (!name.includes(".")) {
    return null;
  }
  // if it does, you know what you have to do!
  const splitName = name.split(".");
  return {
    firstName: capitalize(splitName[0]),
    lastName: capitalize(splitName[1]),
  };
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));

//Bring it online

const form = document.querySelector('[data-js="form"]');
const span = document.querySelector('[data-js="generated-email"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const user = Object.fromEntries(formData);

  span.textContent = generateEmail(user);
});
