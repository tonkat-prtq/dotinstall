'use strict';

{
  const scores = [80, 90, 40, 70];

  scores.splice(1, 1, 40, 50)

  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}