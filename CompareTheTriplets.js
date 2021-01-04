'use strict';

function compareTriplets(a, b) {
  let output=[0,0];
  // if (a.length != b.length){
  //     console.log ('Both contestants need to submit equal amout of entries');
  //     return output;
  // }
  for (let entry = a.length-1; entry >= 0 ; entry--){
      switch (true){
          case (a[entry] < b[entry]):
              output[1] += 1; break;
          case (a[entry] > b[entry]):
              output[0] += 1; break;
          default :
              break;
      } 
      // if (a[entry] > b[entry]) output[0] += 1;
      // else if (a[entry] < b[entry]) output[1] += 1;
      
  }
  return output;
}

console.log(compareTriplets([5,6,7],[3,6,10]));
