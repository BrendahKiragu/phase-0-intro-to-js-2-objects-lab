// Write your solution in this file!
const employee = {
  name: 'Sam',
  streetAddress: '12 Seattle',
}

//create a function. create a copy of employee that you will use to carry the tests.
//The copy9newObject will prevent mutability of your original object.
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObject= {... employee}
  newObject[key] = value;

  return newObject;
}

const employees = updateEmployeeWithKeyAndValue (employee, "streetAddress", "11 Broadway");

console.log(employees)
console.log(employee)