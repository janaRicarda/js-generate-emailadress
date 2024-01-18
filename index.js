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
