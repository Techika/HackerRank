function staircase(n) {
  for (let step = 1; step <= n; step++){
    console.log(' '.repeat(n-step) + '#'.repeat(step));
  }
}

staircase(6);