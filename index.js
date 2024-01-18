function generateEmail(newUser) {
  return `${newUser.firstName.toLowerCase()}.${newUser.lastName.toLowerCase()}@example.com`;
  // function implementation
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

const email = generateEmail(newUser);
console.log(email);
