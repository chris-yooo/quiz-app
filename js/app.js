function toggleAnswer(button_name, answer_name) {
  const buttonIdentifier = "[data-js=" + button_name + "]";
  const clickButton = document.querySelector(buttonIdentifier);
  const answerIdentifier = "[data-js=" + answer_name + "]";
  const answerElement = document.querySelector(answerElement);
clickButton.addEventListener("click" () => answerIdentifier.classList.toggle("hidden")
);
}

toggleAnswer("button1","answer1");
toggleAnswer("button2","answer2");
toggleAnswer("button3","answer3");