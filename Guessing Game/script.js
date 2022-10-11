let random = Math.floor(Math.random() * 100 + 1);
console.log("Random Number", random);

function checkGuess() {
  let myGuess = guess.value;
  if (myGuess === random) {
    feedback.textContent = "Du gissade rätt";
  } else if (myGuess > random) {
    feedback.textContent =
      "Din gissning var " + myGuess + ". Det är för högt. Försök igen!";
  } else if (myGuess < random) {
    feedback.textContent =
      "Din gissning var " + myGuess + ". Det är för lågt. Försök igen!";
  }
}
submitGuess.addEventListener("click", checkGuess);
