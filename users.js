const users = ["Alice", "Bob", "Charlie", "Diane", "Eve"]; 

const getUserByID = (arr, index) => arr[index];

console.log(getUserByID(users, 2));


module.exports = { getUserByID };