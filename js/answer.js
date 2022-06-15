export default function toggleAnswer() {
  const buttons = document.querySelectorAll('[data-js="show__button"]');
  const answers = document.querySelectorAll('.question-card__answer');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      answers[index].classList.toggle('hidden');
      button.innerText = answers[index].classList.contains('hidden')
        ? 'Show Answer'
        : 'Hide Answer';
    });
  });
}
