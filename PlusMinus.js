function plusMinus(arr) {
  let negative=0, positive=0, zero=0;
  arr.forEach(x =>{
      if (x===0) zero += 1;
      else if (x < 0) negative += 1;
      else if (x > 0) positive += 1;
  });
  console.log((positive/arr.length).toPrecision(6));
  console.log((negative/arr.length).toPrecision(6));
  console.log((zero/arr.length).toPrecision(6));
}

plusMinus ([-4, 3, -9, 0, 4, 1]);