function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i=0; i<array.length; i++){
  const complement = target-array[i];
  for (let j = i + 1; j< array.length; j++){
    if (array[j]===complement) return true;
  }
}
 return false;
}  
/* 
  Write the Big O time complexity of your function here
*/
//0(n^2)

/* 
  Add your pseudocode here 
*/
// iterate through each number in the array
// for each number,identify a complement that adds to the target 
// iterate through the rest of the array
// keep checking if any number is a complement
// if so return true
// return false if i reach the end of the array
/*
  Add written explanation of your solution here
*/
// the code iterates through each number in the array identifies a complement
// number to the target number and iterates through the rest of the array checking
// if there is a complement. if it is there it returns true if not it returns false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
