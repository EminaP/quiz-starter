const shuffleQuestions = (questions) => {
  for (let i = 10000; i > 0; i--) {
    const j = Math.floor(Math.random() * questions.length);
    const k = Math.floor(Math.random() * questions.length);
    const temp = questions[j];
    questions[j] = questions[k];
    questions[k] = temp;
  }
};
shuffleQuestions(questions);
console.log(questions);
// console.log();
function createQuestion(question) {}
createQuestion(question[0]);
