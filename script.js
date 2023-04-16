function threeSum(arr, target) {
// write your code here
 // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Initialize variables for minimum difference and closest sum
  let minDiff = Infinity;
  let closestSum = 0;
  
  // Loop through each element in the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    // Use two pointers to find two numbers that add up to the target minus the current number
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let diff = Math.abs(target - sum);
      
      // If the difference is smaller than the current minimum, update the minimum and closest sum
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      
      // If the sum is too small, move the left pointer to the right
      if (sum < target) {
        left++;
      }
      // If the sum is too large, move the right pointer to the left
      else {
        right--;
      }
    }
  }
  
  // Return the closest sum
  return closestSum;
}

module.exports = threeSum;
