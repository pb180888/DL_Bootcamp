// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
function isOmnipresent(arr, val) {
  // Iterate over each subarray in the 2D array
  for (let subarr of arr) {
    // If the value is not in the current subarray, return false
    if (!subarr.includes(val)) {
      return false;
    }
  }
  // If we made it through all subarrays and didn't return false, the value is omnipresent
  return true;
}
console.log(
  isOmnipresent(
    [
      [35, 56, 23],
      [23, 45, 56],
      [23, 56, 67],
      [23, 78],
    ],
    1
  )
);
