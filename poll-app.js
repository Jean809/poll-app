"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

const dataPoints = {
  //This is for testing the method, consider it useless unless you want to test something
  data1: [5, 2, 3],
  data2: [1, 5, 3, 9, 6, 1],
};

console.log(poll);

const registeredAnswer = (poll.registerNewAnswer = function () {
  const optionAnswer = Number(
    prompt(
      `${this.question}\n${this.options.join("\n")}\n(write option number)`
    )
  );

  if (optionAnswer <= this.answers.length) {
    this.answers[optionAnswer]++;
  } else {
    alert(`${optionAnswer} is not within the options. Please try again.`);
  }
});

registeredAnswer.displayResults = function (type = poll.answers) {
  if (Array.isArray(type)) {
    console.log([...type]);
  } else if (typeof type === "string") {
    console.log(`Poll results are ${type}`);
  }
};

document.querySelector(".poll").addEventListener("click", function () {
  poll.registerNewAnswer();
  registeredAnswer.displayResults(`${poll.answers}`);
});
