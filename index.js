// Write your solution in this file!
const employee = {
  name: 'Sam',
  streetAddress: '12 Seattle',
}

//test 1: creates a function. create a copy of employee that you will use to carry the tests.
//The copy(newObject) will prevent mutability of your original object.
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObject= {... employee}
  newObject[key] = value;

  return newObject;
}

//test 2: return a clone of original object with new value in the streetAddress key
const employees = updateEmployeeWithKeyAndValue (employee, "streetAddress", "11 Broadway");

//test 3: creates  a function that allows mutability of original object(employee)
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
  employee[key] = value;
  return employee;
}


console.log(employees)
console.log(employee)