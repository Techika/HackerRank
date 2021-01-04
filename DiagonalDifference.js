function diagonalDifference(arr) {
  // Write your code here
  let left = 0, right=0;
  for (let x = 0; x < arr.length; x++){
      left += arr[x][x];
      right += arr[x][arr.length-1-x];
      console.log(x, left,right);
  }
  return Math.abs(left-right);
}

var matrix =
[
  [11, 2, 4]
  ,[4, 5, 6]
  ,[10, 8, -12]
];

console.log(diagonalDifference(matrix));